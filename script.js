// КОНТЕКСТ
/**
 * ======== 1 ==========
 * У нас есть класс Person и два его экземпляра
 * для обного из них person2 определени метод introduceMyself
 * мы скопировали этот метод в функцию func
 * примените функцию func так, чтобы медот отработал в контексте person1
 * попробуйте разные способы:
 * 1. call
 * 2. apply
 * 3. bind
 */

class Person {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }
}

const person1 = new Person('Petya', 23, 'bartender');
const person2 = new Person('Lena', 35, 'painter');

person2.introduceMyself = function () {
    console.log(
        `Hello! Me name is ${this.name}.
        I'm ${this.age} years old
        I'm a ${this.profession}`
    );
}

//person2.introduceMyself();
let func = person2.introduceMyself;
func.call(person1);
func.apply(person1);
let fBind = func.bind(person1);
fBind();
/**
 * Ваш код тут
 * func
 * person1
 */
 class Bartender extends Person{
    /**
     * -------------------------------------------------------------------------
     * Тут нужено добавить метод introduceMyself
     * -------------------------------------------------------------------------
     */
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
        this.profession = 'Barthender';
    }

    introduceMyself() {
        console.log(
            `Hello! Me name is ${this.name}.
            I'm ${this.age} years old
            I'm a ${this.profession}`
        );
    }
};

class Painter extends Person {
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
        this.profession = 'Painter';
    }
}   

const personBartender = new Bartender('Timur',19,'taxi');
const personPainter = new Painter('Vitya', 32, 'miner');
personBartender.introduceMyself = func.bind(personBartender);
personBartender.introduceMyself();
let func2 = func.bind(personPainter);
func2();
/**
 * ======== 2 ==========
 * ВАШ КОД ТУТ
 *
 * Потчи тоже самое что и в 1 задании
 *
 * Наследуйте от класса Person два других класса:
 * 1. Bartender (для этого класса реализуйте метод introduceMyself как в предыдущем задании)
 * 2. Painter
 *
 * Создайте экземпляры дочерних классов
 * Скопируйте метод introduceMyself класса Bartender в функцию func
 * вызовете функцию func привязав к контексту экземплра класса Painter
 */

// ФЛАГИ ДЕСКРИПТОРОВ СВОЙСТВ, ГЕТТЕРЫ, СЕТТЕРЫ
const User = {
    name: 'Timur',
    age: 19,
    password: '12345ttt',
    bithdate: '19.03.2003',
    /**
     * допишите сеттер
     * новое значение свойства name
     */

    set changeName(newName) {
        // ваш код тут
        this.name = newName;

    },
    get changeName(){
        return 'Привет я ' + this.name + " мне " + this.age
    }

};

User.changeName = ' Alexus ';

Object.defineProperty(User,'name',{
    configurable : false
  })

let descrip = Object.getOwnPropertyDescriptor(User,'name');
console.log(descrip);

Object.defineProperty(User,'password',{
    writable:false
})

let descripPassword = Object.getOwnPropertyDescriptor(User,'password');

console.log(descripPassword);

User.password = "new_pass";

console.log(User);

Object.defineProperties(User,{
    password:{ enumerable:false},
    bithdate:{enumerable:false}
   });

console.log("А теперь видим что циклом можно обойти только enumerable");
/**
 * 1. Для свойства name
 * флаг configurable установите false
 *
 * 2. Попробуйте теперь изменить значение name
 * (используйте ваш сеттер)
 *
 * 3. Для свойства password
 * флаг writable установите в false
 *
 * 4. Попробуйте теперь просмотреть значение password
 * Что в итоге произошло? Почему?
 *
 * 5. Для свойств password и bithdate
 * флаг enumerable установите false
 *
 * 6. В цикле выведете все свойства
 * Что получилось? Почему?
 */
// вывод свойств User
for (let key in User) {
    console.log(Object.getOwnPropertyDescriptor(User, key));
}