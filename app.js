let h1 = document.querySelector("h1");

// Increase text size + rotate
setTimeout(function () {
    h1.style.fontSize = "120px";
    h1.style.backgroundColor = "white";
    h1.style.border = "3px dashed black";
    h1.style.padding = "15px";
    h1.style.position = "absolute"
    h1.style.top = "50%";
    h1.style.left = "50%";
    h1.style.transform = 'rotate(20deg)';
}, 0);
setTimeout(function () {
    h1.style.position = "relative";
    h1.style.border = "none";
    h1.style.top = "initial";
    h1.style.left = "initial";
    h1.style.backgroundColor = "white";
    h1.style.padding = "0";
    h1.style.transform = 'rotate(0deg)';
    h1.style.fontSize = "50px";
}, 1000);

let h2 = document.querySelectorAll("h2");

for (let i = 0; i < h2.length; i++) {
    setInterval(function () {
        h2[i].style.fontWeight = "bold"
        h2[i].style.textShadow = "3px 3px 4px #216ed3";
    }, 2000);

    setInterval(function () {
        h2[i].style.fontWeight = "normal"
        h2[i].style.textShadow = "0 0 0 white";
    }, 6000);
}

let h3 = document.querySelectorAll("h3");

for (let i = 0; i < h3.length; i++) {
    setInterval(function () {
        h3[i].style.textDecoration = "none"
        h3[i].style.opacity = "0.5";
        h3[i].style.backgroundColor = "black";
    }, 2000);

    setInterval(function () {
        h3[i].style.textDecoration = "underline"
        h3[i].style.opacity = "1";
        h3[i].style.backgroundColor = "transparent";
    }, 6000);
}

if (document.getElementById("details1") && document.getElementById("details2")) {
    nbClick("details1", "section1");
    nbClick("details2", "section2");
}

let figure  = document.querySelector("figure");
let figCaption  = document.querySelector("figcaption");
if (figure && figCaption) {
    // add a class
    figure.classList = "figure";
    figCaption.classList = "figCaption";
    document.getElementById("div1").classList = "card-container";
    document.getElementById("div2").classList = "card";
    document.getElementById("div3").classList = "card-front";
    document.getElementById("div4").classList = "card-back";
    let fig2 = document.querySelectorAll("figcaption");
    fig2[1].classList = "figcaption2";
}

// Retrieve a json file and display its content in HTML
let xhr2 = new XMLHttpRequest();
xhr2.open("GET", "first.json");
xhr2.responseType = "json";

xhr2.onload = function () {
    let response = xhr2.response;

    let createUl = document.createElement("ul");
    let first =  document.getElementById("first");
    first.prepend(createUl);

    for (let i = 0; i < response.length; i++) {
        let createLi = document.createElement("li");
        createLi.innerHTML = response[i];
        createUl.append(createLi);
    }
}
xhr2.send();


let xhr = new XMLHttpRequest();
xhr.open("GET", "second.json");
xhr.responseType = "json";

xhr.onload = function () {
    let response = xhr.response;

    let createDl = document.createElement("dl");
    let second =  document.getElementById("second");
    second.prepend(createDl);

    for (let i = 0; i < response.length; i++) {
        let createDt = document.createElement("dt");
        createDt.innerHTML = response[i][0];
        createDl.append(createDt);
        let createDd = document.createElement("dd");
        createDd.innerHTML = response[i][1];
        createDl.append(createDd);
        if (createDd.innerHTML === response[3][1]) {
            let createA = document.createElement("a");
            createA.href = "https://github.com/ChloeArd";
            createA.innerHTML = response[3][1];
            let dd = document.querySelectorAll("dd");
            dd[3].innerHTML = "";
            dd[3].append(createA);
        }
    }
}
xhr.send();

let span = document.querySelectorAll("span");
if (span) {
    // each letter changes color and font style when hovering the mouse over a label
    let color = ['blue', 'red', 'yellow', 'orange', 'green', 'black', 'brown', 'gray', 'brown', 'blueviolet', 'coral', 'pink'];
    let font = ['bold', 'normal'];

    document.getElementById("label1").addEventListener("mouseover",letterColorAndFont);
    document.getElementById("label2").addEventListener("mouseover",letterColorAndFont);
    document.getElementById("label3").addEventListener("mouseover",letterColorAndFont);
    document.getElementById("label4").addEventListener("mouseover",letterColorAndFont);

    function letterColorAndFont () {
        let time = 500;
        for (let x = 0; x < span.length; x++) {
            setTimeout(function () {
                randomColor = color[Math.floor(Math.random() * color.length)];
                randomFont = font[Math.floor(Math.random() * font.length)];
                span[x].style.color = randomColor;
                span[x].style.fontWeight = randomFont;
                span[x].style.fontStyle = "italic";
                span[x].style.fontSize = "25px";
                console.log(span[x]);
            }, time);
            time = time + 500;
        }
    }
}

function nbClick(id1, id2) {
    let click = 0;
    document.getElementById(id1).addEventListener("click", function () {
        if (click === 0) {
            document.getElementById(id2).style.display = "none";
            click++;
        }
        else {
            document.getElementById(id2).style.display = "flex";
            click = 0;
        }
    });
}