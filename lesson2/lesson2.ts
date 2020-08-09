// @ts-ignore
console.log('lesson2');

////////// The helpful links about arrays
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://learn.javascript.ru/array
// https://learn.javascript.ru/array-methods
// https://metanit.com/web/javascript/5.3.php


// Task 01
// Создать массив. Получить последний элемент массива.
// 1. Без удаления этого элемента из массива.
// 2. С удалением этого элемента из массива
// Выведите массивы в консоль

let testArr:Array<number> = [1, 2, 3];
// 1
// console.log(testArr[testArr.length - 1]);
//2
// console.log(testArr.pop());
// console.log(testArr);


// Task 02
// Добавить элемент в конец массива из Task 01.
// 1. Модифицировать текущий массив
// 2. Создать новый массив
// Выведите массивы в консоль

//1
testArr[testArr.length] = 4;
testArr.push(5);
testArr = [...testArr, 6];

//2
let testArr2 = [...testArr, 7];
let testArr3 = testArr2.concat(8);

// Task 03
// Вставить новый элемент под индексом 3 в массив из Task 01.
// 1. Модифицировать текущий массив
// 2. Создать новый массив
// Выведите массивы в консоль

testArr.splice(3, 0, 9);
let testArr4 = testArr.slice(0);
testArr4.splice(3, 0, 10);

// Task 04
//  Обойти элементы массива из Task 01 и вывести их в консоль.

//testArr4.forEach( item => console.log(item));
// for (let i = 0; i < testArr4.length; i++) {
//     console.log(testArr4[i]);
// }
//
// for (let item of testArr4) {
//     console.log(item);
// }

// Task 05
//  Создать массив чисел в диапазоне от 0 до 100.
//  Подсчитать и вывети сумму тех элементов, которые больше 50.

// let arr5 = [];
// for (let i = 0; i <= 100; i++) {
//     arr5.push(i);
// }

// let arr5 = new Array(100);
//
// arr5.forEach((item, index, arr) => {
//     item = index;
//     arr[index] = item;
// })

let arr5 = Array.from(Array(101).keys());

let sum = 0;
// arr5.forEach(item => {
//     if (item >= 50) {
//         sum += item;
//     }
// });
arr5.forEach(item => sum = ( item >= 50 ) ? sum + item : sum);

// Task 06
// На основе массива строк создать строку –
// объдинить все элементы массива, используя определенный разделитель.
const arrayOfString: Array<String> = ['I', 'love', 'React', 'but', 'I', 'hate', 'JS'];

// let str = arrayOfString.join('-');
// console.log(str);
// console.log(str.split('-'));

// Task 07
//  Создать массив чисел от 1 до 20 в случайном порядке.
//  Отcортировать массив по возрастанию. Вывести его в консоль.
//  Получить массив, отсортрованный в обратном порядке, и вывести его в консоль.

let arr6 = [];
for (let i = 0; i < 20; i++) {
    arr6.push(Math.floor(Math.random() * 20) + 1);
}
// 1
//let sortedArray = arr6.sort((a,b) => a - b);
// 2
let sortedArray = arr6.sort((a,b) => b - a);

// Task 08
//  Создать массив [3, 0, -1, 12, -2, -4, 0, 7, 2]
//  На его основе создать новый массив [-1, -2, -4, -5, -7, 0, 0, 3, 12, 7, 2, 4, 8].
//  первая часть - отрицательные числа в том же порядке что и в оригинальном массиве
//  вторая часть - нули
//  третья часть - положительные числа в том же порядке что и в оригинальном массиве.
const arrayOfRandomNumbers: Array<Number> = [3, 0, -1, 12, -2, -4, 0, 7, 2, -5, 4, 8, -7];

const negativeNumbers: Array<Number> = []
const zero: Array<Number> = []
const possitiveNumbers: Array<Number> = []

for (let i = 0; i < arrayOfRandomNumbers.length; i++) {
    if (arrayOfRandomNumbers[i] < 0) {
        negativeNumbers.push(arrayOfRandomNumbers[i]);
        continue;
    }
    if (arrayOfRandomNumbers[i] === 0) {
        zero.push(arrayOfRandomNumbers[i]);
        continue;
    }
    if (arrayOfRandomNumbers[i] > 0) {
        possitiveNumbers.push(arrayOfRandomNumbers[i]);
    }
}
// const newArrayyWithAllNumbers = negativeNumbers.concat(zero, possitiveNumbers)
// console.log(newArrayyWithAllNumbers)

// const negativeNumbers: Array<Number> = arrayOfRandomNumbers.filter(item => item < 0);
// const zero: Array<Number> = arrayOfRandomNumbers.filter(item => item === 0);
// const possitiveNumbers:Array<Number> = arrayOfRandomNumbers.filter(item => item > 0);

