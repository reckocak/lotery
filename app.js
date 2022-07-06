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
        // 7. sayi mutlaka farkli olsun
        siebenNum = true;
      }
      for (let index = 0; index < 5; index++) {
        if (lotteryArray[index] > lotteryArray[index + 1]) {
          let bigNum = lotteryArray[index];
          lotteryArray[index] = lotteryArray[index + 1];
          lotteryArray[index + 1] = bigNum;
        }
        if (siebenNum) {
          lotteryArray[6] = Math.round(Math.random() * 90);
          siebenNum = true;
        }
      }
    }
    screen(lotteryArray);
    console.log(lotteryArray);
  }
};

const screen = (array) => {
  document.querySelector(".root").innerHTML += `
      
        <p>${array[0]} - ${array[1]} - ${array[2]} - ${array[3]} - ${array[4]} - ${array[5]} | ${array[6]} | ${array[7]}</p> <hr>
    `;
};
