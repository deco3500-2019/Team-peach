function startRender(){
    initPrototype();
    myCanvas.start();

}

function initPrototype(){
    // Community Page
    myHomeBack = new component(374, 644, "./assets/homeback.png", -10, -0, "background");
    activites = new component(406, 166, "./assets/activities.png", 0, 120, "image");
    post1 = new component(328, 160, "./assets/post1.png", 16, 320, "image");
    post2 = new component(328, 160, "./assets/post2.png", 16, 480, "image");
    uq = new component(41, 18, "./assets/uq.png", 308, 40, "image")
    communityNav = new component(192, 52, "./assets/communityon.png", -6, 596, "image");
    councellorNav = new component(192, 52, "./assets/councelloroff.png", 174, 596, "image");
    addbutton = new component(56, 56, "./assets/add.png", 155, 581, "image");
    menubutton = new component(32, 24, "./assets/menu.png", 15, 42, "image");
    transparentCover = new component(360, 640, "rgba(0,0,0,0.5)", 0, 0, "transparent");
    navDrawer = new component(305, 640, "./assets/navdrawer.png", -301, 0, "image");
    navback = new component(8, 13, "./assets/navback.png", 15, 17, "image");

    // Councellor Page
    myCounBack = new component(374, 642, "./assets/councellorback.png", -10, 0, "background");
    myMessage = new component(316, 551, "./assets/message.png", 29, 100, "image");
    addbluebutton = new component(56, 56, "./assets/addblue.png", 155, 581, "image");
    councellorNavon = new component(192, 52, "./assets/councelloron.png", 174, 596, "image");
    communityNavoff = new component(192, 52, "./assets/communityoff.png", -6, 596, "image");
    inbox = new component(51, 18, "./assets/inbox.png", 292, 36, "image")
    transparentCoverW = new component(360, 640, "rgba(255,255,255,0)", 0, 0, "transparent");
    notice = new component(355, 300, "./assets/notice.png", 3, 128, "image");
    gotit = new component(183, 50, "./assets/gotit.png", 89, 346, "image");

    // Message Page
    messageBack = new component(360, 640, "rgba(255,255,255,1)",0,0,"None");
    bluetop = new component(367, 91, "./assets/bluetop.png", -7, 0, "image");
    statusbar = new component(349, 24, "./assets/statusbar.png", 6, 2, "image");
    councellorA = new component(92, 17, "./assets/councellor.png", 252, 38, "image");
    messageText = new component("20px", "Helvetica", "white", 141, 50, "text");
    typetext = new component(247, 70, "./assets/typetext.png", 40, 120, "image");

    typetext1 = new component("15px", "Helvetica", "grey", 40, 125, "text");
    typetext2 = new component("12px", "Helvetica", "grey", 40, 160, "text");
    shadowbox = new component(355, 292, "./assets/shadowbox.png", 3, 85, "image");
    commentbar = new component(292, 52, "./assets/commentbar.png", -4, 595, "image");
    submit = new component(92, 57, "./assets/submit.png", 276, 595, "image");
    keyboard = new component(360, 234, "./assets/keyboard.png", 0, 640, "image");
    anonymous = new component(112, 20, "./assets/anonymous.png", 140, 640, "image");

    // Detail Page
    detailBack = new component(360, 640, "rgba(255,255,255,1)",0,0,"None");
    yellowtop = new component(367, 91, "./assets/yellowtop.png", -7, 0, "image");
    detailText = new component("20px", "Helvetica", "white", 141, 50, "text");
    dots = new component(5, 19, "./assets/dots.png", 326, 38, "image");
    detailpost = new component(355, 326, "./assets/detailpost.png", 1, 9, "image");
    detailcomment = new component(354, 318, "./assets/detailcomment.png", 5, 317, "image");
    mycomment = new component(50, 50, "./assets/mycomment.png", 295, 570, "image");
    star = new component(35, 17, "./assets/27star.png", 243, 283, "image");
    heart = new component(32, 16, "./assets/27heart.png", 291, 283, "image");
    typebar = new component(360, 40, "./assets/typebar.png", 0, 640, "image");
    typebartext = new component("15px", "Helvetica", "grey", 25, 350, "text");



}

