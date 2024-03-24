// User device check and to apply the Slick.
$(document).ready(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    } else {
        alert("모바일 환경에 최적화 되어 있습니다.");
    };
});

// Shared Features Basic Data
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
                title: '도감보기',
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
    }, 1000);
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

let array = [];
array[0] = {
    "title": "세종대왕", "subtitle": "\"정의로움의 인간화\"", "imageUrl": "./lib/character-img/modify/SJ.png", "octagon": "./lib/question-img/question_1_2.png", "content": "&nbsp세종대왕은 1418년 즉위한 조선의 4대 국왕이자 대한민국을 대표하는 최고의 성군입니다.", "content2": "# 훈민정음 반포 # 농사직설 편찬 # 대마도 정벌 # 자격루 # 집현전 # 4군 6진 설치", "btnUrl": "https://angelo-s-library.netlify.app/hustory/result_enfj.html"
},
    array[1] = {
        "title": "매월당 김시습", "subtitle": "\"세상을 바꿀 재능\"", "imageUrl": "./lib/character-img/modify/KSS.png", "octagon": "./lib/question-img/question_2_3.png", "content": "&nbsp김시습은 우리에게 벼슬을 버리고 절개를 지킨 “생육신” 중 한 명으로 잘 알려져 있습니다.", "content2": "# 생육신 # 매월당집 # 금오신화 # 만복사저포기 # 수양대군의 왕위 찬탈 규탄 # 취유부벽정기", "btnUrl": "https://angelo-s-library.netlify.app/hustory/result_enfp.html"
    }, array[2] = {
        "title": "태종 이방원", "subtitle": "\"냉철한 야심가\"", "imageUrl": "./lib/character-img/modify/TJ_1.png", "octagon": "./lib/question-img/question_1_4.png", "content": "&nbsp이방원은 1400년에 즉위를 했던 조선의 제 3대 국왕이며 조선왕조의 기틀을 잡은 인물입니다.", "content2": "# 하여가 # 왕자의 난 # 신문고 # 의정부 설치 # 노비변정도감 설치 # 호패 도입", "btnUrl": "https://angelo-s-library.netlify.app/hustory/result_entj.html"
    }, array[3] = {
        "title": "영조", "subtitle": "\"호기로운 개혁가\"", "imageUrl": "./lib/character-img/modify/YJ.png", "octagon": "./lib/question-img/question_3_3.png", "content": "&nbsp영조는 조선의 21대 국왕이자 민생을 살피고 부국강병을 위해 힘쓴 인물입니다.", "content2": "# 탕평책 # 균역법 # 신문고 부활 # 청개천 준설 # 노비종모법 # 3대 폐단(붕당, 사치, 음주) 지정", "btnUrl": "https://angelo-s-library.netlify.app/hustory/result_entp.html"
    }, array[4] = {
        "title": "어사 박문수", "subtitle": "\"암행어사 출두요!!\"", "imageUrl": "./lib/character-img/modify/PMS.png", "octagon": "./lib/question-img/question_1_1.png", "content": "&nbsp박문수는 영조의 탕평책을 지지하고 암행을 통해 민심을 살피며 동시에 구휼에 힘쓴 인물입니다.", "content2": "# 암행어사 # 균역법 재정의 일등공신 # 정미환국 # 안동서원 철폐 # 기민 구휼 # 탕평책 주장", "btnUrl": "https://angelo-s-library.netlify.app/hustory/result_esfj.html"
    }, array[5] = {
        "title": "고불 맹사성", "subtitle": "\"조선 음악의 아버지\"", "imageUrl": "./lib/character-img/modify/MSS.png", "octagon": "./lib/question-img/question_2_2.png", "content": "&nbsp맹사성은 황희 정승과 함께 조선시대를 대표하는 재상이자 청백리의 표상입니다.", "content2": "# 청백리 # 팔도지리지 # 예약정비 # 조선 음악의 아버지 # 소를 탄 정승 # 온양온천", "btnUrl": "https://angelo-s-library.netlify.app/hustory/result_esfp.html"
    }, array[6] = {
        "title": "우암 송시열", "subtitle": "\"사림의 정신적 지주\"", "imageUrl": "./lib/character-img/modify/SSY.png", "octagon": "./lib/question-img/question_4_3.png", "content": "&nbsp송시열은 인조부터 숙종까지 파란만장한 4대조를 섬긴 원로 대신으로 사림의 정신적 지주입니다.", "content2": "# 장원급제 # 사림의 수장 # 갑술환국으로 누명을 벗다 # 사림정치 # 예치이념 # 예송논쟁", "btnUrl": "https://angelo-s-library.netlify.app/hustory/result_estj.html"
    }, array[7] = {
        "title": "소현세자", "subtitle": "\"새로운 물결을 바라보다.\"", "imageUrl": "./lib/character-img/modify/SH.png", "octagon": "./lib/question-img/question_4_1.png", "content": "&nbsp소현세자는 33세를 일기로 사망한 호기심과 열정이 가득했던 불운한 왕세자입니다.", "content2": "# 조선인 포로 해방 # 뛰어난 외교관 # 서양문물 # 천주교 # 심양관 운영 # 의문의 죽음", "btnUrl": "https://angelo-s-library.netlify.app/hustory/result_estp.html"
    }, array[8] = {
        "title": "사명대사", "subtitle": "\"정의를 위해 일어선 승려\"", "imageUrl": "./lib/character-img/modify/SM.png", "octagon": "./lib/question-img/question_3_2.png", "content": "&nbsp사명대사는 조선 중기의 승려이자 승장(장군)으로 존경의 뜻을 담아 사명대사로 불립니다. ", "content2": "# 평양성 탈환 # 노원평 전투 # 우관동 전투 # 남한산성 축조 # 조선인 포로 구조 # 뛰어난 외교관", "btnUrl": "https://angelo-s-library.netlify.app/hustory/result_infj.html"
    }, array[9] = {
        "title": "명월 황진이", "subtitle": "\"조선의 3대 여류 시인\"", "imageUrl": "./lib/character-img/modify/HJE.png", "octagon": "./lib/question-img/question_1_3.png", "content": "&nbsp황진이는 조선 전기의 시인이자 예술가로 허난설헌과 더불어 조선의 최고 여류시인으로 꼽힙니다.", "content2": "# 조선 3대 여류시인 # 서경덕의 제자 # 최고의 기녀 # 청산리 벽계수야 # 동짓달 기나긴 밤 # 청산은 내 뜻이오", "btnUrl": "https://angelo-s-library.netlify.app/hustory/result_infp.html"
    }, array[10] = {
        "title": "태조 이성계", "subtitle": "\"새로운 시대를 열다.\"", "imageUrl": "./lib/character-img/modify/TJ_0.png", "octagon": "./lib/question-img/question_2_4.png", "content": "&nbsp이성계는 조선의 초대 임금이자 명운이 다한 고려를 닫고 새롭게 조선을 개국한 인물입니다.", "content2": "# 위화도 회군 # 조선건국 # 한양 천도 # 경국전 편찬 # 경복궁 # 황산대첩", "btnUrl": "https://angelo-s-library.netlify.app/hustory/result_intj.html"
    }, array[11] = {
        "title": "김삿갓", "subtitle": "\"풍자와 해학의 방랑시인\"", "imageUrl": "./lib/character-img/modify/KSG.png", "octagon": "./lib/question-img/question_3_4.png", "content": "&nbsp김삿갓은 김병연의 별명으로, 조선 후기의 풍자 시인이자 방랑시인입니다.", "content2": "# 방랑시인 # 김립시집 # 민중시인 # 죽장과 삿갓 # 언어유희의 귀재 # 역적의 후손", "btnUrl": "https://angelo-s-library.netlify.app/hustory/result_intp.html"
    }, array[12] = {
        "title": "포은 정몽주", "subtitle": "\"소중한 이들은 절대 지켜!\"", "imageUrl": "./lib/character-img/modify/JMJ.png", "octagon": "./lib/question-img/question_3_1.png", "content": "&nbsp정몽주는 고려 후기의 문신으로 기울어가는 고려 정세를 일으키기 위해 노력한 인물입니다.", "content2": "# 단심가 # 의창 조성 # 지방 향교 건립 # 고려인 포로 해방 # 뛰어난 외교관 # 대명국교 회복", "btnUrl": "https://angelo-s-library.netlify.app/hustory/result_isfj.html"
    }, array[13] = {
        "title": "혜원 신윤복", "subtitle": "\"원색과 해학의 낭만화가\"", "imageUrl": "./lib/character-img/modify/SYB.png", "octagon": "./lib/question-img/question_2_1.png", "content": "&nbsp신윤복은 조선 후기의 관료이자 화가로서, 조선의 3대 풍속화가 입니다.", "content2": "# 조선 3대 풍속화가 # 혜원풍속화첩 # 미인도 # 해학의 화가 # 원색의 화가 # 단오풍정", "btnUrl": "https://angelo-s-library.netlify.app/hustory/result_isfp.html"
    }, array[14] = {
        "title": "율곡 이이", "subtitle": "\"청렴결백의 인간화\"", "imageUrl": "./lib/character-img/modify/EE.png", "octagon": "./lib/question-img/question_4_2.png", "content": "&nbsp율곡 이이는 조선의 문신이자 성리학자이며 우리에게도 유명한 십만양병설을 주장했습니다.", "content2": "# 십만 양병 설 # 은병정사 # 대공수미법 # 성학집요 집필 # 경연일기 집필 # 격몽요결 집필", "btnUrl": "https://angelo-s-library.netlify.app/hustory/result_istj.html"
    }, array[15] = {
        "title": "최무선", "subtitle": "\"조선 화약의 아버지\"", "imageUrl": "./lib/character-img/modify/CMS.png", "octagon": "./lib/question-img/question_4_4.png", "content": "&nbsp최무선은 한국 역사상 최초로 화약 개발에 성공하였으며 이를 개선하기 위해 노력한 인물입니다.", "content2": "# 조선 화약의 아버지 # 화통도감 건의 # 총포(화포, 신포, 화통)개발 # 발사물(화전, 철령전, 피령전) 개발 # 폭탄(질려포)개발 # 로켓 화기(주화) 개발", "btnUrl": "https://angelo-s-library.netlify.app/hustory/result_istp.html"
    }

