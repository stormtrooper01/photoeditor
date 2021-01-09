//Sepia

function sepia() {
    const imageData = ctx.getImageData(0, 0, canv.width, canv.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const grey = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07;
        data[i] = grey + 95; //red
        data[i + 1] = grey + 58; //green
        data[i + 2] = grey; //blue
    }
    ctx.putImageData(imageData, 0, 0);
};

document.querySelectorAll("button").addEventListener("click", sepia);

//Greyscale

function greyscale() {
    const imageData = ctx.getImageData(0, 0, canv.width, canv.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const grey = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07;
        data[i] = grey; //red
        data[i + 1] = grey; //green
        data[i + 2] = grey; //blue
    }
    ctx.putImageData(imageData, 0, 0);
};

document.querySelectorAll("button").addEventListener("click", greyscale);

//Invert

function invert() {
    const imageData = ctx.getImageData(0, 0, canv.width, canv.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i]; //red
        data[i + 1] = 255 - data[i + 1]; //green
        data[i + 2] = 255 - data[i + 2]; //blue
    }
    ctx.putImageData(imageData, 0, 0);
};

document.querySelectorAll("button").addEventListener("click", invert);

//RGB - RBG

function rbg() {
    const imageData = ctx.getImageData(0, 0, canv.width, canv.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const green = data[i + 1] //because we rewrite green to be blue
        data[i] = data[i];
        data[i + 1] = data[i + 2];
        data[i + 2] = green;
    }
    ctx.putImageData(imageData, 0, 0);
};

document.querySelectorAll("button").addEventListener("click", rbg);

//RGB - BGR

function bgr() {
    const imageData = ctx.getImageData(0, 0, canv.width, canv.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const red = data[i] //because we rewrite red to be blue
        data[i] = data[i + 2];
        data[i + 1] = data[i + 1];
        data[i + 2] = red;
    }
    ctx.putImageData(imageData, 0, 0);
};

document.querySelectorAll("button").addEventListener("click", bgr);

//RGB - GBR

function gbr() {
    const imageData = ctx.getImageData(0, 0, canv.width, canv.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const red = data[i] //because we rewrite red to be green
        data[i] = data[i + 1];
        data[i + 1] = data[i + 2];
        data[i + 2] = red;
    }
    ctx.putImageData(imageData, 0, 0);
};

document.querySelectorAll("button").addEventListener("click", gbr);

