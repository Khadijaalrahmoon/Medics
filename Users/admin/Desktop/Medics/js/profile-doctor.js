const notificationBtn =
  document.getElementById("notificationBtn");


/* Notification button */

notificationBtn.addEventListener("click", () => {

  alert("No new notifications.");

});


/* Navigation */

document.querySelectorAll("nav a").forEach(link => {

  link.addEventListener("click", (event) => {

    event.preventDefault();

    document
      .querySelectorAll("nav a")
      .forEach(item => {

        item.classList.remove("active");

      });


    link.classList.add("active");

  });

});