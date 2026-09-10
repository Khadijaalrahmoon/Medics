// ================= PATIENT DASHBOARD JAVASCRIPT =================


// ---------- View Details Button ----------

const detailsButton = document.querySelector(".details-btn");

if (detailsButton) {
    detailsButton.addEventListener("click", function () {
        alert("Appointment details");
    });
}


// ---------- Sidebar Navigation ----------

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(function (item) {

    item.addEventListener("click", function (event) {

        event.preventDefault();

        // Remove active class from all items
        navItems.forEach(function (nav) {
            nav.classList.remove("active");
        });

        // Add active class to clicked item
        item.classList.add("active");

    });

});


// ---------- Notification Button ----------

const notificationButton = document.querySelector(
    ".top-icons .icon-button:first-child"
);

if (notificationButton) {

    notificationButton.addEventListener("click", function () {

        alert("You have no new notifications.");

    });

}


// ---------- Profile Button ----------

const profileButton = document.querySelector(
    ".top-icons .icon-button:last-child"
);

if (profileButton) {

    profileButton.addEventListener("click", function () {

        alert("Patient Profile");

    });

}


// ---------- Logout Button ----------

const logoutButton = document.querySelector(".logout");

if (logoutButton) {

    logoutButton.addEventListener("click", function (event) {

        event.preventDefault();

        const confirmLogout = confirm(
            "Are you sure you want to log out?"
        );

        if (confirmLogout) {

            alert("You have been logged out.");

        }

    });

}