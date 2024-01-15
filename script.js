let counter=0;
const counterValue=document.getElementById("counter-value");
const incrementBtn=document.getElementById("increment-btn");
const decrementBtn=document.getElementById("decrement-btn");
const resetBtn=document.getElementById("reset");

// console.log(counterValue);
// console.log(incrementBtn);
// console.log(decrementBtn);
// console.log(resetBtn);

// To increment the value of counter

incrementBtn.addEventListener("click", (e)=>{
counter++;
counterValue.innerHTML=counter;
});

//To decrement the value of counter

decrementBtn.addEventListener("click", (e)=>{
    counter--;
    counterValue.innerHTML=counter;
});

resetBtn.addEventListener("click", reset);

function reset(){
    counter=0;
    counterValue.innerHTML=counter;
}