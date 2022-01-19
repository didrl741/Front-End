// JSON
// : JavaScript Object Notation
// 서버와 클라이언트가 통신을 할 때(http), JS object를 JSON으로 만들어서 주고받는다.
// JSON: text-based structure
// Key - value pairs.
// used for serialization and transmission of data in the network.
// independent programming language and platform! (c, c++, python등에서도
// JSON으로 serialization 된것을 그 언어의 특징에 맞게 다시 객체로 변환 가능 )

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);        // bool -> json
console.log(json);

json = JSON.stringify(['apple', 'banana']); // array -> json
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'while',
    size: null,
    birthDate: new Date(),
    jump: () => {       // 함수 : json에 포함X. object에 있는 data가 아니기 때문.
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name','color']);        // obj의 특정 property만 
console.log(json);                              //전달하고싶을 때.

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value;
});         
console.log(json);                           


// 2. JSON to Object
// parse(json)
const obj = JSON.parse(json);
console.log(obj);
//obj.jump();       함수는 json으로 전달안되기 때문에 이것또한 오류.

console.log(rabbit.birthDate.getDate());
//console.log(obj.birthDate.getDate()); 오류.
// Date()가 json으로 그냥 string변환되고, obj로 올때 그냥 string으로 오기 때문.
// 해결책 : 콜백 함수!

const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key==='birthDate' ? new Date(value) : value;
});     // key가 birthDate면 new Date로, 아니면 그냥 value 리턴.
console.log(obj2);
