// console.log("This is external javascript")
// let num = 25369222244422.56;
// console.log(num.toPrecision(4));

// let str = "Raj";
// console.log(str);
// console.log(typeof str);

// let str = 'Rohan';
// console.log(str)
// console.log(typeof str);

// let str = `Frank`
// console.log(str);
// console.log(typeof str)

// let num = 10
// let num1 = 10;
// console.log(`the sum of ${num} and ${num1} is ${num+num1}`)

// let num = 10
// let num1 = 10;
// console.log(`the sum of ${num} 
//                 and ${num1} 
//                     is ${num+num1}`)

// let str = `"'Tyson'"`
// console.log(str)

// let str1 = '"Hello"'
// console.log(str1)


// let str = ''Grrrr''
// let str1 = ``byeee``

// let str = ''``""Loki""``''

// let str = 'Loki'
// console.log(str)
// console.log(str[2])

// console.log(str.length)
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())


// let str = "Hi bye Raj!";

// let ans = str.split("").reverse().join("");
// console.log(ans);
// let ans1 = str.split(" ").reverse().join(" ");
// console.log(ans1);

// console.log(str.substring(3));
// console.log(str.substring(3,11));
// console.log(str.substring(9,4));
// console.log(str.substring(-9,-4));
// console.log(str.substring(-9,6));


// console.log(str[0]);
// console.log(str[-1]);
// console.log(str.slice(5));
// console.log(str.slice(3,8));
// console.log(str.slice(-5,-9));
// console.log(str.slice(-9,-5));


// let str1 = "this is a string";
// let vowels = "aeiou"
// let rev = "";
// let vc = 0;
// let cc = 0;
// for(let i = (str1.length)-1; i >= 0; i--){
//     rev =  rev + str1[i];
// }
// console.log(rev + "----->is reversed string");

// for(let i = 0; i <str1.length; i++){
//     if(vowels.includes(str1[i])==true){
//         vc++
//     }
//     else{
//         cc++
//     }
// }

// console.log(`The count of vowels in a ${str1} is ${vc}`);
// console.log(`The count of consonants in a ${str1} is ${cc}`);


// console.log("hi");
// var a = "One"
// var b = "two"
// console.log(b);
// console.log(c);
// var c = 50;
// console.log(b);
// console.log(c);

//----------------------
// console.log("start");
// console.log(d);
// var a = 50
// console.log(b);
// var b = 100
// console.log(b);

//----------------------
// console.log("start");
// console.log(a+10);
// console.log(b);
// var a = 12
// var b = 67
// console.log(a+67);
// console.log(c);
// let b = 78;
// console.log(b);


//----------------------
// console.log(10+78);
// console.log(10-"11");
// var x = 345
// var y = "45"
// console.log(x+y);
// console.log(x+m);
// console.log("end");



// var a = 20;
// var c = 30;
// console.log(a+c-"10");
// console.log(d);
// let d = 50;
// console.log(d+c);


// var a = 13;
// console.log(a+b);
// let c = 89;
// let d = 10;
// console.log(a-d);
// console.log(b-d);
// var b = 78;
// b = 56;
// c = 78;
// console.log(a+10);

// let y = 78;
// let z = 89;
// console.log("Hi Hello");
// console.log(y-z);
// var z = 90;
// console.log(z+10);

// console.log(1 < 2 + 5 + true - "10" + 20 );

// if(20>5/2){
//     console.log("true");
// }
// else{
//     console.log("false");
// }



// function isPrime(x) {
//     //prime
//     let num = x;
//     for(let i = 2; i <= parseInt(num/2); i++){
//         if(num % i === 0){
//             console.log(`${num} is not prime`);
//             return;
//         }
//     }
//     console.log(`${num} is prime`);
// }
// isPrime(13);
// isPrime(16);
// isPrime(17);
// isPrime(78);
// isPrime(73);
// isPrime(81);
// isPrime(91);

