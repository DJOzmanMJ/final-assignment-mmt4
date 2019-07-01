//accordion unit
$("#accordion").accordion();

var player = videojs("player");
var player2 = videojs("player-2");
var player3 = videojs("player-3");
var player4 = videojs("player-4");
var player5 = videojs("player-5");
var playBtn = $(".play");
var rewindBtn = $(".rewind");
var checkmarkBtn = $(".checkmark");
var arrowContBlck = $(".arrow-section-blck");
var arrowContWht = $(".arrow-section-wht");
var arrowContBlue = $(".arrow-section-blue");
var modalBox = $(".modal-box");
var modalCross = $(".modal-close");
var modalExit1 = $("#modal-1-close");
var modalExit2 = $("#modal-2-close");
var modalExit3 = $("#modal-3-close");
var modalExit4 = $("#modal-4-close");
var modalExit5 = $("#modal-5-close");
var headerCheck = $(".btn-check-global");
var headCheck1 = $("#checkmark-1");
var headCheck2 = $("#checkmark-2");
var headCheck3 = $("#checkmark-3");
var headCheck4 = $("#checkmark-4");
var headCheck5 = $("#checkmark-5");
var buttonsVideo = $(".player-btn");

var activeUI = $(".ui-state-active");
var activeAccHeader = $(".ui-accordion-header-active");

player.on("ready", function () {
    rewindBtn.click(function (event) {
        event.preventDefault();
        var time = player.currentTime();
        player.currentTime(time - 10);
    })

    playBtn.click(function (event) {
        event.preventDefault();
        if (!player.paused()) {
            player.pause();
            playBtn.html('<img src = "img/icons/play.png" alt = "play" class = "player-btn">');
        } else {
            player.play();
            playBtn.html('<img src = "img/icons/pause.png" alt = "pause" id = "pause" class="player-btn">');
        }

        //change pause button to play when video ends
        player.on("ended", function () {
            playBtn.html('<img src = "img/icons/play.png" alt = "play" class = "player-btn">');
        })
    });
})

player2.on("ready", function () {
    rewindBtn.click(function (event) {
        event.preventDefault();
        var time = player2.currentTime();
        player2.currentTime(time - 10);
    })

    playBtn.click(function (event) {
        event.preventDefault();
        if (!player2.paused()) {
            player2.pause();
            playBtn.html('<img src = "img/icons/play.png" alt = "play" class = "player-btn">');
        } else {
            player2.play();
            playBtn.html('<img src = "img/icons/pause.png" alt = "pause" id = "pause" class="player-btn">');
        }

        //change pause button to play when video ends
        player2.on("ended", function () {
            playBtn.html('<img src = "img/icons/play.png" alt = "play" class = "player-btn">');
        })
    });
})

player3.on("ready", function () {
    rewindBtn.click(function (event) {
        event.preventDefault();
        var time = player3.currentTime();
        player3.currentTime(time - 10);
    })

    playBtn.click(function (event) {
        event.preventDefault();
        if (!player3.paused()) {
            player3.pause();
            playBtn.html('<img src = "img/icons/play.png" alt = "play" class = "player-btn">');
        } else {
            player3.play();
            playBtn.html('<img src = "img/icons/pause.png" alt = "pause" id = "pause" class="player-btn">');
        }

        //change pause button to play when video ends
        player3.on("ended", function () {
            playBtn.html('<img src = "img/icons/play.png" alt = "play" class = "player-btn">');
        })
    });
})

player4.on("ready", function () {
    rewindBtn.click(function (event) {
        event.preventDefault();
        var time = player4.currentTime();
        player4.currentTime(time - 10);
    })

    playBtn.click(function (event) {
        event.preventDefault();
        if (!player4.paused()) {
            player4.pause();
            playBtn.html('<img src = "img/icons/play.png" alt = "play" class = "player-btn">');
        } else {
            player4.play();
            playBtn.html('<img src = "img/icons/pause.png" alt = "pause" id = "pause" class="player-btn">');
        }

        //change pause button to play when video ends
        player4.on("ended", function () {
            playBtn.html('<img src = "img/icons/play.png" alt = "play" class = "player-btn">');
        })
    });
})

