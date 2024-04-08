const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declare an array listing the filenames of each image */
const filenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declare an object listing the alternative text for each image */
const alts = {
    'pic1.jpg': 'Awkward pic of me',
    'pic2.jpg': 'Buildings',
    'pic3.jpg': 'My dog Max',
    'pic4.jpg': 'Space Needle',
    'pic5.jpg': 'Penelope'
};

/* Loop through filenames array and insert <img> elements */
for (const i of filenames) {
    // Construct image source and alt text
    const nalt = alts[i];
    const narc = `images/${i}`;

    // Create new image element
    const newImage = document.createElement('img');
    newImage.setAttribute('src', narc);
    newImage.setAttribute('alt', nalt);
    thumbBar.appendChild(newImage);

    // Add click event listener to each image
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', narc);
        displayedImage.setAttribute('alt', nalt);
    });
}

/* Add click event listener to the <button> for darken effect */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class'); // Current class of btn

    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});
