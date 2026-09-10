const searchInput =
    document.getElementById("searchInput");

const specialtyFilter =
    document.getElementById("specialtyFilter");

const doctorCards =
    document.querySelectorAll(".doctor-card");

const noResults =
    document.getElementById("noResults");


function filterDoctors() {

    const searchValue =
        searchInput.value
            .toLowerCase()
            .trim();


    const selectedSpecialty =
        specialtyFilter.value;


    let visibleDoctors = 0;


    doctorCards.forEach(function (doctor) {

        const doctorName =
            doctor.dataset.name;


        const doctorSpecialty =
            doctor.dataset.specialty;


        const matchesName =
            doctorName.includes(searchValue);


        const matchesSpecialty =
            selectedSpecialty === "all"
            ||
            doctorSpecialty === selectedSpecialty;


        if (
            matchesName
            &&
            matchesSpecialty
        ) {

            doctor.style.display = "flex";

            visibleDoctors++;

        }

        else {

            doctor.style.display = "none";

        }

    });


    if (visibleDoctors === 0) {

        noResults.style.display = "block";

    }

    else {

        noResults.style.display = "none";

    }

}


/* البحث بالاسم */

searchInput.addEventListener(
    "input",
    filterDoctors
);


/* الفلترة حسب التخصص */

specialtyFilter.addEventListener(
    "change",
    filterDoctors
);