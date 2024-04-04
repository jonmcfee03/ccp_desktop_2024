let shown = false;
function showInstagram() {
    const instagram = document.getElementById("instagram-embed");
    const button = document.getElementById("show-ig");

    // hide element and change button text
    if (!shown) {
        instagram.style.display = 'flex';
        button.innerHTML = 'Click here to hide my instagram';
        shown = true;
    } else {
        instagram.style.display = 'none';
        button.innerHTML = 'Click here to show my instagram';
        shown = false;
    }
}