
let btn = document.getElementById('btn');
let display =document.getElementById('dis');

let a =Math.random()*100;
a=Number.parseInt(a);
console.log(a);
let score =100;

btn.addEventListener('click',function(){
    
    score =score-1;
    let num =document.getElementById('inputbox').value;
        num=Number.parseInt(num);
        if(num==a){
            display.innerHTML=`you guessed the right number in ${100-score}chances `
        }
        else if(num<a && num>0){
            display.innerHTML=`your number is smaller than the acctual number !!!`
        }
        else{
            display.innerHTML=`your number is greater than the acctual number !!!`
        }
    }
)

