/* task 1
Задайте в коде переменную n с числовым значением.
С помощью логического И в условии проверьте, 
находится ли переменная n в диапазоне чисел от 0 до 100 включительно.





    let n = prompt('Введите число от 0 до 100');

    if (n >= 0 && n <= 100) {
        alert('Correct');
    }   else {
        alert('incorect')
    }*/




/*task 2
Дан объект с именами и заработными платами:
const engineers = {
Den: 1000,
Matt: 5000,
Steve: 2000
}
Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:
Заработная плата ххх составляет ххх рублей.
ВНИМАНИЕ. Ваша программа должна работать для любого количества имён и зарплат!




    const engineers = {
        Den: 1000,
        Maat: 5000,
        Steve: 2000
    }

    for (let inside in engineers) {
        console.log('Заработная плата ' + inside + ' составляет ' + engineers[inside] + ' рублей')
    }*/




/*task3
Создать массив из 5 элементов.
Используя цикл for, вывести каждый второй элемент массива в консоль.




    massiv = ['Zhuk', 'Marat', 'Andreevich', 'USA', 'Connecticut']

    for (let f = 0; f < massiv.length; f = f + 2) {
        console.log(massiv[f])
    }*/
        
      
    


/*task 4   
Есть массив произвольных чисел:
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:
Индексу 0 соответствует число 42
Индексу 1 соответствует число 65
и т.д.




    numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
    for (let g = 0; g < numbers.length; g++) {
        console.log('Индекс ' + g + ' равен ' + numbers[g])
    }*/




/*task 5
Дан массив объектов, например:
let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
Добавить в каждый объект дополнительное поле usersAnswer со значением null.
Решение должно работать для массива любой длины.






let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0,
}];


questions[0].usersAnswer = null
questions[1].usersAnswer = null*/




/*task6
Есть массив произвольных чисел:
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]




let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

number 1
Вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком




 1.1

for (let items of numbers) {
    console.log(items)
}


 1.2

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}





number 2
Посчитать и вывести в консоль сумму элементов в массиве.
Подсказка: в задачах такого типа нужно заранее предусмотреть переменную (например, sum) 
и записать в нее начальное значение (в случае с суммой - ноль). Затем уже описать цикл, 
в котором эта сумма будет считаться (в каждой итерации цикла к ней будет прибавляться следующий элемент массива).







let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
}
console.log(sum)




number 3
Посчитать и вывести в консоль сумму только четных чисел в массиве.



let sum = 0
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        sum = sum + numbers[i]
    } else {
        sum != sum + numbers[i]
    }
}
console.log(sum)





number 4
Найти и вывести в консоль максимальное число массива.
Подсказка: как и в случае с суммой, здесь сначала нужно объявить переменную (например, max), 
записать в нее первый элемент массива, а затем уже в цикле искать максимальное значение.





let max = 42
for (let i = 0; i < numbers.length; i++) {
    if (max < numbers[i]) {
        max = numbers[i]
    }
}
console.log(max)





number 5
Определить и вывести в консоль индекс максимального числа массива 
(или индексы, если число встречается более одного раза). 
Само максимальное число мы уже нашли в прошлой части задачи, повторно его искать не нужно.



let indexnumber = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 70) {
        indexnumber = numbers[numbers.length]
    }  else {
        indexnumber != numbers[numbers.length]
    }
}
console.log(indexnumber)*/




/*task 7
Определить массив let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
Создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.
Подсказка. Изначально нужно объявить пустой массив-хранилище (например, let newArr = []). 
Затем пройтись в цикле по массиву arr, и в каждой итерации, если элемент положительный, добавлять его в массив newArr.



let newArr = []
let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        newArr.push(arr[i])
    }
}
console.log(newArr)*/


/*task 8
Определить массив, например let nums = [5, 4, 3, 8, 0] и переменную let limit = 5;
Создать новый пустой массив. В цикле наполнить его элементами nums, 
но в новом должны содержаться элементы, 
больше и равные (>=) значению переменной limit.


let nums = [5, 4, 3, 8, 0]
let limit = 5
let newNums = []

for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= limit) {
        newNums.push(nums[i])
    }
}
console.log(newNums)*/



/*task 9

Существует массив объектов, описывающих пользователей, например:
const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, 
{name: 'Alex', age: 18}, {name: 'Valery', age: 8}]
Пройти в цикле по массиву и вывести имена всех пользователей, возраст которых больше 15.





const users = [{name: 'Vasya', age: 23}, 
               {name: 'Olya', age: 12}, 
               {name: 'Anna', age: 22}, 
               {name: 'Alex', age: 18}, 
               {name: 'Valery', age: 8}]




for (let i = 0; i < users.length; i++) {
    if (users[i].age > 15) {
        console.log(users[i].name)
    }
}*/




//task 10

let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
let vegetablesInf = [];

//number 1

for (let i = 0; i < vegetables.length; i++) {
    vegetablesInf.push({word: vegetables[i], length: vegetables[i].length}) 
}
console.log(vegetablesInf)

//number 2
//Пройтись по полученному массиву объектов и вывести в консоль строки вида
//"слово - длина_слова", например "картошка - 8"

for (let i = 0; i < vegetablesInf.length; i++) {
    console.log(vegetablesInf[i].word + '-' + vegetablesInf[i].length)
}



