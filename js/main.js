"use strict"

const header = document.getElementById("header");
const to_top = document.getElementById("to_top");

// 位置を確認してクラスを制御
function top_button(){
  if(header.getBoundingClientRect().y < -100){
    to_top.classList.add("show");
  } else {
    to_top.classList.remove("show");
  };
};

// スクロールするたびに判定
window.addEventListener("scroll",top_button);



// 介護度のラジオボタンについて

const number = document.getElementsByClassName("plan__number-level");
const level = document.getElementsByName("n-level");
const list = document.getElementsByClassName("plan__list");


for(let i = 0;i < level.length;i++){
  level[i].addEventListener("change",()=>{
    for(let i = 0;i < level.length;i++){
      number[i].classList.remove("plan__number");
    };
    number[i].classList.add("plan__number");

    if(i < 5){
      list[0].classList.add("plan__list-choice");
      list[1].classList.remove("plan__list-choice");
    } else {
      list[1].classList.add("plan__list-choice");
      list[0].classList.remove("plan__list-choice");
    };
  });
};