var controller = {
    // controller of the game

    startControl : function(){
        window.addEventListener('mousedown', function (e) {
            myCanvas.x = e.pageX;                // deduct the top and left margin of the canvas
            myCanvas.y = e.pageY;
            console.log(myCanvas.x, myCanvas.y);
        })
        window.addEventListener('mouseup', function (e) {
            myCanvas.x = false;
            myCanvas.y = false;
        })
        window.addEventListener('touchstart', function (e) {
            myCanvas.x_touch = e.pageX;
            myCanvas.y_touch = e.pageY;
        })
        window.addEventListener('touchend', function (e) {
            myCanvas.x_touch = false;
            myCanvas.y_touch = false;
        })
        window.addEventListener('keydown', function (a) {
            myCanvas.key = a.keyCode;
        })
        window.addEventListener('keyup', function (a) {
            myCanvas.key = false;
        })
        window.addEventListener('mousemove', function (e) {
            myCanvas._x = e.pageX;
            myCanvas._y = e.pageY;
        })
    }
}

var myCanvas = {
    canvas : document.getElementById("canvas"),

    start : function(){
        this.context = this.canvas.getContext("2d");
        controller.startControl();
        this.onPage = "community";
        this.keyboardup = false;
        this.notice = false;
        this.star = false;
        this.heart = false;
        this.displaytext = false;
        this.interval = setInterval(rendeR, 20);
        this.drawerOpen = false;
        this.framNo = 0;
        myCanvas.gaptime = 0;
    },

    stop : function(){
        clearInterval(this.interval);
    },

    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    changecursor : function(){
        // change the cursor to "pointer"

        this.canvas.style.cursor = "pointer";
    },

    defaultcursor : function(){
        this.canvas.style.cursor = "auto";
    },

    textcursor : function(){
        this.canvas.style.cursor = "text";
    },

}


function component(width, height, color, x, y, type) {
    // define the component class which will be drew on the canvas
    this.type = type;
    this.color = color;
    if (type == "image"||type == "background") {
            this.image = new Image();
            this.image.src = this.color;
    }
    this.width = width;
    this.height = height; 
    this.x = x;
    this.speedX = 0;
    this.speedY = 0;
    this.y = y;
    this.newPos = function(){
        this.x += this.speedX;
        this.y += this.speedY
    }
    
    this.update = function() {
        // function to draw the component on the canvas

        ctx = myCanvas.context;
        switch(type){
        case "roundRect" :
            radius = 25;
            width = this.width;
            height = this.height;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y + radius);
            ctx.lineTo(this.x, this.y + height - radius);
            ctx.quadraticCurveTo(this.x, this.y + height, this.x + radius, this.y + height);
            ctx.lineTo(this.x + width - radius, this.y + height);
            ctx.quadraticCurveTo(this.x + width, this.y + height, this.x + width, this.y + height - radius);
            ctx.lineTo(this.x + width, this.y + radius);
            ctx.quadraticCurveTo(this.x + width, this.y, this.x + width - radius, this.y);
            ctx.lineTo(this.x + radius, this.y);
            ctx.quadraticCurveTo(this.x, this.y, this.x, this.y + radius);
            ctx.fill();
            break;

        case "text" :
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = this.color;
            ctx.fillText(this.text, this.x, this.y);
            break;
        
        case "image" :
        case "background" :
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
                if (type == "background"){
                    ctx.drawImage(this.image, 
                        this.x + this.width, 
                        this.y, 
                        this.width, 
                        this.height);
                }
            break;

        default :
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            break;

        }
    }

    this.clicked = function() {
        // function to detect whether the component is clicked by the user

        var myleft = this.x;
        var myright = this.x + this.width;
        var mytop = this.y;
        var mybottom = this.y + this.height;
        var clicked = true;
        if ((mybottom < myCanvas.y) || (mytop > myCanvas.y) || (myright < myCanvas.x) || (myleft > myCanvas.x)) {
            clicked = false;
        }
        if (clicked == true){
            console.log("An element is clicked")
        }

        return clicked;
    }

    this.hovered = function() {
        // detect whether the cursor is hovering on the component

        var myleft = this.x;
        var myright = this.x + this.width;
        var mytop = this.y;
        var mybottom = this.y + this.height;
        var clicked = true;
        if ((mybottom < myCanvas._y) || (mytop > myCanvas._y) || (myright < myCanvas._x) || (myleft > myCanvas._x)) {
            clicked = false;
        }
        if (clicked == true){
            console.log("An element is hovering",this)
        }

        return clicked;
    }

    this.moveTo =function(x,y){
        if(x - this.x > 50 || x - this.x <- 50){
            this.speedX = (x-this.x)/15;
        } else {
            this.x = x;
            this.speedX = 0;
        }

        if(y-this.y > 50 || y - this.y <-50){
            this.speedY = (y-this.y)/15;
        } else {
            this.y = y;
            this.speedY = 0;
        }

        this.newPos();
    }
}

function rendeR(){
    myCanvas.clear();
    switch(myCanvas.onPage){
        case "community":
            renderCommunity();
            break;
        case "councellor":
            renderCouncellor();
            break;
        case "message":
            renderMessage();
            break;
        case "details" :
            renderDetails();
            break;

    }
}

