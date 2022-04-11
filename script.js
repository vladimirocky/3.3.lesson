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

class Bartender extends Person{
    /**
     * -------------------------------------------------------------------------
     * Тут нужено добавить метод introduceMyself
     * -------------------------------------------------------------------------
     */
};
const personBartender = new Bartender('Lexa',25,'bartender');
/**
 * -------------------------------------------------------------------------
 * Сошласно заданию еще нужен класс Painter
 * и экземпляр этого класса
 * -------------------------------------------------------------------------
 */
func.call(personBartender);
/**
 * -------------------------------------------------------------------------
 * Нужно сначала объявить новую функцию
 * скопировать туда метод из Bartender
 * вызвать функцию в контексте Painter
 * -------------------------------------------------------------------------
 */


const User = {
    name: 'Petya',
    age: 24,
    password: 'root123',
    bithdate: '10.10.1990',
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
User.changeName = ' Alexus '; // меняем имя в сетторе


Object.defineProperty(User,'name',{
    configurable : false
  })

/**
 *  -------------------------------------------------------------------------
 * А вот тут как раз и надо попытаться поменять имя
 *  -------------------------------------------------------------------------
 */

let descrip = Object.getOwnPropertyDescriptor(User,'name');
  console.log(descrip); // проверка

  Object.defineProperty(User,'password',{
      writable:false
  })
let descripPassword = Object.getOwnPropertyDescriptor(User,'password');
console.log(descripPassword);//поменялось свойство writable на false ,то есть сейчас password только для чтения изменить нельзя
/**
 *  -------------------------------------------------------------------------
 * теперь не можем менять пароль
 *  -------------------------------------------------------------------------
 */
// -------------------------------------------------------------------------
User.password = "new_pass";
console.log(User); // пароль мы так и не изменили ибо он не writable
// -------------------------------------------------------------------------

Object.defineProperties(User,{
   password:{ enumerable:false},
   bithdate:{enumerable:false}
  });

// -------------------------------------------------------------------------
console.log("А теперь видим что циклом можно обойти только enumerable");
// -------------------------------------------------------------------------

  for (let key in User) {
    console.log(Object.getOwnPropertyDescriptor(User, key));
  } // в цикле не будут участвовать ключи "password" и "birthdate" так как свойство enumerable false и нельзя пройтись циклом то есть в цикле они уже не участвуют
/**
 * Да, все верно
 */



  /**
 * Ваш код тут
 * func
 * person1
 */


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

    /**
     * реализуйте геттер
     * который выведет строку вида
     * "Привет я ..name.. Мне ..age.. лет! "
     * тоесть строка склееная из нескольких значений свойств объекта
     */
 /*
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
