let randomVariable = Math.random();
randomVariable = randomVariable*7
randomVariable = Math.floor(randomVariable);"dice"
let randomImage  = "images/dice"+randomVariable+".png";

// document.querySelector("img").setAttribute("src","randomImage")
//ese na karke ese kroo

let image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src",randomImage)


let randomVariable2 = Math.random();
randomVariable2 = randomVariable2*7
randomVariable2 = Math.floor(randomVariable2)
let randomImage2  = "images/dice"+randomVariable2+".png";

let image2 = document.querySelectorAll("img")[1]

image2.setAttribute("src",randomImage2)

if(randomVariable>randomVariable2){
    document.querySelector("h1").innerHTML = "Player1 wins!"
}else if(randomVariable<randomVariable2){
    document.querySelector("h1").innerHTML = "Player2 wins!"
}else{
    document.querySelector("h1").innerHTML = "Draw"
}