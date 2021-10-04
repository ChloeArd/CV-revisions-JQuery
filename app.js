$h1 = $("h1");

// Increase text size + rotate
setTimeout(function () {
    $h1.css({
        "postion" : "absolute",
        "font-size" : "120px",
        "background-color" : "white",
        "border" : "3px dashed black",
        "padding": "15px",
        "top" : "50%",
        "left" : "50%",
        "transform" : "rotate(20deg)"
    });
}, 0);
setTimeout(function () {
    $h1.css({
        "position" : "relative",
        "font-size" : "50px",
        "border" : "none",
        "padding": "0",
        "top" : "initial",
        "left" : "initial",
        "transform" : "rotate(0deg)"
    });
}, 1000);

$h2 = $("h2");

for ($i = 0; $i < $h2.length; $i++) {
    setInterval(function () {
        $h2.css({
            "font-weight" : "bold",
            "text-shadow" : "3px 3px 4px #216ed3",
        });
    }, 2000);

    setInterval(function () {
        $h2.css({
            "font-weight" : "normal",
            "text-shadow" : "0 0 0 white",
        });
    }, 6000);
}

$h3 = $("h3");

for ($i = 0; $i < $h3.length; $i++) {
    setInterval(function () {
        $h3.css({
            "text-decoration" : "none",
            "opacity" : "0.5",
            "background-color" : "black"
        });
    }, 2000);

    setInterval(function () {
        $h3.css({
            "text-decoration" : "underline",
            "opacity" : "1",
            "background-color" : "transparent"
        });
    }, 6000);
}

if ($("#details1") && $("#details2")) {
    nbClick("#details1", "#section1");
    nbClick("#details2", "#section2");
}

$figure  = $("figure");
$figCaption  = $("figcaption");
if ($figure && $figCaption) {
    // add a class
    $figure.addClass("figure");
    $figCaption.addClass("figCaption");
    $("#div1").addClass("card-container");
    $("#div2").addClass("card");
    $("#div3").addClass("card-front");
    $("#div4").addClass("card-back");
    $fig2 = $("figcaption" + [1]);
    $fig2.addClass("figcaption2");
}

// Retrieve a json file and display its content in HTML
$.getJSON("first.json", function (response) {
    $("#first").prepend("<ul id='ul'></ul>");
    $rpe = response.length;
    for ($i = 0; $i < $rpe; $i++) {
        $("#ul").append("<li>" + response[$i] + "</li>");
    }
});

$.getJSON("second.json", function (response) {
    $("#second").prepend("<dl id='dl'></dl>");
    $rpe = response.length;
    for ($i = 0; $i < $rpe; $i++) {
        $("#dl").append("<dt id='#dt'" + [$i] + ">" + response[$i][0] + "</dt>");
        $("dl").append("<dd id='dd" + [$i] + "'>" + response[$i][1] + "</dd>");
        $dd3 = $("#dd3").text();
        if ($dd3 === response[3][1]) {
            console.log("ok");
            $dd = $("#dd3");
            $dd.html("");
            $dd.append("<a href='https://github.com/ChloeArd'>" + response[3][1] + "</a>");
        }
    }
});

$span = $("span");
if ($span) {
    // each letter changes color and font style when hovering the mouse over a label
    $color = ['blue', 'red', 'yellow', 'orange', 'green', 'black', 'brown', 'gray', 'brown', 'blueviolet', 'coral', 'pink'];
    $font = ['bold', 'normal'];

    $("#label1").on("mousemove",letterColorAndFont);
    $("#label2").on("mousemove",letterColorAndFont);
    $("#label3").on("mousemove",letterColorAndFont);
    $("#label4").on("mousemove",letterColorAndFont);

    function letterColorAndFont () {
        $time = 500;
        for ($x = 0; $x < $span.length; $x++) {
            setTimeout(function () {
                $randomColor = $color[Math.floor(Math.random() * $color.length)];
                $randomFont = $font[Math.floor(Math.random() * $font.length)];
                $spanx = $("span" + [$x]);
                $spanx.css({
                    "color" : $randomColor,
                    "font-weight" : $randomFont,
                    "font-style" : "italic",
                    "font-size" : "25px"
                });
            }, $time);
            $time += 500;
        }
    }
}

function nbClick(id1, id2) {
    $click = 0;
    $(id1).on("click", function () {
        if ($click === 0) {
            $(id2).css("display", "none");
            $click++;
        }
        else {
            $(id2).css("display", "flex");
            $click = 0;
        }
    });
}