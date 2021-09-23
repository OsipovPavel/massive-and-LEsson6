`use strict`;

// Question 1 Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция возвращает 1, если в первой
// строке больше символов, чем во второй; -1 – если во второй больше символов, чем в первой; или 0 – если строки
// одинаковой длины.

// const compareStrings = (str1, str2) => {
//     if (str1.length>str2.length) return 1
//     else if (str1.length<str2.length) return -1
//     else return 0
// };
// let userString1 = prompt(`Введите символы в первую строку`);
// let userString2 = prompt(`Введите символы во вторую строку`);
// document.getElementById(`task1`).innerHTML = compareStrings(userString1, userString2);

// Question 2 Написать функцию, которая переводит в верхний регистр
// первый символ переданной строки

// const setFirst = (str) => {
//     return str[0].toUpperCase() + str.slice(1);
// } 
// let LowerStr = `покупка презервативов`;
// document.getElementById(`task2`).innerHTML = `<p>Была строка '${LowerStr}', а стала '${setFirst(LowerStr)}'</p>`;

// Question 3 Написать функцию, которая считает количество гласных
// букв в переданной строке. 

// const countVowel = (str) => {
//     let counter = 0;
//     for (let i =0; i<str.length; i++) {
//         if ('аеёиоуыэюя'.includes(str[i].toLowerCase())) counter++;
//     }
//     return counter;
// }
// let string1 = prompt(`Введите строку`);
// document.getElementById(`task3`).innerHTML = `<p>В строке '${string1}' ${countVowel(string1)} гласных букв</p>`;

// Question 4 Написать функцию для проверки спама в переданной
// строке. Функция возвращает true, если строка содержит
// спам. Спамом считать следующие слова: 100% бесплатно,
// увеличение продаж, только сегодня, не удаляйте, ххх.
// Функция должна быть нечувствительна к регистру.

// const isSpam = (str) => {
//     let lowerStr = str.toLowerCase();
//     let spamArray = ['100% бесплатно', 'увеличение продаж', 'только сегодня', 'не удаляйте', 'ххх', 'xxx'];
//     let spamFlag = false;
//     for (let i = 0; i < spamArray.length; i++) {
//         if (lowerStr.includes(spamArray[i])) {
//             spamFlag = true;
//             break;
//         } 
//     }
//     return spamFlag;
// }
// let stringSpam = 'Только сегодня и завтра';
// document.getElementById('task4').innerHTML = `<p>Строка '${stringSpam}' ${isSpam(stringSpam) && 'это спам' || 'это не спам'}</p>`;

// Question 5 Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину. Если длина строки
// больше, чем максимальная, то необходимо отбросить
// лишние символы, добавив вместо них троеточие.
// Например: truncate(“Hello, world!”, 8) должна вернуть
// “Hello...”.
// const truncateString = (str, num) => {
//     return str.length > num ? str.slice(0, num - 3) + '...' : str;
// }
// let stringTr = prompt('Введите строку');
// let truncateNumber;
// do {
//     truncateNumber = +prompt('Сколько символов оставить (не менее 4-х символов)?');
// }
// while (truncateNumber < 4);
// document.getElementById('task5').innerHTML = truncateString(stringTr, truncateNumber);

// Question 6 Написать функцию, которая проверяет, является ли переданная строка палиндромом

// const isPalindrom = (str) => {
//     let reversStr = str.split('').reverse().join('');
//     return reversStr.toLowerCase() === str.toLowerCase();
// }

// let testString = 'кабак';
// document.getElementById('task6').innerHTML = `
// <p>
// Строка '${testString}' ${isPalindrom(testString) && 'является' || 'не является'} палиндромом
// </p>
// `;

// Question 7 Написать функцию, которая считает количество слов в
// предложении.

// const countWords = (str) => {
//     return str.split(' ').length;
// }
// let longString = prompt('Введите строку');
// document.getElementById('task7').innerHTML = `
// <p>
// В строке '${longString}' содержит ${countWords(longString.trim())} слов
// </p>
// `;

// Question 8 Написать функцию, которая возвращает самое длинное
// слово из предложения.

// const findLongWords = (str) => {
//         let longWord =  str.split('').reduce((a,b)=> (b.length > a.length)? b : a);
//         return longWord;
//     }