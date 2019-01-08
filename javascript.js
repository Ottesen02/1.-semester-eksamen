window.addEventListener("load", start)


function start() {
    console.log("start")
    banner0();
    banner1();
    banner2();
    banner3();
    banner4();
    banner5();
    banner6();
    banner7();
    showHero();
    resSlide();
    redesignSlide();
    sexSlide();
    spilSlide();


}

function banner0() {
    var i = false;
    document.querySelector("#banner0").addEventListener("click", expand0)


    function expand0() {
        if (i === false) {
            document.querySelector(".cv").classList.add("expand_cv")
            i = true;
        } else {
            document.querySelector(".cv").classList.remove("expand_cv")
            i = false;
        }

    }
}

function banner1() {
    var a = false;
    document.querySelector("#banner1").addEventListener("click", expand1)


    function expand1() {
        if (a === false) {
            document.querySelector(".projekt1").classList.add("expand")
            a = true;
        } else {
            document.querySelector(".projekt1").classList.remove("expand")
            a = false;
        }

    }
}

function banner2() {
    var b = false;
    document.querySelector("#banner2").addEventListener("click", expand2)


    function expand2() {
        if (b === false) {
            document.querySelector(".projekt2").classList.add("expand")
            b = true;
        } else {
            document.querySelector(".projekt2").classList.remove("expand")
            b = false;
        }

    }
}


function banner3() {
    var c = false;
    document.querySelector("#banner3").addEventListener("click", expand3)


    function expand3() {
        if (c === false) {
            document.querySelector(".projekt3").classList.add("expand")
            c = true;
        } else {
            document.querySelector(".projekt3").classList.remove("expand")
            c = false;
        }

    }
}


function banner4() {
    var d = false;
    document.querySelector("#banner4").addEventListener("click", expand4)


    function expand4() {
        if (d === false) {
            document.querySelector(".projekt4").classList.add("expand")
            d = true;
        } else {
            document.querySelector(".projekt4").classList.remove("expand")
            d = false;
        }

    }
}


function banner5() {
    var e = false;
    document.querySelector("#banner5").addEventListener("click", expand5)


    function expand5() {
        if (e === false) {
            document.querySelector(".projekt5").classList.add("expand")
            e = true;
        } else {
            document.querySelector(".projekt5").classList.remove("expand")
            e = false;
        }

    }
}

function banner6() {
    var f = false;
    document.querySelector("#banner6").addEventListener("click", expand6)


    function expand6() {
        if (f === false) {
            document.querySelector(".projekt6").classList.add("expand")
            f = true;
        } else {
            document.querySelector(".projekt6").classList.remove("expand")
            f = false;
        }

    }
}


function banner7() {
    var g = false;
    document.querySelector("#banner7").addEventListener("click", expand7)


    function expand7() {
        if (g === false) {
            document.querySelector(".projekt7").classList.add("expand")
            g = true;
        } else {
            document.querySelector(".projekt7").classList.remove("expand")
            g = false;
        }

    }
}

function showHero() {
    console.log(showHero);

    document.querySelector("#hero").classList.remove("hide");
    document.querySelector("#hero_border").classList.remove("hide");


}

function hideHero() {
    console.log(hideHero);

    document.querySelector("#hero").classList.add("fadeout");

    document.querySelector("#hero_border").classList.add("fadeout_fast");

    document.querySelector("#hero").addEventListener("animationend", showPort);

}

function showPort() {
    console.log(showPort);

    document.querySelector("#hero").classList.add("hide");
    document.querySelector("#hero_border").classList.add("hide");


}
document.querySelector("#hero_knap").addEventListener("click", hideHero);

document.querySelector("#burger_menu").addEventListener("click", openMenu);
document.querySelector("#cross").addEventListener("click", closeMenu);
document.querySelector(".link0").addEventListener("click", closeMenu);
document.querySelector(".link1").addEventListener("click", closeMenu);
document.querySelector(".link2").addEventListener("click", closeMenu);
document.querySelector(".link3").addEventListener("click", closeMenu);
document.querySelector(".link4").addEventListener("click", closeMenu);
document.querySelector(".link5").addEventListener("click", closeMenu);
document.querySelector(".link6").addEventListener("click", closeMenu);
document.querySelector(".link7").addEventListener("click", closeMenu);




function openMenu() {
    console.log(openMenu);

    document.querySelector(".sidemenu").classList.add("expand_menu");
    document.querySelector("#burger_menu").classList.add("hide");

}

