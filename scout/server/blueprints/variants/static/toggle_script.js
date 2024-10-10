document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');

    // Function to refresh the checkbox list in case new rows are dynamically added
    function getCheckboxes() {
        return document.querySelectorAll('#variantTableBody input[type="checkbox"]');
    }

    // Update the button label based on whether all checkboxes are checked
    function updateToggleButtonLabel() {
        const checkboxes = getCheckboxes();
        const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
        toggleButton.textContent = allChecked ? 'Uncheck All' : 'Check All';
        toggleButton.setAttribute('aria-pressed', allChecked);
    }

    // Event listener to toggle checkboxes
    toggleButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default behavior if inside a form
        const checkboxes = getCheckboxes();
        const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

        checkboxes.forEach(checkbox => {
            checkbox.checked = !allChecked;
        });

        updateToggleButtonLabel();
    });

    // Event listener to update button text when any checkbox is changed
    getCheckboxes().forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            updateToggleButtonLabel();
        });
    });
});


