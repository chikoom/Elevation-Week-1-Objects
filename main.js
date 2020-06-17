// Exercise 1
exDivider(1);

p1 = {
  name: "Robert",
  age: 37,
  city: "Givataim"
}

p2 = {
  name: "Jill",
  age: 37,
  city: "Givataim"
}

if(p1.age === p2.age){

  if(p1.city === p2.city){
    console.log(p1.name+" wanted to date "+p2.name)
  }else{
    console.log(p1.name+" wanted to date "+p2.name+", but couldn't")
  }

}


// Exercise 2
exDivider(2);

const myList = [
  { hobbie:"skate", times:3 },
  { hobbie:"soccer", times:1 }
]

console.log(myList)
console.log(myList.length)

myList[0].times = 4

console.log(myList)

myList.splice(1)

console.log(myList)


// Exercise 2
exDivider(2);

const newList = [
  { hobbie:"arduino", times:2 },
  { hobbie:"stocks", times:5 }
]

myList.push(...newList)

console.log(myList)

// Exercise 4
exDivider(4);

const library = {
  books:[]
}

library.books.push({title:'Zen and the Art of Motorcycle Maintenance', author:'Robert M. Pirsig'})
library.books.push({title:'Fear and Loathing', author:'Hunter S. Thompson'})
library.books.push({title:"Alice's Adventures in Wonderland", author:'Lewis Carroll'})


console.log(library)

// Exercise 5
exDivider(5);

const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const name = prompt('Please enter the name for your reservation');

let nameSearch = name.toLowerCase()
nameSearch = nameSearch.charAt(0).toUpperCase() + nameSearch.slice(1);

if(reservations[nameSearch]){
  if(!reservations[nameSearch].claimed){
    console.log("Welcome "+nameSearch);
  }else{
    console.log("Hmm, someone already claimed this reservation");
  }
}else{
  console.log("You have no reservation");
  reservations[nameSearch] = { claimed:true }
  console.log("Resevation added");
  console.log(reservations);
}


// Exercise 6
exDivider(6);

const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true,
    fridge: {
        price: 500,
        works: false,
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 1 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

const hasOven = kitchen.hasOven
const frideWorks = kitchen.fridge.works
const item = kitchen.fridge.items[1].name
const expired = date - kitchen.fridge.items[1].expiryDate
const price = kitchen.fridge.price/2
const daysuffix = (expired>1)? "s":""

if(hasOven&&frideWorks){
  console.log("Geraldine's "+item+" expired "+expired+" day"+daysuffix+" ago. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in.")
}
if(!hasOven&&frideWorks){
  console.log("Geraldine's "+item+" expired "+expired+" day"+daysuffix+" ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the raddish in.")
}
if(hasOven&&!frideWorks){
  console.log("Geraldine's "+item+" expired "+expired+" day"+daysuffix+" ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the "+item+" in. And she'll have to pay "+price+" to fix the fridge.")
}
if(!hasOven&&!frideWorks){
  console.log("Geraldine's "+item+" expired "+expired+" day"+daysuffix+" ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the "+item+" in. And she'll have to pay "+price+" to fix the fridge.")
}



function exDivider(number) {
  console.log(" ");
  console.log(" ");
  console.log("==========================");
  console.log("Exercise " + number);
  console.log("==========================");
  console.log(" ");
}