// const newArrayyWithAllNumbers = negativeNumbers.concat(zero, possitiveNumbers)
// console.log(newArrayyWithAllNumbers)
// console.log([...negativeNumbers, ...zero, ...possitiveNumbers]);


// Task 09
//  На основе массива из Task 08 получить:
//  1. Массив отрецательных чисел. // отсортированный
//  2. Массив положительных чисел. // отсортированный
//  3. Массив чисел от -1 до 5 включительно. // отсортированный
//  4. Массив строковых представлений чисел.
//  5. Массив четных чисел.
//  6. Найти и вернуть цифру 4.
//  7. Найти цифру которую введет пользователь и умножить ее на 3.
//  Если такой цифры нет в массиве то вывести предупреждение.

// 1
// negativeNumbers.sort((a,b) => a - b);

//3
let arr7 = [...arrayOfRandomNumbers].filter(item => item >= -1 && item <= 5).sort();
//4
const stringArr = arrayOfRandomNumbers.map(item => item.toString());
// const stringArr = arrayOfRandomNumbers.map(item => item + '');
// const stringArr = arrayOfRandomNumbers.map(item => new String(item));

//5
let arr8 = [...arrayOfRandomNumbers].filter((item: any) => item % 2 === 0);
// console.log(arr8);

//6
// console.log(arrayOfRandomNumbers.find(item => item === 4));

//7
function f(arg: number) {
    let value: any = arrayOfRandomNumbers.find(item => item === arg);
    if (value) {
        console.log(value * 3);
    } else {
        console.log('Error');
    }
}
f(3);


// let val = prompt("Введите число ")
// let numV = Number(val)
// function pom (value: number) {
//     const fn = arrayOfRandomNumbers.find((item)=>{
//         if (item === value){
//             console.log(value * 3)
//             return  value * 3
//         }
//     })
//     if (fn === undefined){
//         console.log("Нет такого числа в массиве!")
//     }
//     // console.log(fn)
// }
// pom(numV)



// Task 10
//  1. Создайте массив styles с элементами "Jazz", "Blues".
//  2. Добавьте в конец значение "Rock-n-Roll".
//  3. Замените предпоследнее значение с конца на "Classics".
//  4. Удалите первый элемент из массива и выведите его в консоль.
//  5. Добавьте в начало два элемента со значениями "Rap" и "Reggae".
//  6. Выведите массив в консоль.

const styles: Array<String> = ["Jazz", "Blues"];

// Task 11
//  Подсчитать в строке "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh"
//  отдельно количество букв r, k, t и вывести в консоль.
const loremString: String = "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh";

// Task 12
//  Получить из строки 'a big brown fox jumps over the lazy dog' массив слов,
//  который содержит элементы, длина которых не больше 3 символа.
//  Вывести массив в консоль.
const exampleString: String = 'a big brown fox jumps over the lazy dog';


// Task 13
// Дан массив школьных классов.
// Необходимо мутабельно перевести учеников из 5го класса в 6ой.

type PupilType = {
    name: String;
    age: Number;
    grade: Number;
    isExcellent: Boolean;
};
type ClassType = Array<PupilType>;

const classes: Array<ClassType> = [
    [
        {name: 'Peter', age: 10, grade: 5, isExcellent: false},
        {name: 'Kate', age: 11, grade: 5, isExcellent: true},
        {name: 'Olga', age: 9, grade: 5, isExcellent: false},
        {name: 'Greg', age: 11, grade: 5, isExcellent: false},
    ],
    [
        {name: 'Kevin', age: 15, grade: 9, isExcellent: false},
        {name: 'Patrick', age: 14, grade: 9, isExcellent: false},
        {name: 'Ann', age: 15, grade: 9, isExcellent: true},
        {name: 'Julia', age: 14, grade: 9, isExcellent: true},
    ],
    [
        {name: 'John', age: 13, grade: 7, isExcellent: true},
        {name: 'Sofia', age: 12, grade: 5, isExcellent: false},
        {name: 'Maria', age: 14, grade: 5, isExcellent: true},
        {name: 'Joseph', age: 13, grade: 5, isExcellent: false},
    ],
];

// Task 14
// На основе массива из Task 12 необходимо собрать массив отличников.

// const bestStudent: Array<PupilType> = []
// classes.map(classes => classes.map(student => student.isExcellent ? bestStudent.push(student) : ''))
// console.log(classes.map(classes => classes.map(student => student.isExcellent ? bestStudent.push(student) : '')));


// Task 15
// На основе массива из Task 12 необходимо собрать массив обычных учеников старше 10 лет
// и младше 15.