// function factorial(x) {
//     //factorial
//     let num = x;
//     fact = 1;
//     for(let i = num; i > 0; i--){
//         fact = fact * i;
//     }
//     console.log(`Factorial of ${num} is ${fact}`);
//     console.log(`Factorial of ${num} is ${fact}`);
// }
// factorial(5);
// factorial(6);
// factorial(7);

// function isFactor(x) {
//    //Factor
//     let num = x;
//     for(let i = 1; i <= parseInt(num/2); i++){
//         if(num % i === 0){
//             console.log(`Facors of the number ${num} is ${i}`);
//         }
//     }

// }
// isFactor(4);
// isFactor(56);

// function isEven(x) {
//    //even
//     let num = x;
//     if (num % 2 === 0) {
//         console.log(`${num} is even`);
//     }
//     else{
//         console.log(`${num} is not even`);
//     }
// }

// isEven(19)
// isEven(36)

// function isPalindrome(x) {
// //Palindrome
//     let num = x;
//     let no = x;
//     let rev = 0;
//     while(num != 0){
//         let rem = num % 10;
//         rev = (rev * 10) + rem;
//         num = parseInt(num / 10);
//     }
//     if (rev === no) {
//         console.log(`${no} is a Palindrome`);
//     }
//     else  {
//         console.log(`${no} is not a Palindrome`);
//     }
// }

// isPalindrome(12321)
// isPalindrome(1321)
// isPalindrome(1441)

// function isPrime() {
//     //prime
//     let num = 127;
//     for(let i = 2; i <= parseInt(num/2); i++){
//         if(num % i === 0){
//             console.log(`${num} is not prime ${i}`);
//             return;
//         }
//     }
//     console.log(`${num} is prime`);
// }
// isPrime();
// console.log(Boolean(true));

// console.log(1<2 + 5 + true - "10" + 20 > 5/2);
// console.log(1<2 + 5 + true - "10");

// var num = 12;
// let num2 = 89;
// function add(x,y){
//     let num = 56;
//     let num2 = 100;
//     console.log(num*x);
// }
// let num3 = 83;
// console.log(num+num2);
// console.log(add(4,9));
// console.log("btw");
// add(5,9);

// var a = 78;
// let aa = 89;
// function isEven(x){
//     console.log(x+100);
//     return x % 2 == 0;
// }
// if (isEven(4)) {
//     console.log("I am an even Func");
// }
// else{
//     console.log("I am not an even Func");
// }

// var bus = "bmtc";
// function parent(){
//     let wife = "Elizibeth";
//     let car = "bmw";
//     let treasure = "gold";
//     let land = "1000 acres";
// //Lexical scope is possible in the case of nested function.
// //Lexical means scope of a variable is determined by its position in the code rather than by function's call back.
//     console.log(car);
//     console.log(wife);//wastage of memory happens. since closure stores unused probable usage of properties of parent function.
//     console.log(land);
//     console.log(treasure);
//     function child(){
//         let bike = "tvs xl";
//         console.log(bike);
//         console.log(treasure);
//         function grandChild(){
//             let cycle = "Hero";
//             console.log(cycle);
//             console.log(bike);
//             console.log(car);
//             console.log(bus);
//             console.log(land);
//         }
//         return grandChild;
//     }
//     return child;
// }
// parent()()();

function digit(x, checkFunc) {
    let num = x;
    let sum = 0;
    while (num !== 0) {
        let rem = num % 10;
        if (checkFunc(rem)) {
            console.log(rem);
        }
        // sum += checkFunc(rem);
        num = parseInt(num / 10);
    }
    return sum;
}


function isEven(x) {

    return x % 2 === 0;
}

function isOdd(x) {

    return x % 2 !== 0;
}
function isPrime(x) {

    let num = x;
    for (let i = 2; i <= parseInt(num / 2); i++) {
        if (num % i === 0) {
            // console.log(`${num} is not prime`);
            return;
        }
    }
    console.log(`${num} is prime`);
    // return num;
}
function factorial(x) {
    let fact = 1;
    for (let i = x; i > 0; i--) {
        fact = fact * i;
    }
    return fact;
}
function isStrong(num) {
    return num === sumOfFact(num);
}
function sumOfFact(x) {
    let sum = 0;
    digit(x, digit => {
        sum += factorial(digit);
    });
    return sum;
}

