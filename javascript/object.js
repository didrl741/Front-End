
// Object
// JS의 type중 하나.
// a collection of related data and functionality.
// Nearly all objects in JS are instances of object.
// 만드는법 : class 이용, {} 이용.

// 1. Literals and properties
const obj1 = {};                // 'object literal' syntax
const obj2 = new Object();      // 'object constructor' syntax

const name = 'song';
const age=4;

function print(name, age) {     // 인자가 많아질수록 힘들다.
    console.log(name);
    console.log(age);
}          

const yanggi = {name: 'song', age: 4};

function print2(person) {       // Object 이용 : 편하다.
    console.log(person.name);
    console.log(person.age);
}

print2(yanggi);


yanggi.hasJob=false;        // JS는 동적언어라, 이런것도 가능하다.(뒤늦게 추가)
delete yanggi.hasJob;       // 다시 삭제도 가능하다..


// 2. Computed properties
// key는 string으로 해야 함.
console.log(yanggi.name);       // 코딩할땐 이렇게 하면 됨.
console.log(yanggi['name']);    // computed property. 실시간으로 원하는 key를
                                // 받아오고 싶을 때 사용. (동적)

function printValue(obj, key) {
    console.log(obj[key]);      // 이럴 때 사용. obj.key는 오류.
}
printValue(yanggi, 'name');


// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'jim', age: 2};
// 이렇게 일일이 만들기 귀찮다 -> 생성자를 쓰자.


// 4. Constructor function
function Person(name, age) {    // 대문자.
    this.name = name;
    this.age = age;
}

const person4 = new Person('sejin', 28);

console.log(person4);



// 5. in operator : property existence check (key in obj)
console.log('name' in person1);


// 6. for..in VS for..of
// 나중에 프로젝트하면 굉장히 유용.
console.clear();

for(key in person1) {
    console.log(key);
}

// for ..of : 배열과같은 순차리스트에서 사용.
const arr = [1,3,4,5];
for( value of arr)
{
    console.log(value);
}



// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: 20};
const user2 = user;
user2.name = 'coder';
console.log(user);      // 같은 ref을 가리키기때문에, 바뀜.

// 그렇다면, 내용을 복사해서 다른 ref을 가리키는 방법은?
//Object.assign() 사용.
const user4 = {};
Object.assign(user4, user);

const user3 = Object.assign({}, user);
console.log(user3);

const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);
// fruit2가 더 뒤의 인자기 때문에, 같은 key가 있으면 fruit2가 적용됨.