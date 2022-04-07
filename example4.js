// где теряется контекст
const user = {
    name: 'User',
    age: 28,
    showUserInfo () {
        console.log('name: ' + this.name);
        console.log('age: ' + this.age);
    }
}
// name: User
// age: 28
user.showUserInfo()
// потеряли контекст тк передали только функцию showUser
// name: undefined
// age: undefined
setTimeout(user.showUserInfo, 1000)
// callback таймаута замыкается на обьект user и this не теряется
// name: User
// age: 28
setTimeout(()=> user.showUserInfo() ,1000)