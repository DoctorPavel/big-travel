// Using ECMAScript 6 (ES6)
class Person {

    constructor(fullName, favColor) {
        this.name = fullName;
        this.color = favColor;
    }

    
    greet() {
        console.log('Hey there, ' + this.name + ' color: ' + this.color + '.');
    };
}

// module.exports = Person;
export default Person;