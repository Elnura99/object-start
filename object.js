


// let obj = {
//     name: 'Elnura',
//     lname: 'Alizada',
//     age: 24,
//     universty: 'AzTU',
//     specialty: 'ITT',
//     faculty: 'Radiotexnika'
// }

// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));


// // for(let i in obj) {
// //     console.log(obj[i]);
// }

// for(let [a,b] of Object.entries(obj)) {
//     console.log(a,b);
// }

// const{name, lname, age, universty, specialty, faculty} = obj

// console.log(lname);

// obj.school = 201
// console.log(obj);




                               // TAPŞIRIQ
                    //    -----tapşırıq(1,2,3,4,5)-----
// const person = {
//     name: 'Elnura',
//     age: 24,
//     city: 'Baku'
// }
// person.age = 25

// person.country = 'AZERBAIJAN'

// delete person.city

// console.log(person);

// function printInfo(a){
//     for(let i in person){
//         console.log(person[i]);
//     }
// }
 
// printInfo(person)

                        //  -----tapşırıq(6,7)-----

// const car = {
//     brand: 'Chevrolet',
//     model: 'Corvette',
//     year: 2020
// }
// car.brand = 'Toyoto'

// car.year = 2021
// console.log(car);


                           // -----tapşırıq(8,9)-----

// const book = {
//     title: 'Agapi',
//     author: 'Sarah',
//     pages: 355
// }
//  book.author = 'Sarah Jio'

//  console.log(book);


 
                           // -----tapşırıq(10,11,12,13)-----

// const student = {
//     name: 'Amelia',
//     age:  16 ,
//     grades: [10, 15, 20, 25, 30]
// }


// delete student.grades
// console.log(student);

// function getAvaregaGrade(b){
//     let sum = 0
//     for(let i=0; i< student.grades.length; i++){
//         sum+= student.grades[i]
        
//     }return sum/student.grades.length
// }
// console.log(getAvaregaGrade(student));




                            // -----tapşırıq(14,15)-----

// const rectangle = {
//     width: 15,
//     height: 20
// }

// console.log(rectangle);

// function calculateArea(rectangle){
//     return rectangle.width*rectangle.height
// }
// console.log(calculateArea(rectangle));
 



                            // -----tapşırıq(16)-----   

// const circle = {
//     radius: 7,
//     color: 'purple'
// }

// console.log(circle.color);




                           //   -----tapşırıq(18,19)-----

// const employee = {
//     name: 'Elnara Rizvanova',
//     position: 'developer',
//     salary: 4000
// }

// function increase(employee) {
//     return employee.salary * 10 / 100 + employee.salary
// }
// console.log(increase(employee));



                             // -----tapşırıq(20,21)-----

// const product = {
//     name: 'telephone',
//     price: 2000,
//     quantity: 9
// }

// function calculateTotalPrice(product){
//     return product.price * product.quantity
// }
// console.log(calculateTotalPrice(product));




                           //   -----tapşırıq(22,23)-----

// const movie = {
//     title: 'Guardians of the Galaxy',
//     director: 'James Fransis',
//     year: 2017
// }
 
// movie.year = 2023

// console.log(movie);



                             // -----tapşırıq(24,25)-----

// const bankAccount = {
//    balance: 1400,
//    currency: 'TRY'
// }

// function increaseBalance(bankAccount){
//     return bankAccount.balance - 350
// }
// console.log(increaseBalance(bankAccount));




                           // -----tapşırıq(26,27,28,29)-----

// const team = {
//     name: 'Galatasaray',
//     coach: 'Okan Buruk',
//     players: ['Mauro Icardi', 'Muslera']
// }

// team.players.push('Hakim Ziyax')
// delete team.coach
// console.log(team);

// function printTeamInfo(a) {
//     for(let [key, value] of Object.entries(team)){
//     console.log(key, value);
//     }
// }

// printTeamInfo(team)


                              // -----tapşırıq(30)-----

// const city = {
//     name: 'Jacob',
//     population: 5100000,
//     country: 'Seul'
// }

// console.log(Object.keys(city));
// console.log(Object.values(city));
// console.log(Object.entries(city));