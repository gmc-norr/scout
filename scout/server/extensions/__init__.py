"""Code for extensions used by flask"""

from authlib.integrations.flask_client import OAuth
from flask_bootstrap import Bootstrap
from flask_login import LoginManager
from flask_mail import Mail

from scout.adapter import MongoAdapter
from scout.utils.track_resources import AlignTrackHandler

from .beacon_extension import Beacon
from .bionano_extension import BioNanoAccessAPI
from .chanjo2_extension import Chanjo2Client
from .chanjo_extension import ChanjoReport
from .clinvar_extension import ClinVarApi
from .gens_extension import GensViewer
from .ldap_extension import LdapManager
from .loqus_extension import LoqusDB
from .matchmaker_extension import MatchMaker
from .mongo_extension import MongoDB
from .panelapp_extension import PanelAppClient
from .phenopacket_extension import PhenopacketAPI
from .rerunner_extension import RerunnerError, RerunnerService

bootstrap = Bootstrap()
store = MongoAdapter()
clinvar_api = ClinVarApi()
login_manager = LoginManager()
ldap_manager = LdapManager()
oauth_client = OAuth()
mail = Mail()
loqusdb = LoqusDB()
mongo = MongoDB()
gens = GensViewer()
phenopacketapi = PhenopacketAPI()
rerunner = RerunnerService()
matchmaker = MatchMaker()
beacon = Beacon()
config_igv_tracks = AlignTrackHandler()
bionano_access = BioNanoAccessAPI()
chanjo_report = ChanjoReport()
chanjo2 = Chanjo2Client()
panelapp = PanelAppClient()
