/*
 * slide-nav
 * ES6 Vanilla.js navigation plugin to simple use on one-page websites.
 * https://github.com/qmixi/slide-nav
 *
 * A project by Piotr Kumorek
 * Released under the MIT license.
*/

$("#demo01").animatedModal();
$("#demo02").animatedModal({modalTarget:'modal2'});
$("#demo03").animatedModal({modalTarget:'modal3'});
$("#demo04").animatedModal({modalTarget:'modal4'});

$("#exam1").animatedModal({modalTarget:'exam-modal1'});
$("#exam2").animatedModal({modalTarget:'exam-modal2'});
$("#exam3").animatedModal({modalTarget:'exam-modal3'});
$("#exam4").animatedModal({modalTarget:'exam-modal4'});

window.slide = new SlideNav();


/*Link01*/
let linkcolor1=document.querySelector("#color1");

linkcolor1.addEventListener("mouseover", mouseover01);
linkcolor1.addEventListener("mouseout", mouseout01);

function mouseover01(){
  console.log("mouseoverFunction");
  linkcolor1.style.color = "#333";
  linkcolor1.style.borderBottomColor = "#FF8C00";
}

function mouseout01() {
  linkcolor1.style.color = "#333";
}


/*Link02*/
let linkcolor2=document.querySelector("#color2");
linkcolor2.addEventListener("mouseover", mouseover02);
linkcolor2.addEventListener("mouseout", mouseout02);

function mouseover02(){
  console.log("mouseoverFunction");
  linkcolor2.style.color = "#333";
  linkcolor2.style.borderBottomColor = "#5600d9";
}

function mouseout02() {
  linkcolor2.style.color = "#333";
}

/*Link03*/
let linkcolor3=document.querySelector("#color3");
linkcolor3.addEventListener("mouseover", mouseover3);
linkcolor3.addEventListener("mouseout", mouseout03);

function mouseover3(){
  console.log("mouseoverFunction");
  linkcolor3.style.color = "#333";
  linkcolor3.style.borderBottomColor = "#d900aa";
}

function mouseout03() {
  linkcolor3.style.color = "#333";
}

/*Link04*/
let linkcolor4=document.querySelector("#color4");
linkcolor4.addEventListener("mouseover", mouseover4);
linkcolor4.addEventListener("mouseout", mouseout04);

function mouseover4(){
  console.log("mouseoverFunction");
  linkcolor4.style.color = "#333";
  linkcolor4.style.borderBottomColor = "#0078d9";
}

function mouseout04() {
  linkcolor4.style.color = "#333";
}

/*Link05*/
let linkcolor5=document.querySelector("#color5");
linkcolor5.addEventListener("mouseover", mouseover5);
linkcolor5.addEventListener("mouseout", mouseout05);

function mouseover5(){
  console.log("mouseoverFunction");
  linkcolor5.style.color = "#333";
  linkcolor5.style.borderBottomColor = "#D90000";
}

function mouseout05() {
  linkcolor5.style.color = "#333";
}

/*Link06*/
let linkcolor6=document.querySelector("#color6");
linkcolor6.addEventListener("mouseover", mouseover6);
linkcolor6.addEventListener("mouseout", mouseout06);

function mouseover6(){
  console.log("mouseoverFunction");
  linkcolor6.style.color = "#333";
  linkcolor6.style.borderBottomColor = "#04756F";
}

function mouseout06() {
  linkcolor6.style.color = "#333";
}



