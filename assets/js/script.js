let canv = document.getElementById('canvas');
let ctx = canv.getContext('2d');

canv.width = window.innerWidth;
canv.height = window.innerHeight;

const img = new Image();
const reader = new FileReader();

function uploadImage(e) {
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
        img.src = reader.result;
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        }
    }
}

const imageLoader = document.getElementById('file');
imageLoader.addEventListener('change', uploadImage);

function clearChanges() {
    img.src = reader.result
};

document.querySelectorAll("button").addEventListener("click", clearChanges);

function download() {
    const image = canv.toDataURL();
    const link = document.createElement('a');
    link.href = image;
    link.download = "image.png";
    link.click();
}

document.querySelectorAll("button").addEventListener("click", download);
