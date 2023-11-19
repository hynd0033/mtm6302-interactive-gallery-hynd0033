// const test = 'test'
// console.log(test)

// Need 12 images in an array. Can be added similar to emojis (Done)
// Clicking an image enlarges it (Week 10 lesson) EventListener
// Event Delagation must be used
// Use an array of objects to store the image data. (Done)
// Use custom data attributes to store image data directly on the <img> tag.

// Images Array

const dogs = [
    'images/lilly1.jpg',
    'images/lilly2.jpg',
    'images/lilly3.jpg',
    'images/lilly4.jpg',
    'images/lilly5.jpg',
    'images/lilly6.jpg',
    'images/stella1.jpg',
    'images/stella2.jpg',
    'images/stella3.jpg',
    'images/stella4.jpg',
    'images/stella5.jpg',
    'images/stella6.jpg'
];

// Dynamically adds images to page

const addDog = document.getElementById('dogContainer')

for ( let i = 0; i<=11; i++) {
    const img = document.createElement('img');
    img.src = dogs[i];
    addDog.appendChild(img);
}

// How to add data-source="Image by Dimitri Houtteman from Pixabay" to image from javascript? or in html?


// Can't get console to show dataset
// const $info = document.querySelector('info')
// console.log($info.dataset.user)

// This method adds image element but can't grab the proper one to display

for (const dog of dogs) {
    const img = document.createElement('img');
    img.src = dogs[dog];
    addDog.appendChild(img);
}
