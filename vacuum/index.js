// const reader = new FileReader();


// reader.readAsText('./')

// console.log(test)

// let text = '';

// function previewFile() {
//     const content = document.querySelector('.content');
//     const [file] = document.querySelector('input[type=file]').files;
//     const reader = new FileReader();
  
//     reader.addEventListener("load", () => {
//         // this will then display a text file
//         text = reader.result;


//         const textArray = text.split('\n')


//         const T = textArray[0];



//         for (let i = 1; i < textArray.length; i += 2) {
//             const N = textArray[i];
//             const string = textArray[i + 1];
//             const stringArr = string.split(' ');
            
//             for (let j = 0; j < stringArr.length; j++) {
//                 let sum = 0;
//                 for (let k = j; k < stringArr.length; k++) {
//                     sum += Number(stringArr[k]);
//                     if (sum === 0) {
//                         console.log('yes');
//                         break;
//                     }
//                 }
//                 if (sum != 0) {
//                     console.log('no')
//                 }
//             }
//         }

//     }, false);
  
//     if (file) {
//         reader.readAsText(file);
//     }


// }

let fs = require('fs');
let fileContent = fs.readFileSync('file.txt', 'utf8');
console.log(fileContent);