function renderCommunity(){
    myCanvas.defaultcursor();
    if(myCanvas.gaptime>0){
        myCanvas.gaptime -= 1;
    }

    myCanvas.framNo += 1;
    myHomeBack.update();
    activites.update();
    post1.update();
    post2.update();
    uq.update();
    communityNav.update();
    councellorNav.update();
    addbutton.update();
    menubutton.update();
    navDrawer.update();

    if(myCanvas.x && myCanvas.y){
        if(myCanvas.drawerOpen == false && menubutton.clicked() && myCanvas.gaptime == 0){
            myCanvas.drawerOpen = true;
            myCanvas.gaptime = 30;
        }
    }

    if(myCanvas.x && myCanvas.y){
        if(myCanvas.drawerOpen == true && navback.clicked() && myCanvas.gaptime == 0){
            myCanvas.drawerOpen = false;
            myCanvas.keyboardup = false;
            myCanvas.gaptime = 30;
        }
    }

    if(myCanvas.x && myCanvas.y){
        if(myCanvas.onPage == "community" && councellorNav.clicked() && myCanvas.gaptime == 0 && addbluebutton.clicked() == false){
            myCanvas.onPage = "councellor";
            myCanvas.gaptime = 30;
        }
    }

    if(myCanvas.x && myCanvas.y){
        if(post1.clicked() && myCanvas.gaptime == 0){
            myCanvas.onPage = "details";
            myCanvas.gaptime = 30;
        }
    }

    if(myCanvas._x && myCanvas._y){
        if(menubutton.hovered() || navback.hovered() || councellorNav.hovered() || post1.hovered()){
            myCanvas.changecursor();
        } else{
            myCanvas.defaultcursor();
        }
    }



    drawerRender();
}

function drawerRender(){
    if(myCanvas.drawerOpen == true){
        navDrawer.moveTo(-1,0);
        transparentCover.update();
        navDrawer.update();
    } else {
        navDrawer.moveTo(-301,0);
    }
}


function renderCouncellor(){
    myCanvas.defaultcursor();
    if(myCanvas.gaptime>0){
        myCanvas.gaptime -= 1;
    }

    myCounBack.update();
    myMessage.update();
    inbox.update();
    councellorNavon.update();
    communityNavoff.update();
    addbluebutton.update();

    if(myCanvas.x && myCanvas.y){
        if(communityNavoff.clicked() && myCanvas.gaptime == 0 && addbluebutton.clicked() == false){
            myCanvas.onPage = "community";
            myCanvas.gaptime = 30;
        }
    }

    if(myCanvas.x && myCanvas.y){
        if(addbluebutton.clicked() && myCanvas.gaptime == 0){
            myCanvas.onPage = "message";
            myCanvas.gaptime = 30;
        }
    }

    if(myCanvas.notice == true){
        renderNotice();
    }

    if(myCanvas._x && myCanvas._y){
        if(communityNavoff.hovered() || addbluebutton.hovered() || gotit.hovered()){
            myCanvas.changecursor();
        } else{
            myCanvas.defaultcursor();
        }
    }

    
}

function renderNotice(){
    transparentCoverW.color = "rgba(255,255,255,0.5)";
    transparentCoverW.update();
    notice.update();
    gotit.update();
    if(myCanvas.x && myCanvas.y){
        if(gotit.clicked() && myCanvas.gaptime == 0){
            transparentCoverW.color = "rgba(255,255,255,0)";
            myCanvas.notice = false;
            myCanvas.gaptime = 30;
        }
    }
    
}