function closeMenu() {
    console.log(closeMenu);

    document.querySelector(".sidemenu").classList.remove("expand_menu");
    document.querySelector("#burger_menu").classList.remove("hide");


}

var resI = 0; //Start Point
var resImages = []; // Empty Arrey
var resTime = 3000; // tid mellem hvert slide i ms

//billed liste
resImages[0] = "billeder/responsive_1.jpg";
resImages[1] = "billeder/responsive_2.jpg";
resImages[2] = "billeder/responsive_3.jpg";
resImages[3] = "billeder/responsive_4.jpg";
resImages[4] = "billeder/responsive_5.jpg";
resImages[5] = "billeder/responsive_6.jpg";
resImages[6] = "billeder/resstyletile.jpg";


//funktion til at skifte billede
function resSlide() {
    document.res_slide.src = resImages[resI];
    // Check If Index Is Under Max
    if (resI < resImages.length - 1) {
        // Add 1 to Index
        resI++;
    } else {
        // Reset Back To O
        resI = 0;
    }
    // Run function every x seconds

    setTimeout("resSlide()", resTime);
}


var redesignI = 0; //Start Point
var redesignImages = []; // Empty Arrey
var redesignTime = 3000; // tid mellem hvert slide i ms

//billed liste
redesignImages[0] = "billeder/redesign_1.png";
redesignImages[1] = "billeder/redesign_2.png";
redesignImages[2] = "billeder/redesign_3.png";
redesignImages[3] = "billeder/redesign_4.png";
redesignImages[4] = "billeder/redesign_5.png";
redesignImages[5] = "billeder/redesign_6.png";

//funktion til at skifte billede
function redesignSlide() {
    document.redesign_slide.src = redesignImages[redesignI];
    // Check If Index Is Under Max
    if (redesignI < redesignImages.length - 1) {
        // Add 1 to Index
        redesignI++;
    } else {
        // Reset Back To O
        redesignI = 0;
    }
    // Run function every x seconds

    setTimeout("redesignSlide()", redesignTime);
}

var spilI = 0; //Start Point
var spilImages = []; // Empty Arrey
var spilTime = 3000; // tid mellem hvert slide i ms

//billed liste
spilImages[0] = "billeder/bar_1.png";
spilImages[1] = "billeder/bar_2.png";
spilImages[2] = "billeder/bar_3.png";
spilImages[3] = "billeder/bar_4.png";
spilImages[4] = "billeder/bar_5.png";
spilImages[5] = "billeder/bar_6.png";
spilImages[6] = "billeder/bar_7.png";
spilImages[7] = "billeder/bar_8.png";
spilImages[8] = "billeder/bar_9.png";

//funktion til at skifte billede
function spilSlide() {
    document.spil_slide.src = spilImages[spilI];
    // Check If Index Is Under Max
    if (spilI < spilImages.length - 1) {
        // Add 1 to Index
        spilI++;
    } else {
        // Reset Back To O
        spilI = 0;
    }
    // Run function every x seconds

    setTimeout("spilSlide()", spilTime);
}

var sexI = 0; //Start Point
var sexImages = []; // Empty Arrey
var sexTime = 3000; // tid mellem hvert slide i ms

//billed liste
sexImages[0] = "billeder/burndown.jpg";
sexImages[1] = "billeder/annonce4.jpeg";
sexImages[2] = "billeder/persona_1.png";
sexImages[3] = "billeder/ss1.png";
sexImages[4] = "billeder/ss2.png";
sexImages[5] = "billeder/ss3.png";
sexImages[6] = "billeder/ss4.png";
sexImages[7] = "billeder/ss5.png";
sexImages[8] = "billeder/stand1.jpg";
sexImages[9] = "billeder/stand2.jpg";
sexImages[10] = "billeder/statemachine.jpg";
sexImages[11] = "billeder/styletile_gr23 .jpg";
sexImages[12] = "billeder/test_1.png";



//funktion til at skifte billede
function sexSlide() {
    document.sex_slide.src = sexImages[sexI];
    // Check If Index Is Under Max
    if (sexI < sexImages.length - 1) {
        // Add 1 to Index
        sexI++;
    } else {
        // Reset Back To O
        sexI = 0;
    }
    // Run function every x seconds

    setTimeout("sexSlide()", sexTime);
}
