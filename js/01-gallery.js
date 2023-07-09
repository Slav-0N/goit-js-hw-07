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
    <img src="${origPic}" width="800" height="600">
`);
    instance.show()

    document.addEventListener('keydown', keyCloseLitebox); 

    // document.addEventListener('keydown', keyCloseLitebox, {once: true});

    // Чи вірно я розумію? 
    //    1) слухач додається цим розгалуженням (if)  
    //    2) тоді якщо слухачу додати опцію  {once: true} то після першого виконання  слухач буде видалений ?
    //    3) Дякую за відповідь!  

    function keyCloseLitebox(event) {
      // console.log(event);
      if (event.code === 'Escape') {
        instance.close(() => {
          document.removeEventListener('keydown', keyCloseLitebox); 
          console.log('Cлухача було видалено');
        } );
      };
    };

  };
};