function renderMessage(){
    myCanvas.defaultcursor();

    if(myCanvas.gaptime>0){
        myCanvas.gaptime -= 1;
    }

    messageBack.update();
    bluetop.update();
    statusbar.update();
    navback.y = 40;
    navback.update();
    councellorA.update();
    messageText.text = "Message";
    messageText.update();
    shadowbox.update();
    
    commentbar.update();
    submit.update();
    keyboard.update();
    anonymous.update();

    if(myCanvas.x && myCanvas.y){
        if(typetext.clicked() && myCanvas.gaptime == 0){
            myCanvas.keyboardup = true;
            myCanvas.displaytext = true;
            myCanvas.gaptime = 30;
        }
    }

    if(myCanvas.displaytext){
        var displaytextvalue = document.getElementById("input0").value;
        var displaytextvalue1 = document.getElementById("input").value;
        typetext1.text = displaytextvalue;
        typetext2.text = displaytextvalue1;
        typetext1.update();
        typetext2.update();

    } else {
        typetext.update();
    }


    if(myCanvas.keyboardup == true){
        keyboardup();
    } else {
        keyboarddown();
    }

    if(myCanvas.x && myCanvas.y){
        if(navback.clicked() && myCanvas.gaptime == 0){
            myCanvas.onPage = "councellor";
            myCanvas.keyboardup = false;
            myCanvas.gaptime = 30;
        }
    }

    if(myCanvas.x && myCanvas.y){
        if(submit.clicked() && myCanvas.gaptime == 0){
            myCanvas.notice = true;
            myCanvas.keyboardup = false;
            myCanvas.onPage = "councellor";
            myCanvas.gaptime = 30;
        }
    }

    if(myCanvas._x && myCanvas._y){
        if( navback.hovered() || submit.hovered()){
            myCanvas.changecursor();
        }else if(typetext.hovered()){
            myCanvas.textcursor();
        }
        else{
            myCanvas.defaultcursor();
        }
    }

}

function keyboardup(){
    commentbar.moveTo(-4,360);
    submit.moveTo(276,360);
    keyboard.moveTo(0,406);
    anonymous.moveTo(140,380);
}

function keyboarddown(){
    commentbar.moveTo(-4,595);
    submit.moveTo(276,595);
    keyboard.moveTo(0,640);
    anonymous.moveTo(140,640);
}


function renderDetails(){
    myCanvas.defaultcursor();

    if(myCanvas.gaptime>0){
        myCanvas.gaptime -= 1;
    }
    detailBack.update();
    detailpost.update();
    yellowtop.update();
    detailText.text = "Details";
    detailText.update();
    navback.update();
    dots.update();
    detailcomment.update();
    mycomment.update();
    transparentCoverW.update();
    
    commentbar.update();
    submit.update();
    keyboard.update();
    anonymous.update();
    typebar.update();
    console.log(myCanvas.heart, myCanvas.star);

    if(myCanvas.star == true){
        star.image.src = "./assets/28star.png";
    } else {
        star.image.src = "./assets/27star.png";
    }
    if(myCanvas.heart == true){
        heart.image.src = "./assets/28heart.png";
    } else {
        heart.image.src = "./assets/27heart.png";
    }
    star.update();
    heart.update();

    if(myCanvas.x && myCanvas.y){
        if(mycomment.clicked() && myCanvas.gaptime == 0){
            transparentCoverW.color = "rgba(255,255,255,0.5)";
            myCanvas.keyboardup = true;
            myCanvas.gaptime = 30;
        }
    }

    if(myCanvas.keyboardup == true){
        typebar.moveTo(0,327);
        keyboardup();
        var typebarcontent = document.getElementById("input").value;
        typebartext.text = typebarcontent;
        typebartext.update();
        
    } else {
        keyboarddown();
        commentbar.moveTo(-4,640);
        submit.moveTo(276,640);
        typebar.moveTo(0,640);
    }


    if(myCanvas.x && myCanvas.y){
        if(submit.clicked() && myCanvas.gaptime == 0){
            transparentCoverW.color = "rgba(255,255,255,0)";
            myCanvas.keyboardup = false;
            detailcomment.image.src = "./assets/detailcomment1.png";
            detailcomment.update();
            myCanvas.gaptime = 30;
        }
    }

    if(myCanvas.x && myCanvas.y){
        if(typebar.clicked() && myCanvas.gaptime == 0){
            typebar.image.src = "./assets/typebar1.png";

            myCanvas.gaptime = 30;
        }
    }

    if(myCanvas.x && myCanvas.y){
        if(star.clicked() && myCanvas.gaptime == 0){
            myCanvas.gaptime = 30;
            if(myCanvas.star == true){
                myCanvas.star = false;
            } else {
                myCanvas.star = true;
            }
        }
    }

    if(myCanvas.x && myCanvas.y){
        if(heart.clicked() && myCanvas.gaptime == 0){
            myCanvas.gaptime = 10;
            if(myCanvas.heart == true){
                myCanvas.heart = false;
            } else {
                myCanvas.heart = true;

            }
        }
    }

    if(myCanvas.x && myCanvas.y){
        if(navback.clicked() && myCanvas.gaptime == 0){
            myCanvas.onPage = "community";
            myCanvas.gaptime = 30;
        }
    }

    if(myCanvas._x && myCanvas._y){
        if(navback.hovered() || heart.hovered() || star.hovered()  || submit.hovered() || mycomment.hovered()){
            myCanvas.changecursor();
        }else if(typebar.hovered()){
            myCanvas.textcursor();
        }
        else{
            myCanvas.defaultcursor();
        }
    }

}