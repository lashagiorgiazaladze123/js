// let age = 13;
// if(age >= 18){
//     console.log ('you are old enough to enter this site');
// }
// else{
//     console.log("you must be 18+ to enter this site");
// }
// let time = 9;
// if(time <12){
//     console.log("good morning!");
// }
// else{
//     console.log('good afternoon!');
// }
// let isStudent = true;
// if(isStudent){
//     console.log ('you are student');
// }
// else{
//     console.log('you are NOT a student');
// }
// let age = 19;
// let hasLicense = true;
// if(age >= 18){
//     console.log('you are old enough to drive');

//     if(hasLicense){
//         console.log('you have you license');
//     }
//     else{
//         console.log('you do Not have license yet');
//     }
// }

// else{
//     console.log('you must be 18 years old to drive');
// }
const myText = document.getElementById('myText');
const mySubmit = document.getElementById('mySubmit');
const result = document.getElementById('resultElement');
let age;


mySubmit.onclick = function() {
    age = myText.value;
age = Number(age);
    if(age >= 100){
         resultElement.textContent = 'you are too old to enter site';
    }
    else if(age == 0){
        
        resultElement.textContent = 'you cant enter site you were just born';
    }
    else if(age >= 18){
        
        resultElement.textContent = 'you are old enough to enter this site';
    
    }
    else if(age < 0){
              resultElement.textContent = 'your age cant be below 0';
    }
    
    else{

        resultElement.textContent = 'you must be 18 to enter site';
    }
}


