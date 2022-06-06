// Question 1 - 4
// function qOne(){
//     let comment = "" ;
//     let city = prompt(" Enter Your City Name ") ;
//     if (city === "Karachi") {
//         comment =  "Welcome To The City Of Lights"
//     } else {
//         comment = " Please Enter Karachi "
//     } ;
    
//     document.querySelector("#city").innerHTML = comment ;
    
    
    
    
//     let gendermessege = "" ;
//     let gender = prompt ("Please Enter Your Gender") ; 
    
//     if (gender === "male" || gender === "Male" || gender === "M" || gender === "m") {
//         gendermessege = " Good Morning Sir "
//     }
//      else if (gender === "female" || gender === "Female" || gender === "F" || gender === "f") {
//         gendermessege = " Good Morning Ma'am "
//     }
//      else {
//          gendermessege = " Good Morning "
//      }
    
//      document.querySelector("#gender").innerHTML = gendermessege ;
    
    
//      let trafficColor = prompt("Enter Color Of Traffic Light") ; 
     
//      let color_mean = "" ; 
     
//         if (trafficColor == "red" || trafficColor == "Red" || trafficColor == "r" || trafficColor == "R") {
//          color_mean =  "Must Stop"
//      }  else if (trafficColor == "yellow" || trafficColor == "Yellow" || trafficColor == "y" || trafficColor == "Y") {
//          color_mean = "Ready To Move"
//      }  else if (trafficColor == "green" || trafficColor == "Green" || trafficColor == "g" || trafficColor == "G") {
//          color_mean = " Move Now "
//      }  else{
//          color_mean = " Please Enter Valid Color "
//      } ;
    
//      document.querySelector("#traffic").innerHTML = color_mean ;
    
    
    
//      let cFuel = prompt(" Enter Your Current Fuel In Liter "); 
//      let fAlert = "" ;
    
//      if ( cFuel < 0.25) {
//          fAlert = " Please refill the fuel in your car "; 
//      } else {
//          fAlert = " You have enough fuel "; 
//      } ;
    
//      document.querySelector("#fAlert").innerHTML = fAlert ;
// }


// // Question 2
// function qTwo(){
//     let a = 2, b = 1;
//     let result = --a - --b + ++b + b--;
//     document.write(`a is ${a}<br>b is ${b}<br>The result is ${result}<br><br>
//     Explanation : <br>
//     --a:<br>Pre-decrement, it decreases the value of a before the output<br><br>
//     --a - --b:<br>Pre-decrement of value : a subtracts the pre-decrement of value : b<br><br>
//     --a - --b + ++b:<br>Pre-decrement of a subtracts the pre-decrement of b adds a pre-increment of b<br><br>
//     --a - --b + ++b + b--:<br>Pre-decrement of a subtracts pre-decrement of b adds pre-increment of b adds post-decrement of b<br> 
//     <br><br><a href="./chapter9.html"><button>Back</button></a>`);
// }


// // Question 3
// function qThree(){
//     let name = prompt(`Enter your name`);
//     alert(`
//     Greetings, ${name}. 
//     Welcome to my JS Assignments.`);
// }


// // Question 5
function qFive(){
    var a = 4;
    if (++a === 5){
        alert("given condition for variable a is true");
        }
    //b.
    var b = 82;
    if (b++ === 83){
        alert("given condition for variable b is true");
        }
    //c.
    var c = 12;
    if (c++ === 13){
        alert("condition 1 is true");
        }
    if (c === 13){
        alert("condition 2 is true");
        }
    if (++c < 14){
        alert("condition 3 is true");
        }
    if(c === 14){
        alert("condition 4 is true");
        }
    //d.
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
        alert("The cost equals");
        }
    //e.
    if (true){
        alert("True");
        }
    if (false){
    alert("False");
    }
    //f.
    if("car" < "cat"){
        alert("car is smaller than cat");
        }
    }


