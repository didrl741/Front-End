'use strict';

// OOP
// class : template.
// object : instance of a class.
// JS class : introduced in ES6.

// 1. Class declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const person1 = new Person('yanggi', 28);
console.log(person1.name);

person1.speak();


// 2. Getter and setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this. age = age;
    }

    get age() {
        return this._age;       // age라고 하면 콜벡오류.
    }

    set age(value) {
        if(value < 0) {
            throw Error('age can not be negative!!');
        }
        this._age = value;
    }
}

const user1 = new User('song', 'yanggi', 28);
console.log(user1.age);


// 3. Fields (public, private)
// 만들어진지 얼마 안됨!
class Experiment {
    publicFireld=2;             // default : public
    #privateField=0;            // #
}
const experiment = new Experiment();
console.log(experiment.publicFireld);
console.log(experiment.privateField);   // undefined


// 4. Static properties and methods
// 만들어진지 얼마 안됨.
// 인스턴스에서 쓰면 undefined. 클래스이름으로 써야 함!
class Article {
    static publisher = 'Dream coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);    // undefined

console.log(Article.publisher);     //2.
Article.printPublisher();


// 5. Inheritance
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width*this.height;
    }
}

class Rectangle extends Shape {}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());

class Triangle extends Shape {

    draw() {
        super.draw();
        console.log('triangle!!');
    }

    getArea() {                             // Overriding!!
        return this.width*this.height/2;
    }

    toString() {
        return `Triangle, Color = ${this.color}`;
    }
}

const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking : instanceOf
console.log(rectangle instanceof Rectangle);
console.log(rectangle instanceof Triangle);
console.log(rectangle instanceof Shape);
console.log(rectangle instanceof Object);
// Object : 모든 오브젝트의 최상위 Class.
console.log(triangle);
console.log(triangle.toString());