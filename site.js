var rod
var gear
const titleText = "Welcome to the Clinical Engineering Trade Cooperative"
var lastMousePos = (0,0)
var selectable = [8]
var selection = 2
var selected = false
var logoPos

const coopPrinciples = [
    ["Voluntary and Open Membership","Cooperatives are voluntary organisations, open to all persons able to use their services and willing to accept the responsibilities of membership, without gender, social, racial, political or religious discrimination."
    ],[
        "Democratic Member Control","Cooperatives are democratic organisations controlled by their members, who actively participate in setting their policies and making decisions. Men and women serving as elected representatives are accountable to the membership. In primary cooperatives members have equal voting rights (one member, one vote) and cooperatives at other levels are also organised in a democratic manner."
    ],[
        "Member Economic Participation","Members contribute equitably to, and democratically control, the capital of their cooperative. At least part of that capital is usually the common property of the cooperative. Members usually receive limited compensation, if any, on capital subscribed as a condition of membership. Members allocate surpluses for any or all of the following purposes: developing their cooperative, possibly by setting up reserves, part of which at least would be indivisible; benefiting members in proportion to their transactions with the cooperative; and supporting other activities approved by the membership."
    ],[
        "Autonomy and Independence","Cooperatives are autonomous, self-help organisations controlled by their members. If they enter into agreements with other organisations, including governments, or raise capital from external sources, they do so on terms that ensure democratic control by their members and maintain their cooperative autonomy."
    ],[
        "Education, Training, and Information","Cooperatives provide education and training for their members, elected representatives, managers, and employees so they can contribute effectively to the development of their co-operatives. They inform the general public - particularly young people and opinion leaders - about the nature and benefits of co-operation."
    ],[
        "Cooperation among Cooperatives","Cooperatives serve their members most effectively and strengthen the cooperative movement by working together through local, national, regional and international structures."
    ],[
        "Concern for Community","Cooperatives work for the sustainable development of their communities through policies approved by their members."
    ]
]
const options = [coopPrinciples[5][0],coopPrinciples[6][0],"About C.E.T.C.",coopPrinciples[0][0],coopPrinciples[1][0],coopPrinciples[2][0],coopPrinciples[3][0],coopPrinciples[4][0], " "]


//frame rate setting
// fR = 16 // frame rate

// var cli = []

function preload() {
    fist = loadImage('fistenter.png')
    rod = loadImage('rodb.png')
    gear = loadImage('gearw.png')
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
    // frameRate(fR) // set frame rate
}

function draw() {
    logoPos = createVector(windowWidth*.5, windowHeight*.35)
    clear();
    background(0);
    if (!selected){
    title()
    // footer()
    }
    menu(.45, logoPos.x, logoPos.y)
}

function title(){
    push()
    fill(256)
    textSize(gear.width*.05)
    textAlign(LEFT)
    text(titleText,windowWidth*.05,gear.width*.1)
    pop()
}

function footer(){
    push()
    fill(0)
    textSize(gear.width*.1)
    textAlign(CENTER)
    text("For Service or Support",windowWidth*.5,windowHeight - ((gear.width*.1)*2))
    text("+1(XXX)XXX-XXXX",windowWidth*.5,windowHeight - gear.width*.1)
    pop()
}

function menu(s,x,y) {
    logoWidth = windowWidth*s

    if (windowWidth>windowHeight){
        logoWidth = windowHeight*s
    }

    gear.width = logoWidth
    gear.height = logoWidth
    rod.width = gear.width
    rod.height = logoWidth
    fist.width = gear.width
    fist.height = logoWidth
    logoX = x-logoWidth*.5
    logoY = y-logoWidth*.5

    push()
    tint(256,128)
    image(gear, logoX,logoY)
    pop()

    if(selection < 8) {
        push()
        tint(256,256)
        image(rod, logoX,logoY)
        pop()
    } else {
        image(fist, logoX,logoY)
    }

    push()
    fill(256)
    textSize(gear.width*.05)
    circleText(titleText,x,y,gear.width*.365)
    pop()
    if(!selected){
    ui(gear.width*.5,x,y)
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
        textSize(gear.width*.04)
        fill(256)
        text(options[selection],x,y)
        offAll()
        if(!selectable.includes(selection)){
            on(selection)
        }

        angleMode(DEGREES)

        if(lastMousePos!==(mouseX,mouseY)){
            center = createVector(x,y)
            mouse = createVector(mouseX-center.x,mouseY-center.y)
            mouse.rotate(360/16)
            if (mouse.mag()>s*.75){
            selection = Math.floor(map(mouse.heading(),-180,180,0,8,))
            } else {
                selection = 8
            }
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

            if(selection<8){
        stroke(0)
        strokeWeight(gear.width*.055)
        translate(x,y)
        rotate(360/8*selection)
        if(options[selection].length>0)
        point(gear.width*-.455,0)
            } 
        
        pop()
        
        lastMousePos=(mouseX,mouseY)
    }
}

function mouseClicked() {
    if(selectable.includes(selection)){
        if (!selected){
            on(selection)
            selected = true
        } else {
            selected = false
            offAll()
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}