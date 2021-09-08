import '../styles/index.scss'



// /*==============Main===================*/
// // 138 - What is ES6
// /*

// 01) ES6 is a modern JavaScript Version.
// 02) ES6 stand for EcmaScript 6
// 03) It developed in 2015
// 04) It includes some new built in features to make JavaScript more advance
// 05) String Literals, Let, Const,  Arrow Function are some of freatues of ES6

// */

// // 139 - Envireoment Setup
// /*

// 01) ES6 is fully support on nodejs but in world there are many Computer, who don't have latest version of nodejs, browser, website so for that, we have to convert ES6 code to ES5 or previous version JavaScript code.
// 02) For convert our code we need some packeage.
// 03) Babel Webpack is a solution for this concept.
// 04) So do code in ES6 with Babel WebPack.

// How to get it
// 01) You can make custom webpack, For this learn how to make it.
// 02) Download it from https://github.com/mrhrifat/webpack
// 03) You can clone or download it.

// How to Install

// 01) Make a folder and move into it.
// 02) Open linux terminal
// 03) Go to the project directory with (cd) command
// 04) npm init
// 05) npm install
// 06) npm audit fix
// 07) npm start

// */

// // 140 - Template String

// var name = "Imam Ibnul Jawji (RA)"
// var born = "510H"
// var death = "597H"
// console.log("The One of Imam of Ummah named " + name + " is born in " + born + ". He was death in " + death)

// console.log(`The One of Imam of Ummah named ${name} is born in ${born}. He was death in ${death}`)

// console.log(`The One of Imam of Ummah named ${name == "Imam Ibnul Jawji (RA)" ? name : "Not right"}  is born in ${born}. He was death in ${death}`)

// console.log(`The One of Imam of Ummah named ${name == "Imam Ibnul Jawji" ? name : "Imam Ibn Taimiya"}  is born in ${born == "510" ? born : "661H"}. He was death in ${death == "597" ? death : "728H"}`)

// console.log(`
//     * ${name.padStart(30, "*")}
//     * ${name.padEnd(30, "*")}
//     * ${name.repeat(10)}
//     `)

// // 141 - Var vs Let vs Const

// var a = 10
// let b = 20
// const c = 30 //Const have to define with Capital letters. Like C

// console.log(a, b, c)

// a = 100
// b = 90
// // c = 80

// console.log(a)
// console.log(b)
// console.log(c) //You can't reassign const variable

// var f1 = () => {
//     var a = 50
//     console.log(a)
// }
// f1()
// console.log(a)


// var d = 40

// var f2 = (d) => {
//     // var d = 88
//     console.log(d)
// }
// f2()
// // console.log(d)
// // f2(66)

// /*
// 01) Gernally a variable is not accessable from a function or any other block to global section
// 02) But
//     01) var can do it
//     02) let can't do
// */

// if (true) {
//     var f = 10
// }
// console.log(f)

// for (var i = 10; i > 5; i--) {

// }
// console.log(i)

// //With let we can fix it

// if (true) {
//     let l = 10
// }
// console.log(l)

// for (let j = 10; i > 5; i--) {

// }
// console.log(j)

// 142 - Arrow Function

let add1 = (x, y) => {
    return x + y
}
let add2 = (x, y) => x + y
let pow1 = (s) => Math.pow(s, 2)
let pow2 = s => (Math.pow(s, 2)).toFixed(2)

console.log(add1(3, 4))
console.log(add2(5, 4))
console.log(pow1(4))
console.log(pow2(8))

// 143 - Arrow Function & This
var f1 = function () {
    console.log(this)
}
f1()
/*
01) It will show (undefined) cause of Strict Mode. But in normal it will print.
02) Solution is bind, call with Empty Object
*/
var f2 = function () {
    console.log(this)
}
f2.call({})

console.log()

var obj1 = {
    name: "Ibn Taimiya",
    print: function () {
        console.log(this)
    }
}
obj1.print()

/*
01) In Object with the general function (this) will refer this obj1 object. But Object with arrow function obj2 will refer window object. 
02) That's why general function in object will print this object and arrow funtion in object print undefined.
    01) We can fix this with 3 way
*/

//Problem
var obj2 = {
    name: "Ibn Kaiyyim",
    print: () => {
        console.log(this)
    }
}
obj2.print()

//Solution
var obj3 = {
    name: "Ibn Ahmad",
    print: () => {
        let self = this
    }
}

