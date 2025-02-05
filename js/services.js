document.addEventListener("DOMContentLoaded", function () {
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    dropdownButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // Get the dropdown content related to the clicked button
            const dropdownContent = this.nextElementSibling;
            
            // Toggle the dropdown visibility
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                // Close all dropdowns first
                document.querySelectorAll(".dropdown-content").forEach((dropdown) => {
                    dropdown.style.display = "none";
                });
                
                // Open the clicked dropdown
                dropdownContent.style.display = "block";
            }
        });
    });
});
