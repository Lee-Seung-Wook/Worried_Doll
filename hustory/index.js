// User device check.
$(document).ready(function () {
    fetch('https://ziggle.kr/log/log?platform=hustory&note=page1', {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(() => { })
        .catch((error) => {
        });
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('footer').fadeIn(1000);
        $('html, body').css('background-image', 'url()');
    } else {
        $('footer').fadeIn(1000);
        $('html, body').css('background-image', 'url()');
        alert("모바일 환경에 최적화 되어 있습니다.");
    };
});

// Move to second page.
$('.main_button').on('click', function () {
    window.scrollTo(0, 0);
    setTimeout(() => {
        $('.slick').slick({
            swipe: false,
            draggable: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            prevArrow: false,
            nextArrow: false,
            easing: 'easeInOut'
        });
    }, 500);
    setTimeout(() => {
        $('.main_page').fadeOut(100);
        $('.first_page').fadeIn(200);
        $('html, body').css('background-image', 'url(./lib/stuff/background_img.png)');
        $('html, body').css('background-color', 'rgb(220, 215, 200)');
        typing_set();
    }, 500);
});

// Move to next page.
let slideindex = 0;
function GoToNext() {
    window.scrollTo(0, 0);
    setTimeout(() => {
        slideindex++
        $('.btn_next').fadeOut(300);
        $('.slick').slick('slickGoTo', slideindex);
        typing_set();
    }, 500);
    if (slideindex == 15) {
        let AD = $('#KakaoAD');
        let KakaoAD1 = '<ins class="kakao_ad_area" style="display:none;" data-ad-unit = "DAN-49FS30iHGOn0dnLe" data-ad-width = "300" data-ad-height = "250"></ins>';
        let KakaoAD2 = document.createElement('script');
        KakaoAD2.type = "text/javascript";
        KakaoAD2.src = "//t1.daumcdn.net/kas/static/ba.min.js";
        KakaoAD2.async;
        AD.append(KakaoAD2);
        $('#KakaoAD').html(KakaoAD1 + AD);
    };
};

// how to change of value and the button css throught the seleted button 
function seleted(self, count) {
    window.scrollTo(0, document.body.scrollHeight);
    let seleted = self.value
    $(self).css('color', 'rgb(130, 10, 40)');
    $(self).siblings().css('color', 'rgb(20, 21, 25)');
    $('#input' + seleted).val(count);
    $('.btn_next').fadeIn(500);
};

// how to change of value and the button css throught the seleted button 
function seleted2(self, count) {
    window.scrollTo(0, document.body.scrollHeight);
    $('.btn_next').fadeIn(500);
    let parents = $(self).parent();
    let neme = $(self).attr('name');
    if (neme === $(parents.children('button:nth-child(1)')).attr('name')) {
        $(parents.children('button:nth-child(1)')).removeClass();
        $(parents.children('button:nth-child(1)')).addClass('button1-1');
        $(parents.children('button:nth-child(2)')).removeClass();
        $(parents.children('button:nth-child(2)')).addClass('button2');
        $(parents.children('button:nth-child(3)')).removeClass();
        $(parents.children('button:nth-child(3)')).addClass('button3');
        $(parents.children('button:nth-child(4)')).removeClass();
        $(parents.children('button:nth-child(4)')).addClass('button4');
        $(parents.children('button:nth-child(5)')).removeClass();
        $(parents.children('button:nth-child(5)')).addClass('button5');
        $('#answer' + self.value).attr('value', '당치도 않소');
    } else if (neme === $(parents.children('button:nth-child(2)')).attr('name')) {
        $(parents.children('button:nth-child(1)')).removeClass();
        $(parents.children('button:nth-child(1)')).addClass('button1');
        $(parents.children('button:nth-child(2)')).removeClass();
        $(parents.children('button:nth-child(2)')).addClass('button2-1');
        $(parents.children('button:nth-child(3)')).removeClass();
        $(parents.children('button:nth-child(3)')).addClass('button3');
        $(parents.children('button:nth-child(4)')).removeClass();
        $(parents.children('button:nth-child(4)')).addClass('button4');
        $(parents.children('button:nth-child(5)')).removeClass();
        $(parents.children('button:nth-child(5)')).addClass('button5');
        $('#answer' + self.value).attr('value', '동의하지 않소');
    } else if (neme === $(parents.children('button:nth-child(3)')).attr('name')) {
        $(parents.children('button:nth-child(1)')).removeClass();
        $(parents.children('button:nth-child(1)')).addClass('button1');
        $(parents.children('button:nth-child(2)')).removeClass();
        $(parents.children('button:nth-child(2)')).addClass('button2');
        $(parents.children('button:nth-child(3)')).removeClass();
        $(parents.children('button:nth-child(3)')).addClass('button3-1');
        $(parents.children('button:nth-child(4)')).removeClass();
        $(parents.children('button:nth-child(4)')).addClass('button4');
        $(parents.children('button:nth-child(5)')).removeClass();
        $(parents.children('button:nth-child(5)')).addClass('button5');
        $('#answer' + self.value).attr('value', '애매한 문제로다');
    } else if (neme === $(parents.children('button:nth-child(4)')).attr('name')) {
        $(parents.children('button:nth-child(1)')).removeClass();
        $(parents.children('button:nth-child(1)')).addClass('button1');
        $(parents.children('button:nth-child(2)')).removeClass();
        $(parents.children('button:nth-child(2)')).addClass('button2');
        $(parents.children('button:nth-child(3)')).removeClass();
        $(parents.children('button:nth-child(3)')).addClass('button3');
        $(parents.children('button:nth-child(4)')).removeClass();
        $(parents.children('button:nth-child(4)')).addClass('button4-1');
        $(parents.children('button:nth-child(5)')).removeClass();
        $(parents.children('button:nth-child(5)')).addClass('button5');
        $('#answer' + self.value).attr('value', '동의하오');
    } else if (neme === $(parents.children('button:nth-child(5)')).attr('name')) {
        $(parents.children('button:nth-child(1)')).removeClass();
        $(parents.children('button:nth-child(1)')).addClass('button1');
        $(parents.children('button:nth-child(2)')).removeClass();
        $(parents.children('button:nth-child(2)')).addClass('button2');
        $(parents.children('button:nth-child(3)')).removeClass();
        $(parents.children('button:nth-child(3)')).addClass('button3');
        $(parents.children('button:nth-child(4)')).removeClass();
        $(parents.children('button:nth-child(4)')).addClass('button4');
        $(parents.children('button:nth-child(5)')).removeClass();
        $(parents.children('button:nth-child(5)')).addClass('button5-1');
        $('#answer' + self.value).attr('value', '당연하오');
    };
    if (count == 0) {
        // random = Math.random() < 0.5 ? -1 : 1;
        // $('#input' + self.value).val(count + random);
        $('#input' + self.value).val(count);
    } else {
        $('#input' + self.value).val(count);
    };
};

// Go to the result page
function GoToResult() {
    $('#btn_result').addClass('icon-spin6-alt animate-spin');
    $('#btn_result').addClass('btn_result_change');
    setTimeout(() => {
        let ei = ($('#input0').val() * 1) + ($('#input1').val() * 1) + ($('#input2').val() * 1) + ($('#input3').val() * 1)
        let sn = ($('#input4').val() * 1) + ($('#input5').val() * 1) + ($('#input6').val() * 1) + ($('#input7').val() * 1)
        let tf = ($('#input8').val() * 1) + ($('#input9').val() * 1) + ($('#input10').val() * 1) + ($('#input11').val() * 1)
        let pj = ($('#input12').val() * 1) + ($('#input13').val() * 1) + ($('#input14').val() * 1) + ($('#input15').val() * 1)
        // console.log(ei);
        // console.log(sn);
        // console.log(tf);
        // console.log(pj);
        let array = [ei, sn, tf, pj]
        for (i = 0; i < array.length; i++) {
            if (array[i] == 0) {
                random = Math.random() < 0.5 ? -1 : 1;
                array[i] = random;
            };
        };
        setTimeout(() => {
            if (array[0] < 0 && array[1] < 0 && array[2] < 0 && array[3] < 0) {
                // alert('-, -, -, - / 혜원 신윤복(ISFP)');
                window.location.replace("./result_isfp.html");
            } else if (array[0] < 0 && array[1] < 0 && array[2] < 0 && array[3] > 0) {
                // alert('-, -, -, + / 포은 정몽주(ISFJ)');
                window.location.replace("./result_isfj.html");
            } else if (array[0] < 0 && array[1] < 0 && array[2] > 0 && array[3] > 0) {
                // alert('-, -, +, + / 율곡 이이(ISTJ)');
                window.location.replace("./result_istj.html");
            } else if (array[0] < 0 && array[1] > 0 && array[2] > 0 && array[3] > 0) {
                // alert('-, +, +, + / 태조 이성계(INTJ)');
                window.location.replace("./result_intj.html");
            } else if (array[0] < 0 && array[1] > 0 && array[2] > 0 && array[3] < 0) {
                // alert('-, +, +, - / 김삿갓(INTP)');
                window.location.replace("./result_intp.html");
            } else if (array[0] < 0 && array[1] > 0 && array[2] < 0 && array[3] < 0) {
                // alert('-, +, -, - / 명월 황진이(INFP)');
                window.location.replace("./result_infp.html");
            } else if (array[0] < 0 && array[1] < 0 && array[2] > 0 && array[3] < 0) {
                // alert('-, -, +, - / 최무선(ISTP)');
                window.location.replace("./result_istp.html");
            } else if (array[0] < 0 && array[1] > 0 && array[2] < 0 && array[3] > 0) {
                // alert('-, +, -, + / 사명대사(INFJ)');
                window.location.replace("./result_infj.html");
            } else if (array[0] > 0 && array[1] > 0 && array[2] > 0 && array[3] > 0) {
                // alert('+, +, +, + / 태종 이방원(ENTJ)');
                window.location.replace("./result_entj.html");
            } else if (array[0] > 0 && array[1] > 0 && array[2] > 0 && array[3] < 0) {
                // alert('+, +, +, - / 영조(ENTP)');
                window.location.replace("./result_entp.html");
            } else if (array[0] > 0 && array[1] > 0 && array[2] < 0 && array[3] < 0) {
                // alert('+, +, -, - / 매월당 김시습(ENFP)');
                window.location.replace("./result_enfp.html");
            } else if (array[0] > 0 && array[1] < 0 && array[2] < 0 && array[3] < 0) {
                // alert('+, -, -, - / 고불 맹사성(ESFP)');
                window.location.replace("./result_esfp.html");
            } else if (array[0] > 0 && array[1] > 0 && array[2] < 0 && array[3] > 0) {
                // alert('+, +, -, + / 세종대왕(ENFJ)');
                window.location.replace("./result_enfj.html");
            } else if (array[0] > 0 && array[1] < 0 && array[2] < 0 && array[3] > 0) {
                // alert('+, -, -, + / 어사 박문수(ESFJ)');
                window.location.replace("./result_esfj.html");
            } else if (array[0] > 0 && array[1] < 0 && array[2] > 0 && array[3] > 0) {
                // alert('+, -, +, + / 우암 송시열(ESTJ)');
                window.location.replace("./result_estj.html");
            } else if (array[0] > 0 && array[1] < 0 && array[2] > 0 && array[3] < 0) {
                // alert('+, -, +, - / 소현세자(ESTP)');
                window.location.replace("./result_estp.html");
            };
        }, 1000);
    }, 1000);
};

// Typing function
let array = ["하나 / 열여섯"]
let typingBool = false;
let typingIdx = 0;
let liIndex = 0;
let objectInt = 0;
let objectArray = {
    0: "둘 / 열여섯",
    1: "셋 / 열여섯",
    2: "넷 / 열여섯",
    3: "다섯 / 열여섯",
    4: "여섯 / 열여섯",
    5: "일곱 / 열여섯",
    6: "여덟 / 열여섯",
    7: "아홉 / 열여섯",
    8: "열 / 열여섯",
    9: "열하나 / 열여섯",
    10: "열둘 / 열여섯",
    11: "열셋 / 열여섯",
    12: "열넷 / 열여섯",
    13: "열다섯 / 열여섯",
    14: "열여섯 / 열여섯"
};

function typing_set() {
    setTimeout(() => {
        let arrayData = array[Object.keys(array)[liIndex]];
        let arraySplitData = arrayData.split('');
        let liLength = array.length;
        if (typingBool == false) {
            typingBool = true;
            var tyInt = setInterval(typing, 80);
        } function typing() {
            if (typingIdx < arraySplitData.length) {
                $('#p' + objectInt).eq(liIndex).append(arraySplitData[typingIdx]);
                typingIdx++;
            } else {
                if (liIndex < liLength - 1) {
                    liIndex++;
                    typingIdx = 0;
                    typingBool = false;
                    arrayData = array[Object.keys(array)[liIndex]];
                    arraySplitData = arrayData.split('');
                    clearInterval(tyInt);
                    setTimeout(function () {
                        tyInt = setInterval(typing, 80);
                    }, 250);
                } else if (liIndex == liLength - 1) {
                    clearInterval(tyInt);
                    array.splice(0, 1);
                    array.splice(0, 1, objectArray[objectInt]);
                    typingBool = false;
                    typingIdx = 0;
                    liIndex = 0;
                    objectInt++
                };
            };
        };
    }, 250);
};
