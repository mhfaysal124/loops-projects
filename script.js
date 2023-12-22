const input = document.querySelector('.js-input');
const para = document.querySelector('.js-para');
const paraInDetails = document.querySelector('.js-paraInDetails');
const btn = document.querySelector('.js-btn');

btn.addEventListener('click', () => {
  input.focus();
  const inputElem = input.value;

  let sum = 0;
  for(let i = 1; i <= input.value; i++){
    sum += i;
    paraInDetails.innerHTML =sum;
  }
  
  paraInDetails.innerHTML = sum;
})

