window.addEventListener("load", sidenVises);

const forside_index = document.querySelector("#forside_index");
const forside_portfolio = document.querySelector("#forside_portfolio");
const forside_indhold = document.querySelector("#forside_indhold");
const forside_webdesign = document.querySelector("#forside_webdesign");
const forside_ux = document.querySelector("#forside_ux");
const forside_animation = document.querySelector("#forside_animation");
const forside_cv = document.querySelector("#forside_cv");

function sidenVises() {

    console.log("sidenVises");

    document.querySelector("#burger_knap").addEventListener("click", toggleBurger);

    if (forside_index) {
        forside_index.addEventListener("load", forsideIndex());
    }

    if (forside_portfolio) {
        forside_portfolio.addEventListener("load", forsidePortfolio());
    }

    if (forside_indhold) {
        forside_indhold.addEventListener("load", forsideIndhold());
    }

    if (forside_webdesign) {
        forside_webdesign.addEventListener("load", forsideWebdesign());
    }

    if (forside_ux) {
        forside_ux.addEventListener("load", forsideUx());
    }

    if (forside_animation) {
        forside_animation.addEventListener("load", forsideAnimation());
    }

    if (forside_cv) {
        forside_cv.addEventListener("load", forsideCv());
    }


};

function forsideIndex() {
    console.log("forside_index");


    document.querySelector("#forside_video").addEventListener("click", toggleFire);



    function toggleFire() {
        console.log("togglefire");
        document.querySelector("#forside_video1").classList.toggle("hide");

        document.querySelector("#forside_video1").addEventListener("click", toggleFire);

    };

};



function forsidePortfolio() {
    console.log("portfolio");
    document.querySelector("#spil_ani").addEventListener("mouseover", spilVideo1);

    document.querySelector("#spil_ani").addEventListener("mouseout", stopVideo1);

    document.querySelector("#spil_ux").addEventListener("mouseover", spilVideo2);

    document.querySelector("#spil_ux").addEventListener("mouseout", stopVideo2);

    document.querySelector("#spil_web").addEventListener("mouseover", spilVideo3);

    document.querySelector("#spil_web").addEventListener("mouseout", stopVideo3);

    document.querySelector("#spil_ind").addEventListener("mouseover", spilVideo4);

    document.querySelector("#spil_ind").addEventListener("mouseout", stopVideo4);

    function spilVideo1() {
        console.log("videospil");
        this.play();
        document.querySelector("#h1_box3").classList.add("hide");
    };

    function stopVideo1() {
        console.log("stopvideo");
        this.pause();
        document.querySelector("#h1_box3").classList.remove("hide");
    };

    function spilVideo2() {
        console.log("videospil");
        this.play();
        document.querySelector("#h1_box4").classList.add("hide");
    };

    function stopVideo2() {
        console.log("stopvideo");
        this.pause();
        document.querySelector("#h1_box4").classList.remove("hide");
    };

    function spilVideo3() {
        console.log("videospil");
        this.play();
        document.querySelector("#h1_box1").classList.add("hide");
    };

    function stopVideo3() {
        console.log("stopvideo");
        this.pause();
        document.querySelector("#h1_box1").classList.remove("hide");
    };

    function spilVideo4() {
        console.log("videospil");
        this.play();
        document.querySelector("#h1_box2").classList.add("hide");
    };

    function stopVideo4() {
        console.log("stopvideo");
        this.pause();
        document.querySelector("#h1_box2").classList.remove("hide");
    };


};

function forsideIndhold() {
    console.log("forside_indhold");
    document.querySelector("#tilbageknap").addEventListener("click", goBack);

    function goBack() {
        window.history.back();
    };

};

function forsideWebdesign() {
    console.log("forside_webdesign");
    document.querySelector("#tilbageknap").addEventListener("click", goBack);

    function goBack() {
        window.history.back();
    };

};

function forsideUx() {
    console.log("forside_ux");
    document.querySelector("#tilbageknap").addEventListener("click", goBack);

    function goBack() {
        window.history.back();
    };

};

function forsideAnimation() {
    console.log("forside_animaition");
    document.querySelector("#tilbageknap").addEventListener("click", goBack);

    function goBack() {
        window.history.back();
    };

};

function forsideCv() {
    console.log("forside_cv");

};






function toggleBurger() {
    document.querySelector("#menu").classList.toggle("hide");

};
