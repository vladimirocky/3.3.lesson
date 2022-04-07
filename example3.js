// объект с двумя свойствами
// и на первый вгляд одинаковыми методами
const users = {
    loginList: ['Vasya', 'Kolya', 'Anna'],
    userRole: 'user',

    printUsers() {
        this.loginList.forEach(
            user => console.log(`${this.userRole} ${user} - ${this}`)
        )
    },
    failPrintUsers() {
        this.loginList.forEach(
            // все тоже самое, но объявляем функцию через function
            function (user) {
                console.log(`${this.userRole} ${user} - ${this}`);
            }
        )
    }
}
// user Vasya - [object Object]
// user Kolya - [object Object]
// user Anna - [object Object]
users.printUsers();
// undefined Vasya - [object global]
// undefined Kolya - [object global]
// undefined Anna - [object global]
users.failPrintUsers();