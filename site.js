var rod
var gear
const titleText = "Clinical Engineering Trade Cooperative "
var lastMousePos = (0,0)
var selection = 2
var selected = false
var logoPos
const options = ['','',"About","Contact",'Who','What','Why','']


//frame rate setting
fR = 16 // frame rate

// var cli = []

function preload() {
    rod = loadImage('rod.png');
    gear = loadImage('gear.png')
}

function setup() {
   
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
    logoPos = createVector(windowWidth*.5, windowHeight*.5)
    clear();
    background(255);
    if (!selected){
    title()
    }
    menu(.5, logoPos.x, logoPos.y)
}

function title(){
    push()
    fill(0)
    textSize(gear.width*.1)
    textAlign(CENTER)
    text(titleText,windowWidth*.5,gear.width*.1)
    pop()
}

function menu(s,x,y) {
    logoWidth = windowWidth*s

    if (windowWidth>windowHeight){
        logoWidth = windowHeight*s
    }

    gear.width = logoWidth
    rod.width = gear.width
    logoX = x-logoWidth*.5
    logoY = y-logoWidth*.5

    push()
    tint(256,128)
    image(gear, logoX,logoY)
    pop()
    image(rod, logoX,logoY)


    push()
    fill(255)
    textSize(gear.width*.05)
    circleText(titleText,x,y,gear.width*.365)
    pop()
    if(!selected){
    ui(gear.width*.055,x,y)
    }

    function circleText(t,x,y,s){
        t = Array.from(t)
        push()
        angleMode(RADIANS)
        translate(x,y)
        for (let i = 0; i < t.length; i++) {
            push()
            rotate((TWO_PI / t.length) * i)
            text(t[i], 0, -s)
            pop()
        }
        pop()
    }


    function ui(s,x,y){
        push()

        textAlign(CENTER)
        textSize(gear.width*.1)
        fill(0)
        text(options[selection],x,y)

        angleMode(DEGREES)

        if(lastMousePos!==(mouseX,mouseY)){
            center = createVector(x,y)
            mouse = createVector(mouseX-center.x,mouseY-center.y)
            mouse.rotate(360/16)
            selection = Math.floor(map(mouse.heading(),-180,180,0,8,))
        }
        
        for(option in options){
            if (options[option].length>0){
                push()
                    stroke(255)
                    strokeWeight(gear.width*.055)
                    translate(x,y)
                    rotate(360/8*option)
                    point(gear.width*-.455,0)
                pop()
            }
        }
        // if(selection){
        stroke(0)
        strokeWeight(gear.width*.055)
        translate(x,y)
        rotate(360/8*selection)
        if(options[selection].length>0)
        point(gear.width*-.455,0)
        // }
        
        pop()
        lastMousePos=(mouseX,mouseY)
    }
}



// function ui(s,x,y){
//     push()

//     angleMode(DEGREES)

//     if(lastMousePos!==(mouseX,mouseY)){
//         center = createVector(windowWidth*.5,windowHeight*.5)
//         mouse = createVector(mouseX-center.x,mouseY-center.y)
//         mouse.rotate(360/16)
//         selection = Math.floor(map(mouse.heading(),-180,180,0,8,))
//     }
    
//     // if(selection){
//     stroke(255)
//     strokeWeight(gear.width*.055)
//     translate(windowWidth*.5,windowHeight*.5)
//     rotate(360/8*selection)
//     point(gear.width*-.455,0)
//     // }
    
//     pop()
//     lastMousePos=(mouseX,mouseY)
// }

function mouseClicked() {
    if(options[selection].length>0){
        if (!selected){
            on(selection)
            selected = true
        } else {
            offAll()
            selected = false
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}