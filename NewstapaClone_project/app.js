const rank2016 = document.getElementById("rank2016");
const rank2017 = document.getElementById("rank2017");
const rank2018 = document.getElementById("rank2018");
const rank2019 = document.getElementById("rank2019");

const rankTable2016 = document.getElementById("rankTable__2016");
const rankTable2017 = document.getElementById("rankTable__2017");
const rankTable2018 = document.getElementById("rankTable__2018");
const rankTable2019 = document.getElementById("rankTable__2019");

const minititle2016 =  document.getElementById("minititle2016");
const minititle2017 =  document.getElementById("minititle2017");
const minititle2018 =  document.getElementById("minititle2018");
const minititle2019 =  document.getElementById("minititle2019");

const slctliyear2016 = document.getElementById("slct-li-year2016");
const slctliyear2017 = document.getElementById("slct-li-year2017");
const slctliyear2018 = document.getElementById("slct-li-year2018");
const slctliyear2019 = document.getElementById("slct-li-year2019");

const multiselect = document.getElementsByClassName("multiselect")[0];
const multiselectContent = document.getElementsByClassName("multiselect__content-wrapper")[0];
const multiselectOption = document.getElementsByClassName("multiselect__option");

const canvasMini = document.getElementsByClassName("canvas-mini");
const closeTitle = document.getElementsByClassName("canvas-box popup close")[0];

const pickTotal = document.getElementById("pickTotal");
const pickHigh = document.getElementById("pickHigh");
const remark = document.getElementsByClassName("remark")[2];
const barCanvas1 = document.getElementById("barCanvas1");
const barCanvas2 = document.getElementById("barCanvas2");

const y2016 =  document.getElementById("y2016");
const y2017 =  document.getElementById("y2017");
const y2018 =  document.getElementById("y2018");
const y2019 =  document.getElementById("y2019");
const y2016Li = document.getElementById("y2016-li");
const y2017Li = document.getElementById("y2017-li");
const y2018Li = document.getElementById("y2018-li");
const y2019Li = document.getElementById("y2019-li");

const minititle16 = document.getElementById('minititle16');
const minititle17 = document.getElementById('minititle17');
const minititle18 = document.getElementById('minititle18');
const minititle19 = document.getElementById('minititle19');

const bubbleCanvas1 = document.getElementById("bubbleCanvas1");
const bubbleCanvas2 = document.getElementById("bubbleCanvas2");
const bubbleCanvas3 = document.getElementById("bubbleCanvas3");
const bubbleCanvas4 = document.getElementById("bubbleCanvas4");

const nodeTitle = document.querySelectorAll(".node-title");

const donor1 = document.getElementById("donor1");
const donor2 = document.getElementById("donor2");
const donor3 = document.getElementById("donor3");
const donor4 = document.getElementById("donor4");
const donor5 = document.getElementById("donor5");
const donor6 = document.getElementById("donor6");
const donor7 = document.getElementById("donor7");
const donor8 = document.getElementById("donor8");
const donor9 = document.getElementById("donor9");
const donor10 = document.getElementById("donor10");
const donor11 = document.getElementById("donor11");
const donor12 = document.getElementById("donor12");
const donor13 = document.getElementById("donor13");
const donors = document.getElementsByClassName("canvas-box canvas-box-border popup");

rank2016.onclick = () => {
    rankTable2016.style.display = "contents";
    rankTable2017.style.display = "none";
    rankTable2018.style.display = "none";
    rankTable2019.style.display = "none";

    minititle2016.style.display = "block";
    minititle2017.style.display = "none";
    minititle2018.style.display = "none";
    minititle2019.style.display = "none";

    slctliyear2016.className = "slct-li-year slct-select";
    slctliyear2017.className = "slct-li-year";
    slctliyear2018.className = "slct-li-year";
    slctliyear2019.className = "slct-li-year";
}
rank2017.onclick = () => {
    rankTable2017.style.display = "contents";
    rankTable2016.style.display = "none";
    rankTable2018.style.display = "none";
    rankTable2019.style.display = "none";

    minititle2017.style.display = "block";
    minititle2016.style.display = "none";
    minititle2018.style.display = "none";
    minititle2019.style.display = "none";

    slctliyear2016.className = "slct-li-year";
    slctliyear2017.className = "slct-li-year slct-select";
    slctliyear2018.className = "slct-li-year";
    slctliyear2019.className = "slct-li-year";
}
rank2018.onclick = () => {
    rankTable2018.style.display = "contents";
    rankTable2016.style.display = "none";
    rankTable2017.style.display = "none";
    rankTable2019.style.display = "none";

    minititle2018.style.display = "block";
    minititle2016.style.display = "none";
    minititle2017.style.display = "none";
    minititle2019.style.display = "none";

    slctliyear2016.className = "slct-li-year";
    slctliyear2017.className = "slct-li-year";
    slctliyear2018.className = "slct-li-year slct-select";
    slctliyear2019.className = "slct-li-year";
}
rank2019.onclick = () => {
    rankTable2019.style.display = "contents";
    rankTable2016.style.display = "none";
    rankTable2017.style.display = "none";
    rankTable2018.style.display = "none";

    minititle2019.style.display = "block";
    minititle2016.style.display = "none";
    minititle2017.style.display = "none";
    minititle2018.style.display = "none";

    slctliyear2016.className = "slct-li-year";
    slctliyear2017.className = "slct-li-year";
    slctliyear2018.className = "slct-li-year";
    slctliyear2019.className = "slct-li-year slct-select";
}