function countOfDigits(x) {
    let count = 0;
    while (x !== 0) {
        count++;
        x = parseInt(x / 10);
    }
    return count;
}

function sumOfNumber(x) {
    let sum = 0;
    while (x !== 0) {
        let rem = x % 10;
        sum += rem;
        x = parseInt(x / 10);
    }
    return sum;
}

function reverseNumber(x) {
    let rev = 0;
    while (x !== 0) {
        let rem = x % 10;
        rev = (rev * 10) + rem;
        x = parseInt(x / 10);
    }
    return rev;
}

// console.log(factorial(6));
// digit(1234352,isEven);
// digit(1234352,isOdd);
// digit(132531,factorial)
// digit(26263, isPrime)
// digit(145, isStrong)
// if(isStrong(145)){
//     console.log("is strong");
// }
// console.log(countOfDigits(2654372));
// console.log(sumOfNumber(1234));
// console.log(reverseNumber(1289283));
// console.log(reverseNumber(1234));











// let str = 'bcdemnvyz'
// let ch = str.split('')
// function sortFunc(arr){
//         let temp = undefined;
//         for(let i = 0; i < arr.length-1; i++){
//             if (arr[i].charCodeAt() > arr[i + 1].charCodeAt()) {
//                 temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = arr[i]
//             }
//     }
//     return arr;
// }

// ch = sortFunc(ch)
// str = ch.join('')
// console.log(str);


// let str = "sftftwfz";
// console.log(str.charCodeAt('z')); 



// let arr = [14, 98];
// console.log(arr);
// arr.push(120, 98, 56, "hello")
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.shift()
// // console.log(arr);
// arr.unshift("hi")
// console.log(arr);
// console.log(arr);

// let arr = [14, 98,300]
// console.log(arr);
// console.log(arr.reverse());
// console.log(arr.toString());
// console.log(arr.join(""));

// let arr = [67, 9, 100, 34, 98]
// console.log(arr.sort((x, y)=>{
//     return y - x;
// }));

// let arr = ["z", "y", "c", "d", "e", "a", "c"]

// console.log(arr);
// console.log(arr.indexOf("c"));
// console.log(arr.indexOf("c", 3));
// console.log(arr.slice(2));
// console.log(arr.slice(2,6));
// console.log(arr.slice(-6, -4));

// let arr = ['z', 'y', 'c', 'd', "36", "25", "te", "r"]
// console.log(arr);
// arr.splice(1, 0, "e", "t");
// console.log(arr);
// arr.splice(2,3);
// console.log(arr);
// arr.splice(2,3, "s", "t")
// console.log(arr);

// console.log(arr.includes("y"));

// let num = [5, 57, 21, 18]
// let ans=[];
// num.forEach((num, index)=>{
//     if(num>=18){
//         let sem = ans.push(num);

//         console.log(num + " is eligible to write");
//     }
//     else{
//         console.log(num+ " is not eligible to write");
//     }
// }
// )
// console.log(ans);


//Key will act like an identifier so if we use number or function as key it can't be accessed and as for function it will throw error.
// let std = {
//     name:"ABC",
//     family:{fName:"XYZ", mName:"PQRS"},
//     age: 24,
//     skills: ["html", "css", "js"],
//     k11:"Some number",
//     k90:()=>{console.log("This is 90");}
// }
// console.log(std);
// std.k90()
// console.log(std.k11);
// std.percentage = 90;
// console.log(std);
// std.skills.push("C++")
// console.log(std.skills);
// delete std.k11;
// console.log(std);

