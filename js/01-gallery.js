import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryElem = document.querySelector(".gallery");

const imageListArr = galleryItems.map(item => {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`
});

const template = imageListArr.join('');
galleryElem.insertAdjacentHTML("afterbegin", template);

galleryElem.addEventListener('click', delegation);

function delegation(event) {
  event.preventDefault();
  
  if (event.target.tagName === 'IMG') {
    const origPic = event.target.dataset.source;
    console.log(origPic);

    //  приклад Images з сайту https://basiclightbox.electerious.com/
    
    const instance = basicLightbox.create(`
    <img src="${origPic}" width="800" height="600">
`);
    instance.show()

    document.addEventListener('keydown', keyCloseLitebox, {once: true});
     // чи вірно я зрозумів, що обробник додається цим розгалуженням "if" та після першого виконання, буде видалений? 

    function keyCloseLitebox(event) {
      console.log(event);
      if (event.code === 'Escape') {
        instance.close()
      };
    };

  };
};























