let red, pine, bubblegum, melon;
let img;
let ditherType = 'atkinson';
let dist = .47;

function preload() {
    img = loadImage('main.png');
}

function setup() {
    pixelDensity(1);
    createCanvas(img.width, img.height);

    red = new Riso('red');
    pine = new Riso('pine');
    bubblegum = new Riso('bubblegum');
    melon = new Riso('melon');

    noLoop();
}

function draw() {
    background(255);

    clearRiso();

    let dithered = ditherImage(img, ditherType, 0);

    red.imageMode(CENTER);
    pine.imageMode(CENTER);
    bubblegum.imageMode(CENTER);
    melon.imageMode(CENTER);

    red.image(dithered, width / 4, height / 4, width * dist, height * dist);

    melon.image(dithered, width * .75, height / 4, width * dist, height * dist);

    pine.image(dithered, width * 0.75, height * 0.75, width * dist, height * dist);

    bubblegum.image(dithered, width / 4, height * 0.75, width * dist, height * dist);

    drawRiso();
}

function mouseClicked() {
    // exportRiso();
}

function keyReleased() {
    if (key == 1) ditherType = 'atkinson';
    else if (key == 2) ditherType = 'floydsteinberg';
    else if (key == 3) ditherType = 'bayer';
    else if (key == 4) ditherType = 'none';
}