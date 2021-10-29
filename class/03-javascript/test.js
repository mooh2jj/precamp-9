const fruits = [
  {number: 1, title: "레드향"},
  {number: 2, title: "샤인머스켓"},
  {number: 3, title: "산청딸기"},
  {number: 4, title: "한라봉"},
  {number: 5, title: "사과"},
  {number: 6, title: "애플망고"},
  {number: 7, title: "딸기"},
  {number: 8, title: "천혜향"},
  {number: 9, title: "과일선물세트"},
  {number: 10, title: "귤"},
];

// for(let i=0; i<fruits.length; i++){
//     console.log(`${fruits[i].number +" " + fruits[i].title}`)
// }

// for(key in fruits){
//     console.log(`forin: ${key} ${fruits[key].title}`)
// }


// fruits.forEach( x => {
//     console.log(`forEach: ${x.number} ${x.title}`)
// })

const numbers = [1, 2, 3, 4];

const strs = ["apple", "banana", "cherry"];

// find(), findIndex()
const a = strs.find((s) => {
  return /^b/.test(s);
});
console.log(a);

const aa = strs.findIndex((s) => {
  return /^b/.test(s);
});
console.log(aa);

const numarr = [1, 4, 5];

const stralpa = ["a", "b", "c"];

const concat = numarr.concat(stralpa);
console.log(`concat: ${concat}`);

console.log(`includes : ${concat.includes("a")}`);

console.log(`join : ${concat.join("-")}`); //

console.log(`slice : ${concat.slice(2)}`); // substr, split 은 String

console.log(`splice : ${concat.splice(2, 2)}`); // 5, a

const user = {
  name: "dsg",
  age: 30,
  email: "ehtjd33@gmail.com",
};

const keys = Object.keys(user);
console.log(keys);
// [ 'name', 'age', 'email' ]

console.log(user["email"]);

const values = keys.map((key) => user[key]);

console.log(values);
// [ 'dsg', 30, 'ehtjd33@gmail.com' ]

const strs2 = ["apple", "banana", "cherry", "orange"];

console.log(strs2);
// [ 'apple', 'banana', 'cherry', 'orange' ]
console.log(...strs2);
// console.log('apple', 'banana', 'cherry', 'orange');
// apple banana cherry orange

const toObj = (a, b, ...c) => {
  // c: rest parameter
  return {
    a: a,
    b: b,
    c: c,
  };
};

console.log(toObj(...strs2));
// { a: 'apple', b: 'banana', c: [ 'cherry', 'orange' ] }

const Employee = {
  firstname: "John",
  lastname: "Doe",
};

console.log(Employee.firstname);
// expected output: "John"

delete Employee.firstname;

console.log(Employee.firstname);
// expected output: undefined


// const timerOut = setTimeout(function(){
//     console.log('3초후 setTimeout!!')
// }, 3000);

// clearTimeout(timer);

const timerInterval = setInterval(function(){
    console.log('2초 간격 반복')
}, 2000);

clearTimeout(timerInterval)

if(1+1 === 2) console.log("정답입니다.");
else console.log("정답이 아닙니다.")

const profile = {
    name : "철수",
    age : 12,
    school : "다람쥐포등학교"
}

if(profile.age >= 20){
    console.log("성인입니다.")
}else if (profile.age >= 8){        // else if => 19 >= age 까지 내포!
    console.log("학생입니다.")
}else {
    console.log("어린이입니다.")
}

let cq;

const ca = null;

// console.log(cq)
// console.log(ca)

// for(let i =0; i < 10; i++){
//     console.log('hello');
// }

// const ooo = ['a', 'b', 'c']

// for(i of ooo){
//     console.log('i :' + i)
// }


const map = new Map();

map.set('one', 1);
map.set('two', 2);
map.set('three', 3);

console.log("map :", map)

for(key of map.keys()){
    console.log(key);
}

for(value of map.values()){
    console.log(value);
}

for (let [key, value] of map) {
    console.log(`${key}, ${value}`);
}

map.forEach((k,v) => {
    console.log("map.foreach: " + k , v)
})

console.log(Math.random())
console.log(Math.floor(10*Math.random()))

const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// padStart( , ) 할려면 String으로 객체 타입 변환!

console.log("token: ", token)


// 이메일 찾기

// dsg**@gmail.com

const email = 'dsg11@gmail.com'

let data = email.split('@')
data[0] = data[0].slice(0, data[0].length -2) + '**'
// slice 어렵네... 인자 2개일때(index, length)  index번째부터 lenth까지
console.log(data[0])
console.log(data.join('@'))



// setTimeout(function(){
//     console.log('2초후 setTimeout!!')
// }, 2000);

// let time = 10;

// setInterval(()=> {

//   if(time > 0){
//     console.log(time);
//     time = time - 1;
//   }
//   // if(time < 0){
//   //   time = 0;
//   // }
// }, 1000);  // 1초

// 3분을 어떻게 할 것인가?
// 3분 => 180초  

console.log(Math.floor(180/60))
console.log(Math.floor(179/60))
console.log(Math.floor(178/60))

console.log(180%60)   // % 나머지는 floor는 필요x
console.log(179%60)
console.log(178%60)

let time = 180;

setInterval(()=> {

  const min = Math.floor(time/60);
  const sec = time%60;

  if(time >= 0){
    // console.log(time)
    console.log(`${min} : ${String(sec).padStart(2, "0")}`)
    time = time - 1;
  }
}, 1000)









