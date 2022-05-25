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
func.bind(person1);

/**
 * Ваш код тут
 * func
 * person1
 */


class Bartender extends Person {
}
class Painter extends Person {

}
const person3 = new Bartender('Tanya', 22);
const person4 = new Painter('Semen', 32);
   
    person3.introduceMyself = function () {
        console.log(
            `I'm a ${this.profession}`
        );
    }

    let func1 = Bartender.introduceMyself;
    func.call(person3);
    func.call(person4);



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
const User1 = {
    name: 'Vasya',
    age: 24,
    password: 'root123',
    bithdate: '10.10.1990',
    /**
     * допишите сеттер
     * новое значение свойства name
     */
    set changeName(newName) {
        this.name = newName
        },
        // ваш код тут
    get helloUser() {
        return "Привет я " + this.name + ". Мне " + this.age + " лет!"
    }
}
console.log(User1.helloUser)
    

    /**
     * реализуйте геттер
     * который выведет строку вида
     * "Привет я ..name.. Мне ..age.. лет! "
     * тоесть строка склееная из нескольких значений свойств объекта
     */

    Object.defineProperty(User1,'name',{
        configurable: false
    })

    Object.defineProperty(User1,'password',{
        writable: false
    })
    
    Object.defineProperties(User1, {
        password:{enuramble:false},
        bithdate:{enuramble:false}
    })

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
for (let key in User1) {
    console.log(Object.getOwnPropertyDescriptor(User1, key));
}