function wrapWindowByMask() {
    let maskHeight = $(document).height();
    let maskWidth = $(window).width();
    $('#mask').css({
        'width': maskWidth,
        'height': maskHeight
    });
    $('#mask').fadeTo('slow', 0.5);
};

function popupOpen() {
    $('.layerpop').css("position", "absolute");
    $('.layerpop').css("top", (($(window).height() - $('.layerpop').outerHeight()) / 2) + $(window).scrollTop());
    $('.layerpop').css("left", (($(window).width() - $('.layerpop').outerWidth()) / 2) + $(window).scrollLeft());
    $('#layerbox').show();
};

function goDetail(number) {
    $('.imageUrl').attr('src', array[number]["imageUrl"]);
    $('.title').html(array[number]["title"]);
    $('.subtitle').html(array[number]["subtitle"]);
    $('.content').html(array[number]["content"]);
    $('.content2').html(array[number]["content2"]);
    $('.btnUrl').attr('href', array[number]["btnUrl"]);
    $('.octagon').attr('src', array[number]["octagon"]);
    setTimeout(() => {
        popupOpen();
        wrapWindowByMask();
    }, 300);
};

function popupClose() {
    $('#layerbox').hide();
    $('#mask').hide();
    flipBack();
};

function flipFront() {
    $('.thecard').css('transform', 'rotateY(180deg)')
};

function flipBack() {
    $('.thecard').css('transform', '')
};

// function of the tothetop button
window.onscroll = function () { ScrollBtShow_Hide() };
function ScrollBtShow_Hide() {
    if (document.body.scroll < 100 || document.documentElement.scroll < 100) {
        $('#ToTheTop').css('display', 'none');
    } else {
        $('#ToTheTop').css('display', 'block');
    };
};

$('#ToTheTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});

function Backpage() {
    function get_query() {
        let url = document.location.href;
        let qs = url.substring(url.indexOf('?') + 1).split('&');
        for (i = 0, result = {}; i < qs.length; i++) {
            qs[i] = qs[i].split('='); result[qs[i][0]] = decodeURIComponent(qs[i][1]);
        } return result;
    };
    let resultData = get_query();
    let str = './result_' + resultData['data'] + '.html';
    location.replace(str);
};