// function Op(x,y,z) {
//     this.name = x;
//     this.id = y;
//     this.phNo = z;
// }
// let std1 = new Op("Raj", 1, 1234553789);
// let std2 = new CreateStudentObject("Rani", 2, 435635775);
// let std3 = new CreateStudentObject("Raj898", 1, 1234553789);
// let std4 = new CreateStudentObject("Rani3746", 2, 435635775);
// let std5 = new CreateStudentObject("Raj478", 1, 1234553789);
// let std6 = new CreateStudentObject("Rani236t", 2, 435635775);
// let std7 = new CreateStudentObject("Raj3tyuge", 1, 1234553789);
// let std8 = new CreateStudentObject("Rani3utgf5", 2, 435635775);
// let std9 = new CreateStudentObject("Raj36t6", 1, 1234553789);
// let std10 = new CreateStudentObject("Rani2bh73", 2, 435635775);
// console.log(std1);
// console.log(std2);
// console.log(std3);
// console.log(std4);
// console.log(std5);
// console.log(std6);
// console.log(std7);
// console.log(std8);
// console.log(std9);
// console.log(std10);

// class CreateStudentObj{
//     constructor(x,y,z){
//         this.name = x;
//         this.id = y;
//         this.phNo = z;
//     }
// }

// let s1 = new CreateStudentObj("Raj", 1, 123789);
// let s2 = new CreateStudentObj("Rani", 2, 4356375);
// let s3 = new CreateStudentObj("Raj898", 1, 1234553789);
// let s4 = new CreateStudentObj("Rani3746", 2, 4335775);
// let s5 = new CreateStudentObj("Raj478", 1, 1234559);
// let s6 = new CreateStudentObj("Rani236t", 2, 435775);
// let s7 = new CreateStudentObj("Raj3tyuge", 1, 1233789);
// let s8 = new CreateStudentObj("Rani3utgf5", 2, 5635775);
// let s9 = new CreateStudentObj("Raj36t6", 1, 1234789);
// let s10 = new CreateStudentObj("Rani2bh73", 2, 635775);

// console.log(s1);
// console.log(s2);
// console.log(s3);
// console.log(s4);
// console.log(s5);
// console.log(s6);
// console.log(s7);
// console.log(s8);
// console.log(s9);
// console.log(s10);

// let std = {
/*  */
// }

/*Difference Between Primitve and no-primitive data type.
  Primitive : Immutable
  Primitive : Pass By value
  Primitive : Object Dereferencing

  Non-Primitive : mutable
  Non-Primitive : Pass By Reference
  Non-Primitive : Object Referencing
*/

// let str = "HI"
// console.log(str[0]);
// str[0] = 'H'
// console.log(str[0]);

// let arr = [10, 200]
// console.log(arr[0]);
// arr[0] = 100
// console.log(arr[0]);

// const std = {
//     name : "raj",
//     id : 1,
//     phNum : 2367674321,
//     fName : "raj appa",
//     sal : "100k"
// }

// Object.freeze(std)
// console.log(Object.isFrozen(std));

// Object.seal(std)
// console.log(Object.isSealed(std));
// //Reinitio3ralizing the object with values will be initialized only if the value is present in the object....
// std.id = 2
// std.sal = "300k"
// delete std.phNum
// // std.fName ="rammappa"
// std.gf = 'riya'
// console.log(std.id);
// console.log(std.fName);
// console.log(std.sal);
// console.log(std.phNum);

// let arr = [10, 20]
// let arr1 = arr
// let arr2 = arr1
// console.log(arr2);
// console.log(arr2);
// console.log(arr);

// console.log(Math.sin(0));
// console.log(Math.cos(0));
// console.log(Math.tan(0));

// console.log(Math.floor(0.3878786));
// console.log(Math.ceil(0.3878786));
// console.log(Math.round(0.672));
// console.log(Math.round(2.3546));
// console.log(Math.random());

// let otp = Math.ceil(Math.random()*10000)

// console.log(otp);
// if(otp<1000){
//     otp =otp * 10;
// }
// console.log(otp);

// alert("Your otp is " +otp);
// let inp = Number(prompt("Enter the otp"))
// if(otp === inp){
//     alert("valid otp")
// }
// else{
//     alert("invalid otp")
// }

// console.log(Math.max(162,364,24,362,37,-12));
// console.log(Math.min(162,364,24,362,37,-12,-27,-21,-1));

