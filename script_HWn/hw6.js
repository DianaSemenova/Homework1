// 1-Дан массив: [1, 5, 4, 10, 0, 3]
// Необходимо создать цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10.

const numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] === 10) {
        break;
    }
}

// 2-Дан массив: [1, 5, 4, 10, 0, 3].
// Найдите позицию числа 4 в этом массиве.

console.log(numbers.indexOf(4));

// 3-Дан массив чисел: [1, 3, 5, 10, 20].
// С помощью метода join
// выведите элементы массива через пробел (пустую строку ' ').

const arrJoin = [1, 3, 5, 10, 20];
console.log(arrJoin.join(' '));

//4-С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]]

const arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i][j] = 1;
    }
}
console.log(arr);

// 5-Дан массив: [1, 1, 1].
// Добавьте в конец массива значения 2, 2, 2.

const arrOrder = [1, 1, 1];
arrOrder.push(2, 2, 2);
console.log(arrOrder);

// 6-Дан массив: [9, 8, 7, 'a', 6, 5].
// С помощью метода sort отсортируйте массив и удалите букву 'a' из данного массива. 
// В результате работы программы вывести массив, состоящий из цифр.

const arrSort = [9, 8, 7, 'a', 6, 5];
arrSort.sort();
arrSort.pop();
console.log(arrSort);

// 7-Дан массив: [9, 8, 7, 6, 5].
// Пользователь с клавиатуры вводит число от 1 до 10 (использовать prompt()). 
// Необходимо проверить, содержится ли введенное пользователем число в данном массиве.

const arrNumbers = [9, 8, 7, 6, 5];
let userNumber = Number(prompt('Введите число от 1 до 10'));
console.log(arrNumbers.includes(userNumber));


// 8-Дана строка: 'abcdef'
// Необходимо, чтобы программа вывела в консоль 'fedcba'

let a = 'abcdef';
a = a.split('');
//console.log(a);
a = a.reverse();
//console.log(a);
a = a.join('');
console.log(a);


// 9-Дан массив: [[1, 2, 3,],[4, 5, 6]].
// Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].

const arrayNumber = [
    [1, 2, 3,],
    [4, 5, 6]
];

for (let arrayNumberIn of arrayNumber) {
    for (let element of arrayNumberIn) {
        console.log(element);
    }
}

// 10-Создайте массив с произвольными числами (диапазон от 1 до 10). Переберите его с помощью цикла  for
// и в каждой итерации выведите в консоль сумму текущего и следующего элементов массива. 
// Следующий элемент массива можно получить с помощью индекса:  i + 1. 
// Обратите внимание, что у последнего элемента нет следующего.

let arbitraryNumbers = [1, 3, 5, 7, 9];

for (let i = 0; i < arbitraryNumbers.length - 1; i++) {
    let resultSum = arbitraryNumbers[i] + arbitraryNumbers[i + 1];
    console.log(resultSum);
}


//11-Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.

function squareArr(...arbitraryNumbers) {
    return arbitraryNumbers.map(number => number ** 2);
}

console.log(squareArr(...arbitraryNumbers));

//12-Создайте функцию, которая принимает на вход массив строк, а возвращает массив длинны слов.

let getLengthWords = (...words) => {
    return words.map(number => number.length);
}

console.log(getLengthWords('массив', '', 'стр', 'Массив - упорядоченный набор элементов', 'д'));

// 13-Создайте функцию, которая принимает на вход массив целых чисел, 
// а возвращает массив содержащий только отрицательные значения.


let getMinusNumbers = (...arrayNumbers) => {
    return arrayNumbers.filter((el) => el < 0);
}

console.log(getMinusNumbers(1, -1, 2, -2, 3, -3));

