var rod
var gear
const title = "Clinical Engineering Trade Cooperative "

const zerohour = Date.UTC(2012, 11, 14, 10, 11, 48) //parigee 12 hours after the eclyps
const date = new Date();
const offset = date.getTimezoneOffset() * 60000;
var dateTemple = Date.now() - zerohour + offset

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;


//frame rate setting
fR = 16 // frame rate

// var cli = []

function preload() {
    rod = loadImage('rod.png');
    gear = loadImage('gear.png')
}

function setup() {
    //set image sizes
   
    //CANVAS SETTINGS
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(0, 0);

    //STROKE SETTINGS
    strokeCap(SQUARE)

    //FONT SETTINGS
    textFont('Times New Roman')
    textSize(rod.width * .023);
    textStyle(NORMAL);
    textStyle(BOLD);

    //TIMING SETTINGS
    frameRate(fR) // set frame rate
}

function draw() {
    clear();
    background(255);
    logo(.5)
    fill(255)
    textSize(gear.width*.05)
    circleText(title,windowWidth*.3,windowHeight*.3,gear.width*.365)
}

function logo(s) {
    logoWidth = windowWidth*s
    if (windowWidth>windowHeight){
        logoWidth = windowHeight*s
    }
    gear.width = logoWidth
    rod.width = gear.width
    logoX = windowWidth*.5-logoWidth*.5
    logoY = windowHeight*.5-logoWidth*.5

    image(gear, logoX,logoY)
    image(rod, logoX,logoY)
}

function circleText(t,x,y,s){
    t = Array.from(t)
    push()
    translate(windowWidth*.5,windowHeight*.5)
    for (let i = 0; i < t.length; i++) {
        push()
        rotate((TWO_PI / t.length) * i)
        text(t[i], 0, -s)
        pop()
    }
    pop()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}