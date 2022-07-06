const numberInput = document.getElementById("input");
const Btn = document.getElementById("btn");
const sonuc = document.querySelector(".root");

let sayilar = [];
let siebenNum = false;

const LuckyNumbers = (i) => {
  document.querySelector(".root").textContent = "";
  let luckyNumber;

  for (let index = 0; index < i; index++) {
    for (let index = 0; index < 8; index++) {
      luckyNumber = Math.ceil(Math.random() * 89) + 1;
      if (!sayilar.includes(luckyNumber)) {
        sayilar[index] = luckyNumber;
      }
    }
    for (let index = 0; index < 6; index++) {
      for (let index = 0; index < 6; index++) {
        sayilar.sort(function (a, b) {
          return a - b;
        });
      }
      for (let index = 0; index < 6; index++) {
        sayilar.sort(function (a, b) {
          return a - b;
        });

        if (siebenNum) {
          sayilar[6] = Math.round(Math.random() * 90);
          siebenNum = true;
        }
      }
    }
    display(sayilar);
    console.log(sayilar);
  }
};

const display = (array) => {
  document.querySelector(".root").innerHTML += `
      
        <p>${array[0]} - ${array[1]} - ${array[2]} - ${array[3]} - ${array[4]} - ${array[5]} | ${array[6]} | ${array[7]}</p> <hr>
    `;
};
Btn.onclick = () => {
  let number = numberInput.value;
  sayilar = [];
  LuckyNumbers(number);
};