// console.log(Math.PI);
// console.log(Math.pow(3,3));

// let mon = ["Jan", "feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
// let day = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
// let myDate = new Date()

// myDate.setFullYear(1999)
// console.log(myDate);
// console.log(myDate);
// console.log(myDate.getDate());
// console.log(myDate.getMonth());
// console.log(myDate.getFullYear());
// console.log(mon[myDate.getMonth()]);
// console.log(day[myDate.getDay()]);
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
// console.log(myDate.getMilliseconds());
// console.log(myDate.getTime());
// let d1 = new Date();
// let year = d1.getFullYear();
// let month = d1.getMonth();
// let date = d1.getDate();
// let day = d1.getDay();
// let hr = d1.getHours();
// let min = d1.getMinutes();
// let sec = d1.getSeconds();
// console.log(`${month+1}-${day}-${year}
// time
// ${hr}:${min}:${sec}`);

// document.write(`${month+1}-${day}-${year}
// time
// ${hr}:${min}:${sec}`)

// let i = 0;
// let id =setInterval(()=>{
//     console.log("i will be extecuted 1 sec");
//     // i++
// }, 1000)

// setTimeout(()=>{
//     console.log("I will be executed after 5 sec");
// }, 5000)


// let id1=setTimeout(()=>{
//     console.log("I will be executed after 5 sec");
// }, 5000)

// setTimeout(()=>{
//     clearInterval(id)
//     clearTimeout(id1)
//     console.log("I will be executed after 2 sec");
// }, 2000)

//Armstrong
// let num = 153;
// let ans = num.toString().split("").reduce((iv, ele, length, arr)=>iv+Math.pow(ele, arr.length),0)
// console.log(ans);


//Desirium
// let num = 135;
// let ans = num.toString().split("").reduce((iv, ele, index, arr)=>iv+Math.pow(ele, index + 1),0)
// console.log(ans);

// console.log(window.screen.height);
// console.log(window.screen.availHeight);
// console.log(window.screen.width);
// console.log(window.screen.availWidth);

// console.log(navigator);
// navigator.geolocation.getCurrentPosition((x)=>{
//     console.log(x);
//     console.log(x.coords.latitude);
//     console.log(x.coords.longitude);
// })

// console.log(location);
// location.reload();
// location.replace("https://www.google.com");

// console.log(history);

//DOM(Document Object Model)

// console.log(window.document);//html
// console.log(window.document.body.style.background="indigo");
// console.log(window.document.head);
// console.log(document.body.h1);

// let h1 = document.getElementById("id1")
// console.log(h1);
// h1.style.color="teal";

// let h2 = document.getElementById("id3")
// h2.style.color="violet"

// let para = document.getElementsByClassName("para");//Like array but not an array.
// para.style.background="midnightblue"
// console.log(para);
// console.log(para[0]);
// para.push(1090)
// console.log(Array.isArray(para));
// let pureArr=Array.from(para)
// console.log(Array.isArray(pureArr));

// pureArr[0].style.background="midnightblue"
// pureArr[1].style.background="yellow"

// for(let it of pureArr){
//     it.style.background="olive"

// }

// for(let i = 0; i < pureArr.length; i++){
//     if (i%2==0) {
//         pureArr[i].style.background="maroon"
//     }
//     else{
//         pureArr[i].style.background="crimson"
//     }
// }

// let div = document.getElementsByTagName("div")
// // console.log(div);
// for(let i = 0; i<div.length; i++){
//     div[i].style.background="Cyan"
// }

// let h4 = document.querySelector("#id4")
// console.log(h4);
// h4.style.background="purple"

// let p = document.querySelector(".para")
// console.log(p);
// p.style.background="magenta"

// let div = document.querySelector("div");
// console.log(div);
// div.style.background="coral"

// let li = document.querySelector("ol li")
// console.log(li);
// li.style.background="royalblue"
// let li = document.querySelectorAll("ol li")
// console.log(li);
// for (let i = 0; i < li.length; i++) {

//     li[i].style.background = "royalblue"
// }

