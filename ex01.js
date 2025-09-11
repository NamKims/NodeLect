// 2주차 서버프로그래밍

console.log("hello World");

function first() {
    second()
    console.log("First")
}

function second() {
    third()
    console.log("Second")
}

function third() {
    console.log("Third")
}

function run() {
    console.log("3초")
}

setTimeout(run, 3000);  //run이라는 함수를 3000ms 이후에 실행
                        //setTimeout은 백그라운드에서 돌아감
first();

let a = 1;
a = 0;

const b = 1;
//b = 0; 상수 변수에 값 변경 불가능

let num1 = 1;
let num2 = 2;
let result = 3;
//1 더하기 2는 3

let str = `${num1} 더하기 ${num2}는 ${result}`; //변수를 문자열 안에 넣는 구조
console.log(str);

const sayNode = function() {   //익명함수
    console.log('Node');
}

let es = 'ES';
const newObj = {            //작은 클래스 개념
    Func: sayNode,           //키맵
    sayJS:function() {       //:function()부분 지워도 잘 동작함
        console.log('JS');
    }
} 

newObj[es+6] = 'Fantastic'; //ES6에 Fansastic이라는게 만들어짐 위에 es6이라는거랑 똑같은거임
newObj.Func();
newObj.sayJS();
console.log(newObj.ES6);

var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    add : ['한누리관', '송백관'],
    logfriends: function() {
        var that = this;
        this.add.forEach(addlist=>{
            this.friends.forEach(friend=> {
                console.log(this.name, friend, addlist);
            }
        }),
    },
}; 
relationship1.logfriends();