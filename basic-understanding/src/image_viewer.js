import './image_viewer.css';

const image = document.createElement("img");
const image_url = "https://picsum.photos/200/300";
image.src = image_url;

document.body.appendChild(image);
