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
};

// person2.introduceMyself();
let func = person2.introduceMyself;
func.call(person1);
func.apply(person1);
let func2 = func.bind(person1);
func2();

//  * ======== 2 ==========
//  * ВАШ КОД ТУТ

//  * Потчи тоже самое что и в 1 задании

//  * Наследуйте от класса Person два других класса:
//  * 1. Bartender (для этого класса реализуйте метод introduceMyself как в предыдущем задании)
class Bartender extends Person {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
    this.profession = 'Barthender';
  }
}
//  * 2. Painter
class Painter extends Person {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
    this.profession = 'Painter';
  }
}
const bart1 = new Bartender('Alex', 26, 'coach');
const paint1 = new Painter('Vadim', 19, 'driver');
bart1.introduceMyself = func.bind(bart1);
bart1.introduceMyself();
let func5 = func.bind(paint1);
func5();

//  * Создайте экземпляры дочерних классов
//  * Скопируйте метод introduceMyself класса Bartender в функцию func
//  * вызовете функцию func привязав к контексту экземплра класса Painter

// ФЛАГИ ДЕСКРИПТОРОВ СВОЙСТВ, ГЕТТЕРЫ, СЕТТЕРЫ
const User = {
  name: 'Vasya',
  age: 24,
  password: 'root123',
  bithdate: '10.10.1990',

  get fullText() {
    return `Hi I'm  ${this.name} Me ${this.age} years!`;
  },
  set changeName(newName) {
    [this.name] = newName.split(' ');
  },
};
User.changeName = 'Vidadi';
console.log(User.name);
console.log(User.fullText);
/**
 * допишите сеттер
 * новое значение свойства name
 */
/**
 * реализуйте геттер
 * который выведет строку вида
 * "Привет я ..name.. Мне ..age.. лет! "
 * тоесть строка склееная из нескольких значений свойств объекта
 */

//  * 1. Для свойства name
//  * флаг configurable установите false
Object.defineProperty(User, 'name', {
  configurable: false,
});
//  * 2. Попробуйте теперь изменить значение name
//  * (используйте ваш сеттер)
User.changeName = 'Volodya';
console.log(User);
//  * 3. Для свойства password
//  * флаг writable установите в false
Object.defineProperty(User, 'password', {
  writable: false,
});
//  * 4. Попробуйте теперь просмотреть значение password
console.log(User.password);
//  * Что в итоге произошло? Почему?
// Стало не изменным.Потому-что если false, то свойство только для чтения (нельзя
//     изменить)

//  * 5. Для свойств password и bithdate
//  * флаг enumerable установите false
Object.defineProperties(User, {
  password: { enumerable: false },
  bithdate: { enumerable: false },
});
//  * 6. В цикле выведете все свойства
for (let key in User) {
  console.log(key);
}
//  * Что получилось? Почему?
//  Не вышли ключи password и bithdate потомучто задан флаг enumerable: false
// вывод свойств User
for (let key in User) {
  console.log(Object.getOwnPropertyDescriptor(User, key));
}
