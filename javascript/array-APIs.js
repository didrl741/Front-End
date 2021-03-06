// Q1. make a string out of an array
  {
    const fruits = ['apple', 'banana', 'orange'];

    const result = fruits.join('-');    // ๋ํดํธ๋ ','
    console.log(result);
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '๐, ๐ฅ, ๐, ๐';

    const result = fruits.split(', ');
    console.log(result); 
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];

    array.reverse();        // ์๊ธฐ์์ ์๊ฒ ์ ์ฉ.
    console.log(array);
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];

    // const result=array.splice(0,2);
    // console.log(result);
    // console.log(array);             // ์๊ฐ์ ๋ณํ๋ฅผ ์ค-> slice๋ฅผ ์ฐ์.

    const result = array.slice(2,5);
    console.log(result);                // 3,4,5
    console.log(array); 
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    const result = students.find(function (student, index) {
        console.log(student,index);
    })

    const result2 = students.find(function (student) {
        return student.score===90;      // ๋ชจ๋  ์์์์ ์์ฐจ
                    //์ ์ผ๋ก ์คํ๋๋ค๊ฐ, true๋ฉด ๊ทธ ๊ฐ์ฒด return
    })

    console.log(result2);

    // => ์ด์ฉ:
    const result3 = students.find( (student) => student.score===90); 
  }
  
  // Q6. make an array of enrolled students
  {
      const result = students.filter( (student) => student.enrolled===true );
      console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      const result = students.map((student) => student.score );
      console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
      const result = students.some((student) => student.score < 50 );
      console.log(result);      // ํ๋๋ผ๋ ์์ผ๋ฉด true

      const result2 = students.every((student) => student.score < 50 );
      console.log(result2);     // ๋ชจ๋ ๋ง์กฑํด์ผ true
  }
  
  // Q9. compute students' average score
  {
    const result = students.reduce( (prev, curr) => prev + curr.score, 0);
    console.log(result/students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
      const temp = students.map((student) => student.score);  // ์ ์๋ฐฐ์ด
      const result = temp.join();
      console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
      const result = students.map((student) => student.score)
      .sort((a,b) => a-b)       // ์ค๋ฆ์ฐจ์ ์ ๋ ฌ
      .join();
      console.log(result);
  }