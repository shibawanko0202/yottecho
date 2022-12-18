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

// input対応

const number_n = document.getElementsByClassName("plan__number-nursing");
const nursing = document.getElementsByName("nursing");
const number_s = document.getElementsByClassName("plan__number-support");
const support = document.getElementsByName("support");

// ↓要介護レベル↓
for(let i = 0;i < nursing.length;i++){
  nursing[i].addEventListener("change",()=>{
    for(let i = 0;i < nursing.length;i++){
      number_n[i].classList.remove("plan__number");
    };
    number_n[i].classList.toggle("plan__number");
  });
};

// ↓要支援レベル↓
for(let i = 0;i < support.length;i++){
  support[i].addEventListener("change",()=>{
    for(let i = 0;i < support.length;i++){
      number_s[i].classList.remove("plan__number");
    };
    number_s[i].classList.toggle("plan__number");
  });
};

