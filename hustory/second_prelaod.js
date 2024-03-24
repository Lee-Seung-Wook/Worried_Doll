function preloading(imageArray) {
    let n = imageArray.length;
    for (let i = 0; i < n; i++) {
        let img = new Image();
        img.src = imageArray[i];
    };
};

preloading([
    "./lib/stuff/background_img.png",
    "./lib/stuff/blank_banner.png",
    "./lib/stuff/icon/icon_close.png",
    "./lib/stuff/icon/i-con_restart.png",
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
    "./lib/character-img/octagon/ENFJ.png",
    "./lib/character-img/octagon/ENFP.png",
    "./lib/character-img/octagon/ENTJ.png",
    "./lib/character-img/octagon/ENTP.png",
    "./lib/character-img/octagon/ESFJ.png",
    "./lib/character-img/octagon/ESFP.png",
    "./lib/character-img/octagon/ESTJ.png",
    "./lib/character-img/octagon/ESTP.png",
    "./lib/character-img/octagon/INFJ.png",
    "./lib/character-img/octagon/INFP.png",
    "./lib/character-img/octagon/INTJ.png",
    "./lib/character-img/octagon/INTP.png",
    "./lib/character-img/octagon/ISFJ.png",
    "./lib/character-img/octagon/ISFP.png",
    "./lib/character-img/octagon/ISTJ.png",
    "./lib/character-img/octagon/ISTP.png"
]);