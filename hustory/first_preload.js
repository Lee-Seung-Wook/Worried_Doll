function preloading(imageArray) {
    let n = imageArray.length;
    for (let i = 0; i < n; i++) {
        let img = new Image();
        img.src = imageArray[i];
    };
};

preloading([
    "./lib/stuff/background_img.png",
    "./lib/question-img/question_1_1.png",
    "./lib/question-img/question_1_2.png",
    "./lib/stuff/button/1.png",
    "./lib/stuff/button/2.png",
    "./lib/stuff/button/3.png",
    "./lib/stuff/button/4.png",
    "./lib/stuff/button/5.png",
    "./lib/stuff/button/1-1.png",
    "./lib/stuff/button/2-1.png",
    "./lib/stuff/button/3-1.png",
    "./lib/stuff/button/4-1.png",
    "./lib/stuff/button/5-1.png",
    "./lib/character-img/modify/CMS.png",
    "./lib/character-img/modify/EE.png",
    "./lib/character-img/modify/HJE.png",
    "./lib/character-img/modify/JMJ.png",
    "./lib/character-img/modify/KSG.png",
    "./lib/character-img/modify/KSS.png",
    "./lib/character-img/modify/MSS.png",
    "./lib/character-img/modify/PMS.png",
    "./lib/character-img/modify/SH.png",
    "./lib/character-img/modify/SJ.png",
    "./lib/character-img/modify/SM.png",
    "./lib/character-img/modify/SSY.png",
    "./lib/character-img/modify/SYB.png",
    "./lib/character-img/modify/TJ_0.png",
    "./lib/character-img/modify/TJ_1.png",
    "./lib/character-img/modify/YJ.png",
    "./lib/stuff/main_banner.png",
    "./lib/stuff/blank_banner.png"
]);