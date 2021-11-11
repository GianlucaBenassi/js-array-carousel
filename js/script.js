const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
    'img/01.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise',
    'Svezia'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
]

// ***** dinamic big images insertion
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


// ***** dinamic small image insertion
const imageListContainer = document.querySelector(".image-list");
let littleImageItems = "";

for (let i = 0; i < items.length; i++) {
    littleImageItems +=
        `
        <div class="little-item">
            <img src="${items[i]}" alt="little image ${title[i]}">
            <div class="shadow"></div>
        </div>
        `;
}

imageListContainer.innerHTML = littleImageItems;


// ***** on load first image active
const bigImageClass = document.getElementsByClassName("big-item");
const littleImageClass = document.getElementsByClassName("little-item");

bigImageClass[0].classList.add("active");
littleImageClass[0].classList.add("active");


// ***** on click active image
let activeImage = 0;

// next image
const btnNext = document.getElementById("next");

btnNext.addEventListener("click", function(){

    bigImageClass[activeImage].classList.remove("active");
    littleImageClass[activeImage].classList.remove("active");
    
    if (activeImage == items.length - 1) {
        activeImage = 0;
    } else {
        activeImage++;
    }

    bigImageClass[activeImage].classList.add("active");
    littleImageClass[activeImage].classList.add("active");

    littleImageClass[activeImage].scrollIntoView(false);

});

// previous image
const btnPrev = document.getElementById("prev");

btnPrev.addEventListener("click", function(){

    bigImageClass[activeImage].classList.remove("active");
    littleImageClass[activeImage].classList.remove("active");

    if (activeImage == 0) {
        activeImage = items.length - 1
    } else {
        activeImage--;
    }

    bigImageClass[activeImage].classList.add("active");
    littleImageClass[activeImage].classList.add("active");

    littleImageClass[activeImage].scrollIntoView(false);

});