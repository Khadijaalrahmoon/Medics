const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(function(item) {

    item.addEventListener("click", function(event) {

        event.preventDefault();

        menuItems.forEach(function(menu) {
            menu.classList.remove("active");
        });

        this.classList.add("active");

    });

});


const statusButtons = document.querySelectorAll(".status");

statusButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (this.classList.contains("pending")) {

            this.classList.remove("pending");
            this.classList.add("confirmed");

            this.textContent = "Confirmed";

        } else {

            this.classList.remove("confirmed");
            this.classList.add("pending");

            this.textContent = "Pending";

        }

    });

});