// let width = 5
// let height = 15
// function findSquare (a:number, b: number) {
//     return a * b
// }
// // есть переменные, есть функция- процедура, которая возвращает определённый результат, в нашем случае, площадь фигуры
// // Её можно вызвать с определёнными аргументами и получить опред результат
// findSquare(width, height)
// class RectAngle {
//     private _height
//     private _width
//     constructor(h, w) {
//         this._height = h
//         this._width = w
//     }
//     get width() {
//         return this._width
//     }
//     // get height() {
//     //     return this._height
//     // }
//     set width(value) {
//         if(value < 0){
//             this._width = 1
//         } else {
//             this._width = value
//         }
//     }
// }
// const rect1 = new RectAngle(10, 20)
// console.log(rect1.width)
// rect1.width = 15
// console.log(rect1.width)
// class DataBase {
//     private _url
//     private _port
//     private _name
//     private _password
//     private _tables
//     constructor (url, port, name, password) {
//         this._name = name,
//         this._url = url,
//         this._password = password,
//         this._port = port
//         this._tables = []    
//     }
//     addTable(data) {
//         this._tables.push(data)
//     }
//     clearTable() {
//         this._tables = []
//     }
//     get tables () {
//         return this._tables
//     }
// }
// const dataBase1 = new DataBase(1, 2, 3, 4)
// dataBase1.addTable({name:'gosha'})
// console.log(dataBase1.tables)
// dataBase1.addTable({name:'anna'})
// dataBase1.tables.push({name : 'hello'})
// console.log(dataBase1.tables)
// dataBase1.clearTable()
// console.log(dataBase1.tables)
// class Person {
//     private _name
//     private _age
//     private _lastName
//     constructor(name, lastName, age) {
//         this._age = age
//         this._lastName = lastName
//         this._name = name
//     }
//     get name () {
//         return this._name
//     }
//     get lastName () {
//         return this._lastName
//     }
//     get age () {
//         return this._age
//     }
//     set name (value) {
//         this._name = value
//     }
//     set age (value) {
//         value < 0 ? this._age = 0 : this._age = value
//     }
//     set lastName (value) {
//         this._lastName = value
//     }
//     greeting() {
//         console.log(`Hello my Name is: ${this._name}, ima person`)
//     }
// }
// class Employee extends Person {
//     private _inn
//     private _snils
//     private _passPort
//     constructor(name, lastName, age, inn, snils, passPort){
//         super(name, lastName, age)
//         this._inn = inn,
//         this._passPort = passPort,
//         this._snils = snils
//     }
//     greeting() {
//         console.log(`Hello my Name is: ${this.name}, ima employee`)
//     }
// }
// class Developer extends Employee {
//     private _level
//     constructor(name, lastName, age, inn, snils, passPort, level) {
//         super(name, lastName, age, inn, snils, passPort)
//         this._level = level
//     }
//     greeting() {
//         console.log(`Hello my Name is: ${this.name}, ima Developer`) 
//     }
// } 
// const gosha = new Developer ('Gosha', 'Odintsov', 22, 11, 12,12, 'middle')
// const worker = new Employee ('Worker', 'Odintsov', 22, 11, 12,12)
// const Human = new Person ('Gosha', 'Odintsov', 22)
// const personsList:Person[] = [gosha, worker, Human] 
// const massGreeting = (persons: Person[]) => {
//     for (let i = 0; i < persons.length; i++) {
//         const currentPerson = persons[i]
//         currentPerson.greeting()
//     }
// }
// massGreeting(personsList)
// class Wheel {
//     drive(){
//         console.log('wheels are spinning')
//     }
// }
// class Engine {
//     drive() {
//         console.log('Engine is working')
//     }
// }
// class Car {
//     engine: Engine
//     wheels:any[]
//     constructor(){
//         //у данных, композитных полей мы не передаём ничего в конструктор мы инициализируем их в теле конструктора 
//         this.engine = new Engine()
//         this.wheels.push(new Wheel())
//         this.wheels.push(new Wheel())
//         this.wheels.push(new Wheel())
//         this.wheels.push(new Wheel())
//     }
//     drive() {
//         this.engine.drive()
//         for(let i = 0; i < this.wheels.length; i++) {
//             this.wheels[i].drive()
//         }
//     }
//     // вызов в общем классе функции, которая вызывает методы всех композирующих классов назывется делегированием.
// }
// const duster = new Car()
// console.log(duster.wheels, duster.engine)
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
// class Car {
//     model:string
// }
// interface Repository<T> {
//     create: (obj:T) => T
//     get: () => T
//     delete: (obj:T) => T
//     update: (obj:T) => T
// }
// class CarRepo implements Repository<Car> {
//     delete: (obj: Car) => Car
//     create: (obj: Car) => Car
//     get: () => Car
//     update: (obj: Car) => Car
// }
// class UserRepo implements Repository<User> {
//     create: (obj: User) => User
//     get: () => User
//     update: (obj: User) => User
//     delete: (obj: User) => User
// }
// interface UserRepo {
//     getUsers: () => User[]
// }
// class UserMongoDBRepo implements UserRepo {
//     getUsers(): User[] {
//         console.log('...используем подключение к монго и подключаем пользователей')
//         return [{name:'User From mongo', login:'121'}]
//     }
// }
// class UserPostgresRepo implements UserRepo {
//     getUsers(): User[] {
//         console.log('...используем подключение к POSTGRES и подключаем пользователей')
//         return [{name:'User From postgres', login:'121'}]
//     }
// }
// class UserService {
//     userRepo: UserRepo
//     constructor(userRepo:UserRepo) {
//         this.userRepo = userRepo
//     }
//     filterByAge(age:number) {
//         const users = this.userRepo.getUsers()
//         console.log(users)
//     }
// }
// const service1 = new UserService(new UserMongoDBRepo()) 
// const service2 = new UserService(new UserPostgresRepo())
// service1.filterByAge(15)
// service2.filterByAge(15)
var Database = /** @class */ (function () {
    function Database() {
        if (Database.instance) {
            console.log(Database.instance);
            return Database.instance;
        }
        this.url = Math.floor(Math.random() * 100).toString();
        Database.instance = this;
    }
    return Database;
}());
var db1 = new Database();
var db2 = new Database();
var db3 = new Database();
var db4 = new Database();
console.log(db1);
console.log(db2);
console.log(db3);
console.log(db4);
//Например, в нашем приложении используется база данных и её образец  должен быть только один, чтобы другйо разработчик случайно не создал другой инстанс базы данных, сожно использовать паттерн синглтон. 
//В нём мы при первой инициализации в статическое поле добавляем некоторые данные, а далее осуществляем проверку на их наличие, и если они есть, значит мы их  ив возвращаем, не давая перезаписать поля новыми значениями
