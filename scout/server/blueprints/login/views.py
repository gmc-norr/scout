# -*- coding: utf-8 -*-
import logging
from datetime import datetime

from flask import (
    Blueprint,
    current_app,
    flash,
    redirect,
    render_template,
    request,
    session,
    url_for,
)
from flask_login import login_user, logout_user

from scout.server.extensions import login_manager, oauth_client, store
from scout.server.utils import public_endpoint

from . import controllers
from .models import LoginUser

LOG = logging.getLogger(__name__)

login_bp = Blueprint(
    "login",
    __name__,
    template_folder="templates",
    static_folder="static",
    static_url_path="/login/static",
)

login_manager.login_view = "login.login"
login_manager.login_message = "Please log in to access this page."
login_manager.login_message_category = "info"


@login_manager.user_loader
def load_user(user_id):
    """Returns the currently active user as an object."""
    user_obj = store.user(user_id)
    user_inst = LoginUser(user_obj) if user_obj else None
    return user_inst


@login_bp.route("/login", methods=["GET", "POST"])
@public_endpoint
def login():
    """Login a user if they have access."""

    if current_app.config.get("USERS_ACTIVITY_LOG_PATH"):
        if request.form.get("consent_checkbox") is None and "consent_given" not in session:
            flash(
                "Logging user activity is a requirement for using this site and accessing your account. Without consent to activity logging, you will not be able to log in into Scout.",
                "warning",
            )
            return redirect(url_for("public.index"))
        session["consent_given"] = True

    user_id = None
    user_mail = None

    if current_app.config.get("LDAP_HOST", current_app.config.get("LDAP_SERVER")):
        ldap_authorized = controllers.ldap_authorized(
            request.form.get("ldap_user"), request.form.get("ldap_password")
        )
        if ldap_authorized is True:
            user_id = request.form.get("ldap_user")
        else:
            flash("User not authorized by LDAP server", "warning")
            return redirect(url_for("public.index"))

    elif current_app.config.get("GOOGLE"):
        if session.get("email"):
            user_mail = session["email"]
            session.pop("email", None)
        else:
            redirect_uri = url_for(".authorized", _external=True)
            try:
                return oauth_client.google.authorize_redirect(redirect_uri)
            except Exception as ex:
                flash("An error has occurred while logging in user using Google OAuth")

    elif request.form.get("email"):  # log in against Scout database
        user_mail = request.form["email"]
        LOG.info("Validating user %s email %s against Scout database", user_id, user_mail)

    user_obj = store.user(email=user_mail, user_id=user_id)
    if user_obj is None:
        flash("User not found in Scout database", "warning")
        return redirect(url_for("public.index"))

    user_obj["accessed_at"] = datetime.now()
    if session.get("name"):  # These args come from google auth
        user_obj["name"] = session.get("name")
        user_obj["locale"] = session.get("locale")
    store.update_user(user_obj)

    user_dict = LoginUser(user_obj)
    return perform_login(user_dict)


@login_bp.route("/authorized")
@public_endpoint
def authorized():
    """Google auth callback function"""

    token = oauth_client.google.authorize_access_token()
    google_user = oauth_client.google.parse_id_token(token, None)
    session["email"] = google_user.get("email").lower()
    session["name"] = google_user.get("name")
    session["locale"] = google_user.get("locale")

    return redirect(url_for(".login"))


@login_bp.route("/logout")
def logout():
    logout_user()
    session.pop("email", None)
    session.pop("name", None)
    session.pop("locale", None)
    session.pop("consent_given", None)
    flash("you logged out", "success")
    return redirect(url_for("public.index"))


@login_bp.route("/users")
def users():
    """Show all users in the system."""
    data = controllers.users(store)
    return render_template("login/users.html", **data)


def perform_login(user_dict):
    if login_user(user_dict, remember=True):
        flash("you logged in as: {}".format(user_dict.name), "success")
        return redirect(url_for("cases.index"))
    flash("sorry, you could not log in", "warning")
    return redirect(url_for("public.index"))
