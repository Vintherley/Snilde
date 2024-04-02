document.addEventListener('click', e => {
    const isDropdownButton = e.target.closest("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if(isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})

document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 5000); // Skift hvert 5. sekund
    }
});
//læs mere//
function toggleInfo(element, event) {
    event.preventDefault(); // Forhindrer standard scroll-opførsel
    element.parentElement.classList.toggle('active');
    if (element.parentElement.classList.contains('active')) {
        element.innerText = 'Skjul';
    } else {
        element.innerText = 'Se mere';
    }
}

//alfabetisk sortering//
function sortBoxesAlphabetically() {
    var container = document.querySelector('.container'); // Vælg den overordnede container
    var boxes = container.querySelectorAll('.box'); // Vælg alle kasserne inden i containeren

    // Konverter NodeList til et array, så vi kan bruge arrayfunktioner
    boxes = Array.prototype.slice.call(boxes);

    // Sorter kasserne alfabetisk baseret på teksten i h2-elementet
    boxes.sort(function(a, b) {
        var nameA = a.querySelector('h2').innerText.toUpperCase();
        var nameB = b.querySelector('h2').innerText.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    // Fjern eksisterende kasser fra containeren
    container.innerHTML = '';

    // Tilføj kasserne igen i alfabetisk rækkefølge
    boxes.forEach(function(box) {
        container.appendChild(box);
    });
}

// Kald sortBoxesAlphabetically funktionen, når siden er indlæst
window.onload = sortBoxesAlphabetically;