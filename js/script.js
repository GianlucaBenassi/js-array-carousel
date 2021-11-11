const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// dinamic big images insertion
const bigImageContainer = document.querySelector(".big-image");
let bigImageItems = "";

for (let i = 0; i < items.length; i++) {
    bigImageItems += 
        `
        <div class="big-item">
            <img src="${items[i]}" alt="big image ${title[i]}">
            <div class="img-desc">
                <h1>${title[i]}</h1>
                <p>${text[i]}</p>
            </div>
        </div>
        `;
}

bigImageContainer.innerHTML = bigImageItems;

// on load first image active
const bigImageClass = document.getElementsByClassName("big-item");

bigImageClass[0].classList.add("active");