multiselect.onclick = () => {
    if (multiselectContent.style.display === "none") {
        multiselectContent.style.display = "block";
    } else {
        multiselectContent.style.display = "none";
    }
}

multiselectOption[0].onclick = () => {
    canvasMini[1].style.display = "block";
    canvasMini[0].style.display = "none";
}
multiselectOption[0].onmouseover = () => {
    multiselectOption[0].className = "multiselect__option multiselect__option--highlight";
    multiselectOption[1].className = "multiselect__option";
    multiselectOption[2].className = "multiselect__option";
    multiselectOption[3].className = "multiselect__option";
    multiselectOption[4].className = "multiselect__option";
}
multiselectOption[1].onmouseover = () => {
    multiselectOption[0].className = "multiselect__option";
    multiselectOption[1].className = "multiselect__option multiselect__option--highlight";
    multiselectOption[2].className = "multiselect__option";
    multiselectOption[3].className = "multiselect__option";
    multiselectOption[4].className = "multiselect__option";
}
multiselectOption[2].onmouseover = () => {
    multiselectOption[0].className = "multiselect__option";
    multiselectOption[1].className = "multiselect__option";
    multiselectOption[2].className = "multiselect__option multiselect__option--highlight";
    multiselectOption[3].className = "multiselect__option";
    multiselectOption[4].className = "multiselect__option";
}
multiselectOption[3].onmouseover = () => {
    multiselectOption[0].className = "multiselect__option";
    multiselectOption[1].className = "multiselect__option";
    multiselectOption[2].className = "multiselect__option";
    multiselectOption[3].className = "multiselect__option multiselect__option--highlight";
    multiselectOption[4].className = "multiselect__option";
}
multiselectOption[4].onmouseover = () => {
    multiselectOption[0].className = "multiselect__option";
    multiselectOption[1].className = "multiselect__option";
    multiselectOption[2].className = "multiselect__option";
    multiselectOption[3].className = "multiselect__option";
    multiselectOption[4].className = "multiselect__option multiselect__option--highlight";
}

pickTotal.onclick = () => {
    pickTotal.parentNode.className = "slct-li slct-select";
    pickHigh.parentNode.className = "slct-li"
    remark.style.display = "block";
    barCanvas1.style.display = "block";
    barCanvas2.style.display = "none";
}
pickHigh.onclick = () => {
    pickHigh.parentNode.className = "slct-li slct-select";
    pickTotal.parentNode.className = "slct-li"
    remark.style.display = "none";
    barCanvas1.style.display = "none";
    barCanvas2.style.display = "block";
}