// Question 6
function qSix(){
    let sub1 = prompt(`Please enter subject 1 name`);
    let sub1Marks = prompt(`Please enter ${sub1} obtained marks`);
    let sub2 = prompt(`Please enter subject 2 name`);
    let sub2Marks = prompt(`Please enter ${sub2} obtained marks`);
    let sub3 = prompt(`Please enter subject 3 name`);
    let sub3Marks = prompt(`Please enter ${sub3} obtained marks`);

    let sub1MarksTotal = 100;
    let sub2MarksTotal = 100;
    let sub3MarksTotal = 100;

    let sub1MarksPerc = sub1Marks/sub1MarksTotal*100;
    let sub2MarksPerc = sub2Marks/sub2MarksTotal*100;
    let sub3MarksPerc = sub3Marks/sub3MarksTotal*100;

    let totalMarks = sub1MarksTotal+sub2MarksTotal+sub3MarksTotal;
    let totalObtained = (Number(sub1Marks)+(Number(sub2Marks))+(Number(sub3Marks)));
    let finalPerc = totalObtained/totalMarks*100; nfinalPerc = finalPerc.toFixed(2); nfinalPerc = parseFloat(nfinalPerc);


    if (nfinalPerc >= 80) {
        grade = "A-one";
        remarks = "Excellent";
    }
    else if (nfinalPerc >= 70) {
        grade = "A";
        remarks = "Good";
    }
    else if (nfinalPerc >= 60) {
        grade = "B";
        remarks = "You need to improve";
    }
    else if (nfinalPerc > 60) {
        grade = "Fail";
        remarks = "Sorry";
    }
    else {
        grade = "Fail";
        remarks = "Sorry";
    }

    document.write(`
    <table>
<tr>
<th>Subject</th>
<th>Total Marks</th>
<th>Obtained Marks</th>
<th>Percentage</th>
<th>Grade</th>
<th>Remarks</th>


</tr>
<tr>
<td>${sub1}</td>
<td>${sub1MarksTotal}</td>
<td>${sub1Marks}</td>
<td>${sub1MarksPerc}%</td>

</tr>
<tr>
<td>${sub2}</td>
<td>${sub2MarksTotal}</td>
<td>${sub2Marks}</td>
<td>${sub2MarksPerc}%</td>

</tr>
<tr>
<td>${sub3}</td>
<td>${sub3MarksTotal}</td>
<td>${sub3Marks}</td>
<td>${sub3MarksPerc}%</td>

</tr>

<tr>
<td></td>
<td>-----</td>
<td>-----</td>
<td>-----</td>

</tr>
<tr>
<td></td>
<td>${totalMarks}</td>
<td>${totalObtained}</td>
<td>${nfinalPerc}%</td>
<td>${grade}</td>
<td>${remarks}</td>

</tr>
</table>
<br><br><a href="../index.html"><button>Back</button></a>`);

}

// Question 7
function qSeven(){
    // generating a random integer from 1 to 10
    const random = Math.floor(Math.random() * 10) + 1;

    // take input from the user
    let number = parseInt(prompt('Guess a number from 1 to 10: '));

    // // take the input until the guess is correct
    // while(number !== random) {
    //     number = parseInt(prompt('Guess a number from 1 to 10: '));
    // }

    // check if the guess is correct
    if(number == random) {
        document.write('Bingo! Correct answer<br><br><a href="../index.html"><button>Back</button></a>');
    }
    // check if the guess is greater than the answer
    else if(number > random) {
        document.write('Try a smaller number<br><br><a href="../index.html"><button>Back</button></a>');
    }   
    else if(number < random) {
        document.write('Try a greater number<br><br><a href="../index.html"><button>Back</button></a>');
    }
}



// Question 8
function qEight(){
    let userInput = prompt(`Please enter a number`);
    if (userInput % 3 === 0) {
        alert(`${userInput} is divisible by 3`);
    }
    else {
        alert(`${userInput} is not divisible by 3`);
    }
}

// Question 9
function qNine(){
    let userInput = prompt(`Please enter a number`);
    if (userInput % 2 === 0) {
        alert(`${userInput} is even`);
    }
    else {
        alert(`${userInput} is odd`);
    }
}

// Question 10
// Temperature input in celcius
function qTen(){
    let temp = prompt(`Please enter temperature in celcius`);
    if (temp > 40) {
        alert(`It is too hot outside.`);
    }
    else if (temp > 30) {
        alert(`The Weather today is Normal.`);
    }
    else if (temp > 20) {
        alert(`Today’s Weather is cool.`);
    }
    else if (temp > 10) {
        alert(`OMG! Today’s weather is so Cool.`);
    }
    else {
        alert(`It is freezing outside.`);
    }
}

// Question 11
// Creating a calculator using conditionals
function qEleven(){
    let num1 = parseInt(prompt(`Enter first number`));
    let num2 = parseInt(prompt(`Enter second number`));
    let operator = prompt(`Enter operator (+, -, *, /)`);
    if (operator === "+") {
        alert(`${num1} + ${num2} = ${num1+num2}`);
    }
    else if (operator === "-") {
        alert(`${num1} - ${num2} = ${num1-num2}`);
    }
    else if (operator === "*") {
        alert(`${num1} * ${num2} = ${num1*num2}`);
    }
    else if (operator === "/") {
        alert(`${num1} / ${num2} = ${num1/num2}`);
    }
    else if (operator === "%") {
        alert(`${num1} % ${num2} = ${num1%num2}`);
    }
    else {
        alert(`Invalid operator`);
    }
}