player5.on("ready", function () {
    rewindBtn.click(function (event) {
        event.preventDefault();
        var time = player2.currentTime();
        player5.currentTime(time - 10);
    })

    playBtn.click(function (event) {
        event.preventDefault();
        if (!player5.paused()) {
           player5.pause();
            playBtn.html('<img src = "img/icons/play.png" alt = "play" class = "player-btn">');
        } else {
           player5.play();
            playBtn.html('<img src = "img/icons/pause.png" alt = "pause" id = "pause" class="player-btn">');
        }

        //change pause button to play when video ends
        player5.on("ended", function () {
            playBtn.html('<img src = "img/icons/play.png" alt = "play" class = "player-btn">');
        })
    });
})

//click checkmark to open modal
checkmarkBtn.click(function () {
    event.preventDefault();
    modalBox.fadeIn(100);
})

//close modal pop-up
$("#modal-1-close, #modal-2-close, #modal-3-close, #modal-4-close, #modal-5-close").click(function () {
    event.preventDefault();
    modalBox.fadeOut(100);
})

//if modal closes, checkmark moves to header
modalExit1.click(function () {
    headCheck1.fadeIn("slow", function () {})
    checkmarkBtn.fadeOut(100);
})

modalExit2.click(function () {
    headCheck2.fadeIn("slow", function () {})
    checkmarkBtn.fadeOut(100);
})

modalExit3.click(function () {
    headCheck3.fadeIn("slow", function () {})
    checkmarkBtn.fadeOut(100);
})

modalExit4.click(function () {
    headCheck4.fadeIn("slow", function () {})
    checkmarkBtn.fadeOut(100);
})

modalExit5.click(function () {
    headCheck5.fadeIn("slow", function () {})
    checkmarkBtn.fadeOut(100);
})

//show buttons only on hover
$(".video-js, .player-btn, #player2-btn-layout, #player3-btn-layout, #player4-btn-layout, #player5-btn-layout").hover(function () {
    buttonsVideo.stop().fadeIn(100);
}, function () {
    buttonsVideo.stop().fadeOut(100);
})

//add colors/visibility to elements before toggling them
$("#container-playlist").addClass("body-white");
$(".headerTitle").addClass("text-blue");
$("#headerTitleSupport").addClass("text-blue");
$("#koptitel-02 h1").addClass("text-blue");
$("#logo2").addClass("logo-hide");
arrowContWht.addClass("logo-hide");
//arrowContBlue.addClass("logo-hide");
buttonsVideo.hide();

//switch to dark mode button
$(".switch").click(function () {
    $(this).toggleClass("switchOn");

    //change colors on body
    $(document.body).toggleClass("body-dark");
    $("header").toggleClass("body-dark");
    $("#container-playlist").toggleClass("body-dark");
    $("#container-playlist").toggleClass("body-white");
    $(".btn-email").toggleClass("body-white");
    $(".btn-text").toggleClass("text-black");
    $(".prof-name").toggleClass("text-white");
    $(".prof-func").toggleClass("text-white");
    $(".headerTitle").toggleClass("text-white");
    $(".headerTitle").toggleClass("text-blue");
    $("#headerTitleSupport").toggleClass("text-white");
    $("#headerTitleSupport").toggleClass("text-blue");
    $("#koptitel-02 h1").toggleClass("text-blue");
    $("#koptitel-02 h1").toggleClass("text-white");
    $(".cont-section").toggleClass("body-dark");
    $(".cont-section h4").toggleClass("text-white");
    $("#logo").toggleClass("logo-hide");
    $("#logo2").toggleClass("logo-hide");
    arrowContWht.toggleClass("logo-hide");
    arrowContBlck.toggleClass("logo-hide");
})