// let h1 = document.createElement("h1");
// console.log(h1);
// h1.innerText = "<h2> I am h2 tag</h2"
// h1.innerHTML = "<h2> I am h2 tag</h2>"
// h1.innerText= "I am an h1 created through js"
// document.body.append(h1)

// let div = document.querySelector("div")
// console.log(div);

// let h2 = document.createElement("h2")
// h2.innerText= "I am an h2"
// console.log(h2);
// div.append(h2)

// let tab = document.createElement("table");
// let tr1 = document.createElement("tr");
// let tr2 = document.createElement("tr");
// let td1 = document.createElement("td");
// let td2 = document.createElement("td");
// let td3 = document.createElement("td");
// let td4 = document.createElement("td");

// td1.innerText=1;
// td2.innerText=2;
// td3.innerText=3;
// td4.innerText=4;

// tr1.append(td1,td2);
// tr2.append(td3,td4);

// tr1.appendChild(td1,td2);

// tab.append(tr1,tr2)
// let section = document.querySelector("section");
// document.body.append(tab)
// section.append(tab)
// tab.style.border="2px solid darkslategray"

// section.innerHTML= `<table style="border: 2px solid darkslategray;">
// <tr>
// <td>1</td><td>2</td>
// </tr>
// <tr>
// <td>3</td><td>4</td>
// </tr>
// </table>`;

// let tab = document.createElement("table");
// tab.style.border="2px solid"
// let count = 0;
// for(let i = 0; i < 10; i++){
//     let tr = document.createElement("tr");
//     for(let j = 0; j < 10; j++){
//         let td = document.createElement("td");
//         td.style.height="40px";
//         td.style.width="40px";
//         td.style.border="5px solid"

// let val = i * 10 + j + 1;
// count++;
// td.innerText=count;
// if(j % 2 === 0){
//     td.style.background="green"
// }
// else{
//     td.style.background="aqua"
// }
// if(i % 2 === 0){
//     td.style.background="green"
// }
// else{
//     td.style.background="firebrick"
// }
// tr.append(td);
//     }
//     tab.append(tr)
// }
// document.body.append(tab);

// let tab = document.createElement("table");
// tab.style.border="2px solid"
// tab.style.width="700px"
// tab.style.height="700px"
// let count = 0;
// for(let i = 0; i < 8; i++){

//     let tr = document.createElement("tr");

//     for(let j = 0; j < 8; j++){
//         let td = document.createElement("td");
//         td.style.height="30px"
//         td.style.width="30px"
//         td.style.border="3px solid"
//         // let val = i * 10 + j + 1;
//         // count++
//         // td.innerText = count;//InnerText is used to write the contents between the html tags.
//         if((i + j) % 2 === 0){
//             td.style.background="crimson"
//         }
//         else{
//             td.style.background="black"
//         }
//         tr.append(td)//td will get added to tr tag
//     }
//     tab.append(tr);//tr tag will get added to the table
// }
// document.body.append(tab);//This statement is used to display the table.

// let nav = document.createElement("nav")
// nav.style.border="2px solid"
// nav.style.height="50px"
// nav.style.display="flex"
// nav.style.justifyItems="center"
// nav.style.alignItems="center"
// let div = document.createElement("div")

// div.append(div1)
// nav.append(div)
// document.body.append(nav)




//   const navBar = document.getElementById("navBar");

//   function createLink(text, href) {
//     const link = document.createElement("a");
//     link.textContent = text;
//     link.href = href;
//     link.classList.add("nav-link");
//     link.addEventListener("mouseover", () => link.classList.add("hover"));
//     link.addEventListener("mouseout", () => link.classList.remove("hover"));
//     return link;
//   }

//   const homeLink = createLink("Home", "file:///C:/Users/chand/OneDrive/Desktop/WebTech/Web/Mygalaxy.html");
//   const servicesLink = createLink("Services", "file:///C:/Users/chand/OneDrive/Desktop/WebTech/Web/web8.html");
//   const contactLink = createLink("Contact", "file:///C:/Users/chand/OneDrive/Desktop/WebTech/Web/Planeterium.html");
//   const aboutLink = createLink("About", "file:///C:/Users/chand/OneDrive/Desktop/WebTech/Web/chessboard.html");
//   const loginLink = createLink("Login", "file:///file:///C:/Users/chand/OneDrive/Desktop/Project/Web/HTML/login.html");

