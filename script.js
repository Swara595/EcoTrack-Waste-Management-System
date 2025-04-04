document.addEventListener("DOMContentLoaded", function () {
    const profileBtn = document.getElementById("profileBtn");
    const profileSection = document.getElementById("profileSection");
    const closeProfile = document.getElementById("closeProfile");

    profileBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent page reload

        // Show profile section when clicked
        profileSection.style.display = "block";
    });

    // Close button functionality
    closeProfile.addEventListener("click", function () {
        profileSection.style.display = "none";
    });

    // Close profile section when clicking outside of it
    document.addEventListener("click", function (event) {
        if (profileSection.style.display === "block" &&
            !profileSection.contains(event.target) &&
            event.target !== profileBtn) {
            profileSection.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myProfileTab").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Scroll smoothly to the registration form
        document.getElementById("registrationForm").scrollIntoView({ 
            behavior: "smooth" 
        });
    });
});





document.addEventListener("DOMContentLoaded", function () {
    // Select all nav links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default jump behavior

            // Extract the section ID from the link text (matching the section IDs in HTML)
            const targetID = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetID);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust offset for navbar
                    behavior: "smooth"
                });
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Select all nav links
    const navLinks = document.querySelectorAll("nav ul li a");
    const profileSection = document.getElementById("profileSection");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default jump behavior

            // Extract the target section ID
            const targetID = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetID);

            if (targetID === "profileSection") {
                // Make My Profile section visible before scrolling
                profileSection.style.display = "block";
            }

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for navbar height
                    behavior: "smooth"
                });
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('a[href="#rewards-container"]').addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        document.getElementById("rewards-container").scrollIntoView({
            behavior: "smooth" // Enables smooth scrolling effect
        });
    });
});

