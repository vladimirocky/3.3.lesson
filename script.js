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

person2.introduceMyself();
let func = person2.introduceMyself;
/**
 * Ваш код тут
 * func
 * person1
 */
func.call(person1)
func.apply(person1)
let bindCompare = func.bind(person1);
bindCompare()



class Bartender extends Person {
    introduceMyself() {
        /**
         * -----------------------------------------------------
         * надо метод реализовать
         * -----------------------------------------------------
         */
    }
}
let bartender = new Bartender('Alex',27,'Бармен');




class Painter extends Person {
introduceMyself(){

}
}
let painter = new Painter('Sergey', 39, 'Художник')
/**
 * -----------------------------------------------------
 * скопировать нужно метод класса Bartender
 * -----------------------------------------------------
 */
let func1 = painter.introduceMyself;

/**
 * -----------------------------------------------------
 * дял painter реализовывать как раз не требуется метод
 * -----------------------------------------------------
 */
painter.introduceMyself = function () {
    console.log(
        `Hello! Me name is ${this.name}.
        I'm ${this.age} years old
        I'm a ${this.profession}`
    ); 
}
painter.introduceMyself();
/**
 * -----------------------------------------------------
 * где call? apply? bind?
 * -----------------------------------------------------
 */

// const personal = [new Person(),new Bartender()];
// console.log(personal);
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
    name: 'Vasya',
    age: 24,
    password: 'root123',
    bithdate: '10.10.1990',
    /**
     * допишите сеттер
     * новое значение свойства name
     */
    
    set changeName(newName) {
        // ваш код тут
       
        this.name = newName
    },
    get changeName(){
        
     return  `Привет я ${this.name}.
        Мне ${this.age} года`
    }
 
    /**
     * реализуйте геттер
     * который выведет строку вида
     * "Привет я ..name.. Мне ..age.. лет! "
     * тоесть строка склееная из нескольких значений свойств объекта
     */
}
User.name = 'Roma'
console.log(User.changeName);

//1
Object.defineProperty(User,'name',{
    configurable: false,
});
console.log();
//2
//Изменить и удалить можно было если бы было значение True, но так как
//мы сменили значение на False, то изменить не получиться.
//3
Object.defineProperty(User, 'password',{
    writable: false,
});
//4 Tак как установив значение writable: false для password у нас оно только для чтения
//но не более того.
//5
Object.defineProperty(User, 'password',{
    enumerable: false,
});
Object.defineProperty(User, 'bithdate',{
    enumerable: false,
});
let password = Object.getOwnPropertyDescriptor(User, 'password');
console.log(password);
let bithdate = Object.getOwnPropertyDescriptor(User, 'bithdate');
console.log(bithdate);
//6
// Если бы было знаечение True для enumerable, то можно бы было обойти через цикл,
// но так как мы установили значение False для passwor и birthdate
//то через цикл этого сделать нельзя!!!

/**
 * 1. Для свойства name
 * флаг configurable установите false
 * 
 *
 * 2. Попробуйте теперь изменить значение name
 * (используйте ваш сеттер)
 * Изменить и удалить можно было если бы было значение True, но так как
 * мы сменили 
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
    console.log(Object.getOwnPropertyDescriptor(User,key));
}