const sections = document.querySelectorAll('section');

function change(page) {
    for (let i = 0; i < sections.length; i++) {
        if (page == i) {
            sections[page].style.display = "flex";
        } else {
            sections[i].style.display = "none";
        }
    }
}
change(0);