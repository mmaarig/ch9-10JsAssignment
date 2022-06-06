// Question 1 - 4
function qOne(){
    let comment = "" ;
    let city = prompt(" Enter Your City Name ") ;
    if (city === "Karachi") {
        comment =  "Welcome To The City Of Lights"
    } else {
        comment = " Please Enter Karachi "
    } ;
    
    document.querySelector("#city").innerHTML = comment ;
    
    
    
    
    let gendermessege = "" ;
    let gender = prompt ("Please Enter Your Gender") ; 
    
    if (gender === "male" || gender === "Male" || gender === "M" || gender === "m") {
        gendermessege = " Good Morning Sir "
    }
     else if (gender === "female" || gender === "Female" || gender === "F" || gender === "f") {
        gendermessege = " Good Morning Ma'am "
    }
     else {
         gendermessege = " Good Morning "
     }
    
     document.querySelector("#gender").innerHTML = gendermessege ;
    
    
     let trafficColor = prompt("Enter Color Of Traffic Light") ; 
     
     let color_mean = "" ; 
     
        if (trafficColor == "red" || trafficColor == "Red" || trafficColor == "r" || trafficColor == "R") {
         color_mean =  "Must Stop"
     }  else if (trafficColor == "yellow" || trafficColor == "Yellow" || trafficColor == "y" || trafficColor == "Y") {
         color_mean = "Ready To Move"
     }  else if (trafficColor == "green" || trafficColor == "Green" || trafficColor == "g" || trafficColor == "G") {
         color_mean = " Move Now "
     }  else{
         color_mean = " Please Enter Valid Color "
     } ;
    
     document.querySelector("#traffic").innerHTML = color_mean ;
    
    
    
     let cFuel = prompt(" Enter Your Current Fuel In Liter "); 
     let fAlert = "" ;
    
     if ( cFuel < 0.25) {
         fAlert = " Please refill the fuel in your car "; 
     } else {
         fAlert = " You have enough fuel "; 
     } ;
    
     document.querySelector("#fAlert").innerHTML = fAlert ;
}


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


// // Question 4
// function qFour(){
//     let userInput = prompt(`Please enter a Table number`);
//     let ending = prompt(`Please enter Ending number`);

//     if (userInput > 0 && userInput < 9999999) { 
//         document.write(`Table of ${userInput}<br><br>`);
//     for (i = 1; i <= ending; i++) {
//         document.write(`${userInput} x ${i} = ${userInput * i}<br>`);
//     }
//     } else if(ending > 0 && ending < 9999999) {
//         document.write(`Table of ${5}<br><br>`);
//         for (i = 1; i <= ending; i++) {
//         document.write(`${5} x ${i} = ${5 * i}<br>`);
//     }
//     } else {
//         document.write(`Table of ${5}<br><br>`);
//         for (i = 1; i <= 10; i++) {
//         document.write(`${5} x ${i} = ${5 * i}<br>`);
//     }
// }
// document.write(`<br><br><a href="./chapter9.html"><button>Back</button></a>`);
// }


// // Question 5
// function qFive(){
//     let sub1 = prompt(`Please enter subject 1 name`);
//     let sub1Marks = prompt(`Please enter ${sub1} obtained marks`);
//     let sub2 = prompt(`Please enter subject 2 name`);
//     let sub2Marks = prompt(`Please enter ${sub2} obtained marks`);
//     let sub3 = prompt(`Please enter subject 3 name`);
//     let sub3Marks = prompt(`Please enter ${sub3} obtained marks`);

//     let sub1MarksTotal = 100;
//     let sub2MarksTotal = 100;
//     let sub3MarksTotal = 100;

//     let sub1MarksPerc = sub1Marks/sub1MarksTotal*100;
//     let sub2MarksPerc = sub2Marks/sub2MarksTotal*100;
//     let sub3MarksPerc = sub3Marks/sub3MarksTotal*100;

//     let totalMarks = sub1MarksTotal+sub2MarksTotal+sub3MarksTotal;
//     let totalObtained = (Number(sub1Marks)+(Number(sub2Marks))+(Number(sub3Marks)));
//     let finalPerc = totalObtained/totalMarks*100; nfinalPerc = finalPerc.toFixed(2); nfinalPerc = parseFloat(nfinalPerc);

//     document.write(`
//     <table>
// <tr>
// <th>Subject</th>
// <th>Total Marks</th>
// <th>Obtained Marks</th>
// <th>Percentage</th>


// </tr>
// <tr>
// <td>${sub1}</td>
// <td>${sub1MarksTotal}</td>
// <td>${sub1Marks}</td>
// <td>${sub1MarksPerc}%</td>

// </tr>
// <tr>
// <td>${sub2}</td>
// <td>${sub2MarksTotal}</td>
// <td>${sub2Marks}</td>
// <td>${sub2MarksPerc}%</td>

// </tr>
// <tr>
// <td>${sub3}</td>
// <td>${sub3MarksTotal}</td>
// <td>${sub3Marks}</td>
// <td>${sub3MarksPerc}%</td>

// </tr>

// <tr>
// <td></td>
// <td>-----</td>
// <td>-----</td>
// <td>-----</td>

// </tr>
// <tr>
// <td></td>
// <td>${totalMarks}</td>
// <td>${totalObtained}</td>
// <td>${nfinalPerc}%</td>

// </tr>
// </table>
// <br><br><a href="./chapter9.html"><button>Back</button></a>`);

// }