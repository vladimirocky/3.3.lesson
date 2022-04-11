/**
 * ДОМАШНЕЕ ЗАДАНИЕ
 * Будем использовать setTimeout для имитации долгих вычислений
 *
 * В исходном коде некоторый "костяк" который нужно дописать ученику чтобы примеры заработали
 *
 * Предлагается взять какой-нибудь объект с которым надо будет работать
 * А потом имитировать шаги:
 * 1. Начало работы программы
 * 2. Получение данных (занимает како-то время)
 * 3. Обработка данны (занимет некоторе время)
 * 4. Отправка данных обратно (занимет некоторе время)
 */

// какой-то объект который будем получать и менять асинхронно
const data = {
    name: "Some name",
    modifyStatus: false,
    numVal: 0
}

console.log("Start working..");
console.log(data);

/**
 * Тут попытка через setTimeout имитировать
 * 1. Получить данные
 * 2. Изменить данные
 */
console.log("Start processing data..");

setTimeout(() => {
    // 1. modifyStatus переключить на true
    // 2. изменить поле name
    // 3. вывод data
    /**
     * Ваш код тут
     */
    console.log("End processing data!")
}, 2000);

console.log("Continue work main program..");

/**
 *
 * Запрос и получение данных
 * Обработка
 * Отправка
 *
 */
const promise = new Promise(function (resolve,reject) {
    console.log('Request data...');
    setTimeout(() => {
        resolve(data);
    },8000)
})

promise.then(respData => {
        console.log('Response ...');
        console.log(respData);
        return respData;
    }
).then( newData => {
    console.log('Start modify data...');
    setTimeout( () => {
        newData.modifyStatus = true;
        newData.name = 'New name';
        console.log('Stop modify data');
        console.log(newData);
    },8000)
}).catch(err => console.log("Error",err))
    .finally( () => console.log("Finally!"))

/**
 * Чтобы продемонстрировать генератор
 * Создать генератор который выдает последовательность из случайных четных чисел
 *
 */

function* random(limit) {
    let randomOddNumber = () => {
         const result = Math.floor(Math.random() * limit);
         return result % 2 === 0 ? result : randomOddNumber()
    }
    // в бесконечном цикле возвращать реультат функции randomOddNumber в yield
    /**
     * Ваш код тут
     */
}
const randomizer = random(100)
console.log(randomizer.next().value)
console.log(randomizer.next().value)
console.log(randomizer.next().value)


/**
 * Работа async/ await
 * Создать асинхронную функцию которая возвращает массив случайных чисел
 * и получить эти данные в другой не асинхронной функции
 * дождавшись выполнения асинхронной
 *
 */
async function generateArray() {
    const arr = [53,342,3,235,63,56,546,457]
    // написать промис-заглушку после выполнения которого выполниться следующая строка кода
    // await new Promise ...
    /**
     * Ваш код тут
     */
    return arr //  результат не вернется пока не выполнится промис
}

function f() {
    // вызвать асинхронную функцию, и отобразить ее результат
    /**
     * Ваш код тут
     */
}

f();
