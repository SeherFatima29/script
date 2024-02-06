var name=prompt("what are you good name ?")
var name=("good name")
alert(name)

var time=prompt("what time is it?")

if(time == 11){
    alert("Good morning");
}else if(time == 2 ){
    alert("Good afternoon");
}
if(time == 5 ){
    alert("Good  Evening");
}else if(time == 9 ){
    alert("Good night");
}

var age=prompt("How Old are yOu ?")

var gender=prompt("Enter your gender")

if (age > 20 && gender == "boy"){
    alert("Welcome");
}else if (age < 20 && gender == "girl"){
    alert("your age is less than 20");
}

var score=0;

var question1 = ("2+2+2-2")
var question2 = ("3*2")
var question3 = ("2/2")

var answer1 = prompt(question1)
var answer2 = prompt(question2)
var answer3 = prompt(question3)

if (answer1 == "4"){
    score++
} if (answer2 == "6"){
    score++
}
 if (answer3 == "1"){
    score++
}

alert("your score is " + score)

