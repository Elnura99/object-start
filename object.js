


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

const student = {
    name: 'Amelia',
    age:  16 ,
    grades: [10, 15, 20, 25, 30]
}


// delete student.grades
console.log(student);

function getAvaregaGrade(b){
    let sum = 0
    for(let i=0; i< student.grades.length; i++){
        sum+= student.grades[i]
        
    }return sum/student.grades.length
}
console.log(getAvaregaGrade(student));

                            // -----tapşırıq(14)-----

// const rectangle = {
//     width: '80%',
//     height: 40
// }

// console.log(rectangle);

 
                            // -----tapşırıq(16)-----   

// const circle = {
//     radius: 7,
//     color: 'purple'
// }

// console.log(circle.color);


                           //   -----tapşırıq(18)-----

// const employee = {
//     name: 'Elnara Rizvanova'
//     position: 'developer'
//     salary: 4000
// }



                             // -----tapşırıq(20)-----

// const product = {
//     name: 'telephone'
//     price: 2000
//     quantity: 9
// }


                           //   -----tapşırıq(22)-----

// const movie = {
//     title: 'Guardians of the Galaxy',
//     director: 'James Fransis',
//     year: 2017
// }
 
// movie.year = 2023

// console.log(movie);