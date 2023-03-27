"use strict"

// TOPへ戻るボタンの制御

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

// TOPへ戻るボタンの制御


// 現在地ハイライトの挙動

  const section = document.getElementsByTagName("section");
  const side_menu = document.getElementsByClassName("side-nav__list");
  const y = 100;
  
  window.onscroll = function(){
    for(let i = 0;i < side_menu.length;i++){
      side_menu[i].classList.remove("current");
    };

    for(let i =0;i < section.length;i++){
      let section_rect = section[i].getBoundingClientRect();
      if(-(section[i].clientHeight - y) < section_rect.top && section_rect.top < y){
        side_menu[i].classList.toggle("current");
      };
    };

  };

// 現在地ハイライトの挙動

