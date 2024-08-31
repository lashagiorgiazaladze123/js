// let day = 2;

// switch(day){
//     case 1:
//         console.log('it is Monday')
//         break
//     case 2:
//             console.log('it is Tuesday')
//             break
//     case 3:
//         console.log('it is Wednesday')
//                 break  
//     case 4:
//         console.log('it is Thursday')
//             break
//     case 5:                   
//         console.log('it is Friday')
//             break
//     case 6:                   
//         console.log('it is saturday')
//             break
//     case 7:                   
//         console.log('sunday')
//             break
//     default:
//         console.log('you need to choos day from 1-7')
// }   

let testScore = 90;
let letterGrade;

switch (true) {
    case testScore == 0:
        letterGrade = "You suck at math";
        break;
    default:
        console.log("Score should be between 0 and 100.");
        letterGrade = "Invalid";
        break;
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 50:
        letterGrade = "D";
        break;
    case testScore >= 40:
        letterGrade = "E";
        break;
    case testScore >= 30:
        letterGrade = "F";
        break;
    case testScore < 30:
        letterGrade = "F";
        break;
    case testScore == 0:
        letterGrade = "You suck at math";
        break;   
}
console.log(letterGrade);
