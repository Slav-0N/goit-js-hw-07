import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryElem = document.querySelector(".gallery");

const imageListArr = galleryItems.map(item => {
  return `<li><img class="previewPicture" src="${item.preview}" data-src="${item.original}" alt="${item.description}" width="340px"></li>`
});

const template = imageListArr.join('');
galleryElem.insertAdjacentHTML("afterbegin", template);

galleryElem.addEventListener('click', delegation);

function delegation(event) {
  if (event.target.tagName === 'IMG') {
    const origPic = event.target.dataset.src;
    console.log(origPic);

    //  приклад Images з сайту https://basiclightbox.electerious.com/
    
    const instance = basicLightbox.create(`
    <img src="${origPic}" width="800" height="600">
`)
    instance.show()
  };
};



