y2016.onclick = () => {
    for (let i = 0; i < donors.length; i++) {
        donors[i].style.display = "none";
    };
    minititle16.style.display = "block";
    minititle17.style.display = "none";
    minititle18.style.display = "none";
    minititle19.style.display = "none";
    y2016Li.className = "slct-li-year slct-select";
    y2017Li.className = "slct-li-year";
    y2018Li.className = "slct-li-year";
    y2019Li.className = "slct-li-year";
    bubbleCanvas1.style.display = "block";
    bubbleCanvas2.style.display = "none";
    bubbleCanvas3.style.display = "none";
    bubbleCanvas4.style.display = "none";
}
y2017.onclick = () => {
    for (let i = 0; i < donors.length; i++) {
        donors[i].style.display = "none";
    };
    minititle16.style.display = "none";
    minititle17.style.display = "block";
    minititle18.style.display = "none";
    minititle19.style.display = "none";
    y2016Li.className = "slct-li-year";
    y2017Li.className = "slct-li-year slct-select";
    y2018Li.className = "slct-li-year";
    y2019Li.className = "slct-li-year";
    bubbleCanvas1.style.display = "none";
    bubbleCanvas2.style.display = "block";
    bubbleCanvas3.style.display = "none";
    bubbleCanvas4.style.display = "none";
}
y2018.onclick = () => {
    for (let i = 0; i < donors.length; i++) {
        donors[i].style.display = "none";
    };
    minititle16.style.display = "none";
    minititle17.style.display = "none";
    minititle18.style.display = "block";
    minititle19.style.display = "none";
    y2016Li.className = "slct-li-year";
    y2017Li.className = "slct-li-year";
    y2018Li.className = "slct-li-year slct-select";
    y2019Li.className = "slct-li-year";
    bubbleCanvas1.style.display = "none";
    bubbleCanvas2.style.display = "none";
    bubbleCanvas3.style.display = "block";
    bubbleCanvas4.style.display = "none";
}
y2019.onclick = () => {
    for (let i = 0; i < donors.length; i++) {
        donors[i].style.display = "none";
    };
    minititle16.style.display = "none";
    minititle17.style.display = "none";
    minititle18.style.display = "none";
    minititle19.style.display = "block";
    y2016Li.className = "slct-li-year";
    y2017Li.className = "slct-li-year";
    y2018Li.className = "slct-li-year";
    y2019Li.className = "slct-li-year slct-select";
    bubbleCanvas1.style.display = "none";
    bubbleCanvas2.style.display = "none";
    bubbleCanvas3.style.display = "none";
    bubbleCanvas4.style.display = "block";
}

nodeTitle[0].onclick = () => {
    for (let i = 0; i < donors.length; i++) {
        donors[i].style.display = "none";
    };
    donor3.style.display = "block";
}

nodeTitle[1].addEventListener('click', function () { 
    for (let i = 0; i < donors.length; i++) {
        donors[i].style.display = "none";
    };
    donor4.style.display = "block";
})
nodeTitle[2].addEventListener('click', function () {
    for (let i = 0; i < donors.length; i++) {
        donors[i].style.display = "none";
    };
    donor2.style.display = "block";
})
nodeTitle[3].addEventListener('click', function () {
    for (let i = 0; i < donors.length; i++) {
        donors[i].style.display = "none";
    };
    donor5.style.display = "block";
})
nodeTitle[4].addEventListener('click', function () {
    for (let i = 0; i < donors.length; i++) {
        donors[i].style.display = "none";
    };
    donor1.style.display = "block";
})
nodeTitle[5].addEventListener('click', function () {
    for (let i = 0; i < donors.length; i++) {
        donors[i].style.display = "none";
    };
    donor6.style.display = "block";
})
nodeTitle[6].addEventListener('click', function () {
    for (let i = 0; i < donors.length; i++) {
        donors[i].style.display = "none";
    };
    donor8.style.display = "block";
})
nodeTitle[7].addEventListener('click', function () {
    for (let i = 0; i < donors.length; i++) {
        donors[i].style.display = "none";
    };
    donor7.style.display = "block";
})
nodeTitle[8].addEventListener('click', function () {
    for (let i = 0; i < donors.length; i++) {
        donors[i].style.display = "none";
    };
    donor9.style.display = "block";
})
nodeTitle[9].addEventListener('click', function () {
    for (let i = 0; i < donors.length; i++) {
        donors[i].style.display = "none";
    };
    donor12.style.display = "block";
})
nodeTitle[10].addEventListener('click', function () {
    for (let i = 0; i < donors.length; i++) {
        donors[i].style.display = "none";
    };
    donor11.style.display = "block";
})
nodeTitle[11].addEventListener('click', function () {
    for (let i = 0; i < donors.length; i++) {
        donors[i].style.display = "none";
    };
    donor10.style.display = "block";
})
nodeTitle[12].addEventListener('click', function () {
    for (let i = 0; i < donors.length; i++) {
        donors[i].style.display = "none";
    };
    donor13.style.display = "block";
})

closeTitle.onclick = () => {
    canvasMini[1].style.display = "none";
    canvasMini[0].style.display = "block";
}
