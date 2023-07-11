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

      
    const instance = basicLightbox.create(`
      <img src="${origPic}" width="800" height="600">`,  
    {
      onShow: (instance) => {
        window.addEventListener('keydown', keyCloseLitebox);
      },
      onClose: (instance) => {
        window.removeEventListener('keydown', keyCloseLitebox);
        console.log("Слухача було видалено!") 
      },
    });
    instance.show()

    function keyCloseLitebox(event) {
      console.log(event);
      if (event.code === 'Escape') {
        instance.close(() => {
        });
      };
    };

 



  };
};























