// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let n1=Math.floor(Math.random()*100);
let n2=Math.floor(Math.random()*100);


// Iteration 3: Creating variables required to make the game functional

let box1=document.getElementById("number1");
let box2=document.getElementById("number2");

let plus=document.getElementById("plus");
let minus=document.getElementById("minus");
let multiply=document.getElementById("mul");
let divide=document.getElementById("divide");
let modulus=document.getElementById("modulus");




// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

let n3;
let score=0;
let box3=document.getElementById("number3");


// Iteration 5: Creating a randomise function to make the game functional

function randomise(){
    n1=Math.floor(Math.random()*100);
    n2=Math.floor(Math.random()*100);
    let oprArr=["+","-","*","/","%"];
    let randomInd=Math.floor(Math.random()*5);
    let randomOpr=oprArr[randomInd];


    //switch case
    switch(randomOpr){

        case "+":
            n3=n1+n2
            break;
        case "-":
            n3=Math.abs(n1-n2)
            break;
        case "*":
            n3=n1*n2
            break;
        case "/":
            n3=Math.floor(n1/n2)
            break;
        case "%":
            n3=n1%n2
            break;
        default:
            randomise();
        
    }
    console.log(n1,randomOpr,n2,n3)
    box1.textContent=n1;
    box2.textContent=n2;
    box3.textContent=n3;
}

randomise()


// Iteration 6: Making the Operators (button) functional

plus.onclick=()=>{
    
    if(n1+n2==n3){
        score++;
        resetTimer()
    }else{
        location.href="./gameover.html";
    }
    randomise()
}

minus.onclick=()=>{
    
    if(Math.abs(n1-n2)==n3){
        score++;
        resetTimer()
    }else{
        location.href="./gameover.html";
    }
    randomise()
}

multiply.onclick=()=>{
    
    if(n1*n2==n3){
        score++;
        resetTimer()
    }else{
        location.href="./gameover.html";
    }
    randomise()
}

divide.onclick=()=>{
    
    if(Math.floor(n1/n2)==n3){
        score++;
        resetTimer()
    }else{
        location.href="./gameover.html";
    }
    randomise()
}

modulus.onclick=()=>{
    
    if(n1%n2==n3){
        score++;
        resetTimer()
    }else{
        location.href="./gameover.html";
    }
    randomise()
}

// Iteration 7: Making Timer functional


let time=20;
let timer;

function startTimer(){
    timer=setInterval(function(){
        time--;
        if(time==0){
            location.href="./gameover.html";
        }
        let timeBox=document.getElementById("timer");
        timeBox.textContent=time;
        localStorage.setItem("scoreValue",score);
    },1000)
}


function resetTimer() {
    clearInterval(timer);  
    time = 21;              
    startTimer();         
}
startTimer();