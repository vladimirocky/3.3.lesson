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
/**
 * Ваш код тут
 * func
 * person1
 */

func.call(person1);
func.apply(person1);
const func2 = func.bind(person1);
func2();

/**
 * ======== 2 ==========
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

 class Bartender extends Person{
    introduceMyself(){
        console.log(
            `Hello! Me name is ${this.name}.
            I'm ${this.age} years old
            I'm a ${this.profession}`
        );
    }
  }
  
  class Painter extends Person{
  
  }
  let user1 = new Bartender("Иван", 23, "bartender");
  let user2 = new Painter("неИван", 35, "painter");
  
  func = user1.introduceMyself;
  func.call(user2);
  

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
        this.name = newName;
    },
    /**
     * реализуйте геттер
     * который выведет строку вида
     * "Привет я ..name.. Мне ..age.. лет! "
     * тоесть строка склееная из нескольких значений свойств объекта
     */
    get hiStr (){
console.log(`Привет, я ${this.name} Мне ${this.age} лет! `)
    }
}

console.log(User.hiStr)
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

Object.defineProperty(User,'name', {configurable: false});

User.changeName ='Ololosh';
console.log(User.name);

Object.defineProperty(User,'password', {writable: false});
// User.password = 1111;
// TypeError: Cannot assign to read only property 'password' of object '#<Object>'
//т к установлен запрет на изменение

Object.defineProperties(User,
   { 'password':{enumerable: false},
    'bithdate': {enumerable: false}});

for (let key in User) {
    console.log(Object.getOwnPropertyDescriptor(User, key));
}
//'password  и 'bithdate' не отображаются при перечислении, т к установлен enumerable: false