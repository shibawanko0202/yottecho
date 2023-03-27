"use strict"


// 料金体系の数値(変更の際はここを修正して下さい)
// 半角で入力してください

  const number = document.getElementsByClassName("plan__number-level");
  const training = document.getElementById("plan__training");
  const bathing = document.getElementById("plan__bathing");
  const dementia = document.getElementById("plan__dementia");
  const staff = document.getElementsByClassName("plan__staff");
  const baseup = document.getElementsByClassName("plan__baseup");
  const region = document.getElementsByClassName("plan__region");
  const plan_total = document.getElementsByClassName("plan__total");

  // ↓↓↓「要介護1」の値段はこの数値を変更↓↓↓
  number[0].textContent = "750";
  // ↓↓↓「要介護2」の値段はこの数値を変更↓↓↓
  number[1].textContent = "887";
  // ↓↓↓「要介護3」の値段はこの数値を変更↓↓↓
  number[2].textContent = "1028";
  // ↓↓↓「要介護4」の値段はこの数値を変更↓↓↓
  number[3].textContent = "1168";
  // ↓↓↓「要介護5」の値段はこの数値を変更↓↓↓
  number[4].textContent = "1308";

  // ↓↓↓「要支援1」の値段はこの数値を変更↓↓↓
  number[5].textContent = "1672";
  // ↓↓↓「要支援2」の値段はこの数値を変更↓↓↓
  number[6].textContent = "3428";

  // ↓↓↓「個別機能訓練加算Ⅱ」の値段はこの数値を変更↓↓↓
  training.textContent = "56";
  // ↓↓↓「入浴」の値段はこの数値を変更↓↓↓
  bathing.textContent = "40";
  // ↓↓↓「認知症加算」の値段はこの数値を変更↓↓↓
  dementia.textContent = "60";

  // ↓↓↓「介護職員処遇改善加算Ⅰ」の割合(％)はこの数値を変更↓↓↓
  const staff_percent = 5.9 / 100;
  // ↓↓↓「ベースアップ加算」の割合(％)はこの数値を変更↓↓↓
  const baseup_percent = 1.1 / 100;
  // ↓↓↓「ベースアップ加算」の値段はこの数値を変更↓↓↓
  const region_percent = 10.27;

  region[0].textContent = region_percent / 10;
  region[1].textContent = region_percent / 10;


  function plan_calc_n(n){
    const n__base = Number(number[n].textContent) + Number(training.textContent) + Number(bathing.textContent) + Number(dementia.textContent);

    staff[0].textContent = Math.round(n__base * staff_percent);
    baseup[0].textContent = Math.round(n__base * baseup_percent);

    plan_total[0].textContent = Math.round(((Number(n__base) + Number(n__base * staff_percent) + Number(n__base * baseup_percent)) * region_percent) / 10);
  }
  plan_calc_n(0)


  function plan_calc_s(n){
    const s__base = Number(number[n].textContent);

    staff[1].textContent = Math.round(s__base * staff_percent);
    baseup[1].textContent = Math.round(s__base * baseup_percent);

    plan_total[1].textContent = Math.round(((Number(s__base) + Number(s__base * staff_percent) + Number(s__base * baseup_percent)) * region_percent) / 10);
  }
  plan_calc_s(5)

// 料金体系の数値(変更の際はここを修正して下さい)



// 介護度のラジオボタンを押した際の挙動

  const level = document.getElementsByName("n-level");
  const list = document.getElementsByClassName("plan__list");
  const label = document.getElementsByClassName("n-label");
  const plus = document.getElementById("plus");
  const container = document.getElementsByClassName("price-container");
  const t_container = document.getElementsByClassName("price-c-total");

  function n_non(){
    container[8].classList.remove("container_non");
    container[9].classList.remove("container_non");
    container[10].classList.remove("container_non");

    t_container[1].classList.remove("container_non");
  };

  function s_non(){
    container[8].classList.add("container_non");
    container[9].classList.add("container_non");
    container[10].classList.add("container_non");
    
    t_container[1].classList.add("container_non");
  };
  s_non();

  for(let i = 0;i < level.length;i++){
    level[i].addEventListener("change",()=>{
      for(let i = 0;i < level.length;i++){
        number[i].classList.remove("plan__number");
        label[i].classList.remove("label__select");
      };
      number[i].classList.add("plan__number");
      label[i].classList.add("label__select");

      if(i < 5){
        list[0].classList.add("plan__list-choice");
        list[1].classList.remove("plan__list-choice");
        plus.classList.add("plan__plus-move");
        plan_calc_n(i);
        s_non();
      } else {
        list[1].classList.add("plan__list-choice");
        list[0].classList.remove("plan__list-choice");
        plus.classList.remove("plan__plus-move");
        plan_calc_s(i);
        n_non();
      };
    });
  };

  //plan__plusをクリックした時の挙動

  plus.addEventListener("click",()=>{
    for(let i = 0;i < level.length;i++){
      number[i].classList.remove("plan__number");
      label[i].classList.remove("label__select");
    };
    number[5].classList.add("plan__number");
    label[5].classList.add("label__select");
    level[5].checked = true;

    list[1].classList.add("plan__list-choice");
    list[0].classList.remove("plan__list-choice");
    plus.classList.remove("plan__plus-move");
    plan_calc_s(5);
    n_non();
  })

// 介護度のラジオボタンを押した際の挙動

