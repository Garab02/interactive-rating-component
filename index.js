const buttons = document.querySelectorAll('.list_btns');
const submitbtn = document.querySelector('.submit');
const rating = document.querySelector('.selected_val');
const mainpart = document.querySelector('.box-1');
const sucesspart = document.querySelector('.box-2');









sucesspart.style.display = 'none';

let value;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttons.forEach((button) => button.classList.remove("list__change"));
    e.target.classList.add("list__change");
    value = e.target.textContent;
  });
});


// document.querySelector('#buttons')
//   .addEventListener('click', event => {
//     let target = event.target;
//     if (target.matches('button')) {
//       let value = target.innerHTML
  
//       document.querySelector('#output').value += value
//     }
//   });


submitbtn.addEventListener("click", () => {
    rating.textContent = value;
    mainpart.style.display = "none";
    sucesspart.style.display = "flex";
  });