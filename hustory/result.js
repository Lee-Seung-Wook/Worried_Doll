// User device check and to apply the Slick.
$(document).ready(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.slick').slick({
            swipe: false,
            draggable: false,
            infinite: false,
            initialSlide: 0,
            speed: 1000,
            prevArrow: false,
            nextArrow: false,
            easing: 'easeInOut'
        });
        $('.slick2').slick({
            autoplay: true,
            autoplaySpeed: 15000,
            dots: true,
            draggable: false,
            initialSlide: 0,
            speed: 1000,
            prevArrow: false,
            nextArrow: false,
            easing: 'easeInOut'
        });
    } else {
        $('.slick').slick({
            swipe: false,
            draggable: false,
            infinite: false,
            initialSlide: 0,
            speed: 1000,
            prevArrow: false,
            nextArrow: false,
            easing: 'easeInOut'
        });
        $('.slick2').slick({
            autoplay: true,
            autoplaySpeed: 15000,
            dots: true,
            draggable: false,
            initialSlide: 0,
            speed: 1000,
            prevArrow: false,
            nextArrow: false,
            easing: 'easeInOut'
        });
        alert("모바일 환경에 최적화 되어 있습니다.");
    };
});

// A function to move the page 
let page = 0;
function NextPrev() {
    if (page === 0) {
        window.scrollTo(0, 0);
        setTimeout(() => {
            $('.slick').slick('slickGoTo', 1);
        }, 500);
        page = 1;
    } else if (page === 1) {
        window.scrollTo(0, 0);
        setTimeout(() => {
            $('.slick').slick('slickGoTo', 0);
        }, 500);
        page = 0;
    };
};

// function to fade-in next button
function fade_in() {
    $('.next_btn').attr('class', 'next.btn_before');
    setTimeout(() => {
        $('.next_btn_before').attr('class', 'next.btn');
    }, 3000);
}

fade_in();

let url_basic = 'https://angelo-s-library.netlify.app/hustory/index.html';
let url_current = window.location.href;
let image_share = $('#img').attr('src');
let title_current = document.title;

// function of to share throught the kakaotalk message
function kakaoShare() {
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: '소소한 프로젝트',
            description: title_current,
            imageUrl: image_share,
            link: {
                mobileWebUrl: url_current,
                webUrl: url_current,
            },
        },
        buttons: [
            {
                title: '친구 결과 보기',
                link: {
                    mobileWebUrl: url_current,
                    webUrl: url_current,
                },
            },
            {
                title: '나도 참여하기',
                link: {
                    mobileWebUrl: url_basic,
                    webUrl: url_basic,
                },
            },
        ],
        installTalk: true,
    });
};

// function of to share throught the twitter
function shareTwitter() {
    let url = encodeURIComponent(url_current);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title_current}`, '소소한 프로젝트', 'width=400, height=400');
};

// function of to share throught the facebook
function shareFacebook() {
    window.open('https://www.facebook.com/sharer/sharer.php?u='
        + encodeURIComponent(url_current)
        + '&t=' + encodeURIComponent(title_current),
        'facebooksharedialog',
        'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=400, width=400');
};

function restart() {
    setTimeout(() => {
        window.location.replace("./index.html");
    }, 500);
};

function url_copy() {
    var Dummy_Tag = document.createElement("input");
    var Current_URL = location.href;
    document.body.appendChild(Dummy_Tag);
    Dummy_Tag.value = Current_URL;
    Dummy_Tag.select();
    document.execCommand("copy");
    document.body.removeChild(Dummy_Tag);
    alert("웹사이트 주소가 복사되었습니다.\nThe website address has been copied.");
};

function GoToThatPage(self) {
    let url = self.name;
    window.location.replace("https://angelo-s-library.netlify.app/hustory/result_" + url + ".html");
};
