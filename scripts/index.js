let initialelements = [
    {
      name: "Yosemite Valley",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
      name: "Lake Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
      name: "Bald Mountains",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
      name: "Vanoise National Park",
      link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
  ]; 
  let newElement = [];
// popup

const nameInput = document.querySelector(".popup__inputs_type_name");
const aboutInput = document.querySelector(".popup__inputs_type_description");
const popOverlay = document.querySelector(".popup");
const popOverlayadd = document.querySelector(".popup-addElement");
const editPopupForm = document.querySelector(".popup__inputs-container");
const editPopupFormaddPlace = document.querySelector(".popup__inputs-container-addPlace");
const editModeName = document.querySelector(".profile__edit");
const profileName = document.querySelector(".profile__description-name");
const profileAbout = document.querySelector(".profile__description-prof");
const popupCloseBtn = document.querySelector(".popup__close-btn");
//end popup

const addPlaceBtn = document.querySelector(".profile__add");
let placeName = document.querySelector(".popup__inputs_type_placeName");
let placeLink = document.querySelector(".popup__inputs_type_placeLink");

//elements
const elements = document.querySelector(".elements");
const elementList = elements.querySelector(".elements__list");
//image preview
const imgPrevModal = document.querySelector(".popup_image-prev");
const clsoeImgPreviewBtn = document.querySelector(".popup__close-button-image-prev");
const clsoeaddPlacePopup = document.querySelector(".popup__close-btn-addPlace");

//popup functions

const editProfileFunction = () => {
    openPopup(popOverlay);
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
}

const handleProfileEditSubmit = event => {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    closePopUp(popOverlay);

};
const addPlaceFunction = () => {
  openPopup(popOverlayadd); 

 

}
const handleaddPlaceSubmit = event => {
  event.preventDefault();
  newElement = {name: `${placeName.value}`,
  link: `${placeLink.value}`};
  closePopUp(popOverlayadd);
  addAllelements(newElement, elementList);
};

const openPopup = (elem) => {
    elem.classList.add("popup_active");

}

const closePopUp = (elem) => {
    elem.classList.remove("popup_active");
}



//elements functions 
const addelement = (data) => {
    const elementStracture = document.querySelector(".element-Stracture").content;
    const elementElement = elementStracture.querySelector(".element").cloneNode(true);
    const elementTitleElement = elementElement.querySelector(".element__title");
    elementTitleElement.textContent = data.name;
    const likeBtn = elementElement.querySelector(".element__like-button");
    const elementImage = elementElement.querySelector(".element__image");
    elementImage.src = data.link;
    elementImage.alt = `picture of a ${data.name}`;
    const deleteBtn = elementElement.querySelector(".element__delete-button");
    //eventListeners
    elementImage.addEventListener("click", () => previewImage(data));
    deleteBtn.addEventListener("click", () => elementElement.remove());
    likeBtn.addEventListener("click", () =>
    addClass(likeBtn, "element__like-button_active")
    );
    return elementElement;
};
const addAllelements = (element, list) => {
    list.prepend(addelement(element));
};
const addClass = (component, add) => {
    component.classList.toggle(add);
};


const previewImage = (element) => {
    const popupImage = imgPrevModal.querySelector(".popup__image");
    const popupCaption = imgPrevModal.querySelector(".popup__caption");
    popupImage.src = element.link;
    popupImage.alt = `A beautiful place in ${element.name}`;
    popupCaption.textContent = element.name;
    openPopup(imgPrevModal);
};



//popup eventsListeners

editModeName.addEventListener("click", editProfileFunction);
addPlaceBtn.addEventListener("click", addPlaceFunction);
editPopupForm.addEventListener("submit", handleProfileEditSubmit);
editPopupFormaddPlace.addEventListener("submit", handleaddPlaceSubmit);
popupCloseBtn.addEventListener("click", () =>{
    closePopUp(popOverlay);
});
clsoeImgPreviewBtn.addEventListener("click", () =>{
    closePopUp(imgPrevModal);
});

clsoeaddPlacePopup.addEventListener("click", () =>{
  closePopUp(popOverlayadd);
});

//element
initialelements.forEach((element) => addAllelements(element, elementList));