//   navBar.appendChild(homeLink);
//   navBar.appendChild(servicesLink);
//   navBar.appendChild(contactLink);
//   navBar.appendChild(aboutLink);
//   navBar.appendChild(loginLink);

//   // Add styles using JavaScript
//   const style = document.createElement("style");
//   style.textContent = `
//     .nav-link {
//       padding: 10px;
//       margin: 0 10px;
//       text-decoration: none;
//       color: #000;
//     }
//     .nav-link.hover {
//       background-color: #ddd;
//     }
//   `;
//   document.head.appendChild(style);


//   const navBar = document.getElementById("navBar");

//   function createLink(text) {
//     const link = document.createElement("a");
//     link.textContent = text;
//     link.href = "#"; // No navigation, stays on the same page
//     link.classList.add("nav-link");
//     link.addEventListener("mouseover", () => link.classList.add("hover"));
//     link.addEventListener("mouseout", () => link.classList.remove("hover"));
//     return link;
//   }

//   const homeLink = createLink("Home");
//   const servicesLink = createLink("Services");
//   const contactLink = createLink("Contact");
//   const aboutLink = createLink("About");
//   const loginLink = createLink("Login");

//   navBar.appendChild(homeLink);
//   navBar.appendChild(servicesLink);
//   navBar.appendChild(contactLink);
//   navBar.appendChild(aboutLink);
//   navBar.appendChild(loginLink);

//   // Add styles using JavaScript
//   const style = document.createElement("style");
//   style.textContent = `
//     .nav-link {
//       padding: 10px;
//       margin: 0 10px;
//       text-decoration: none;
//       color: #000;
//     }
//     .nav-link.hover {
//       background-color: #ddd;
//     }
//   `;
//   document.head.appendChild(style);


//Navigation bar
// let nav = document.createElement("nav");
// nav.style.display="flex"
// nav.style.justifyContent="space-around"
// nav.style.alignItems = "center"
// nav.style.display="flex"
// nav.style.height ="75px"
// nav.style.background="black"
// nav.style.color = "white"
// nav.style.fontSize = "25px"
// let div1 = document.createElement("div");
// let div2 = document.createElement("div");
// let div3 = document.createElement("div");
// let div4 = document.createElement("div");
// div1.innerText = "Home"
// div2.innerText = "About"
// div3.innerText = "Login"
// div4.innerText = "SignUp"
// nav.append(div1,div2,div3,div4)

// let section = document.querySelector("section")
// section.append(nav)

//Events
let btn = document.querySelector("button")

// btn.addEventListener("click",()=>{
//     document.body.style.background=`#${generateNum()}`
// });

// window.addEventListener("keydown",()=>{
//     document.body.style.background="#"+generateNum()
// })

// window.addEventListener("keyup",()=>{
//     document.body.style.background="#"+generateNum()
// })

// window.addEventListener("resize",()=>{
//     document.body.style.background="#"+generateNum()
// })

// window.addEventListener("mouseout",()=>{
//     document.body.style.background="#"+generateNum()
// })

// window.addEventListener("mouseover",()=>{
//     document.body.style.background="#"+generateNum()
// })

// window.addEventListener("mousein",()=>{
//     document.body.style.background="#"+generateNum()
// })

// window.addEventListener("click",()=>{
//     console.log("I was clicked");
//         document.body.style.background="#"+generateNum()
//     })

// window.addEventListener("keypress",()=>{
//         document.body.style.background="#"+generateNum()
//     })

btn.addEventListener("dblclick",()=>{
        console.log("I was clicked");
        document.body.style.background="#"+generateNum()
    })
function generateNum(){
    let ans = parseInt(Math.random()*900000+100000)
    // log(ans)
    return ans
}


