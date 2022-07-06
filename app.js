const numberInput = document.getElementById("input");
const Btn = document.getElementById("btn");

let lotteryArray = [];
let siebenNum = false;

Btn.onclick = () => {
  let number = numberInput.value;
  lotteryArray = [];
  LuckyNumbers(number);
};

const LuckyNumbers = (i) => {
  document.querySelector(".root").textContent = "";
  let luckyNumber;

  for (let index = 0; index < i; index++) {
    for (let index = 0; index < 8; index++) {
      luckyNumber = Math.ceil(Math.random() * 90);

      lotteryArray[index] = luckyNumber;
    }
    for (let index = 0; index < 6; index++) {
      if (lotteryArray[6] == lotteryArray[index]) {
        siebenNum = true;
      }
      for (let index = 0; index < 5; index++) {
        lotteryArray.sort(function(a,b){return(a-b)});
        if (siebenNum) {
          lotteryArray[6] = Math.round(Math.random() * 90);
          siebenNum = true;
        }
      }
    }
    display(lotteryArray);
    console.log(lotteryArray);
  }
};

const display = (array) => {
  document.querySelector(".root").innerHTML += `
      
        <p>${array[0]} - ${array[1]} - ${array[2]} - ${array[3]} - ${array[4]} - ${array[5]} | ${array[6]} | ${array[7]}</p> <hr>
    `;
};
