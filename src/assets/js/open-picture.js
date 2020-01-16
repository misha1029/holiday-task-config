
const activePictures = document.getElementsByClassName("work");

for (const picture of activePictures) {
  picture.onclick = ( event ) => {
    event.stopImmediatePropagation();
    const sourceImg = event.currentTarget.querySelector("img");
    const pictureBackground = document.createElement("div");
    pictureBackground.classList.add("pictureBackground");
    pictureBackground.onclick = closeOpenPicture;
    const openPhoto = document.createElement("div");
    openPhoto.classList.add("open");

    const img = new Image();
    img.src = sourceImg.src;
    openPhoto.appendChild(img);

    const close = document.createElement('div');
    close.classList.add('close');
    close.onclick = closeOpenPicture;
    openPhoto.appendChild(close);

    pictureBackground.appendChild(openPhoto);
    document.body.appendChild(pictureBackground);
    console.log(sourceImg);
  }
}




function closeOpenPicture() {
  const pictureBackground = document.getElementsByClassName('pictureBackground')[0];
  pictureBackground.remove();
}
