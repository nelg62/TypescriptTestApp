// https://www.freecodecamp.org/news/typescript-for-beginners-guide/

// 1. Number
let age: number = 30;
let weight: number = 65.5;

// 2. string
let name1: string = "John Doe";
let greeting: string = `Hello, ${name1}`;

// 3. boolean
let isAdult: boolean = true;
let isStudent: boolean = false;

// 4. object
let person: object = { name: "John Doe", age: 30 };
let date: object = new Date();

// 5. null
let emptyValue: null = null;
let anotherEmptyValue: null = null;

// 6. undefined
let unassignedValue: undefined = undefined;
let anotherUnassignedValue: undefined;

// 7. symbol
let symbol1: symbol = Symbol("symbol1");
let symbol2: symbol = Symbol("symbol2");

// 8. bigint
let bigNumber: bigint = 9007199254740993n;
let anotherBigNumber: bigint = BigInt(9007199254740993);

// 9. any
let variable: any = "I an a string";
variable = 42;

// 1. Type Aliases
type Point = {
  x: number;
  y: number;
};

let origin1: Point = { x: 0, y: 0 };

// 2. Intersection Types
type Printable = {
  print: () => void;
};

type Loggable = {
  log: () => void;
};

type Logger = Printable & Loggable;

let logger: Logger = {
  print: () => console.log("Printing..."),
  log: () => console.log("Logging..."),
};

// 3. Union Types
type ID = string | number;
let id: ID = "123";
id = 123;

// 4. Type Assertions
let value: any = "Hello TypeScript!";
let length1: number = (value as string).length;

// 1. Function Declarations
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}
greet("Alice");

// 2.Arrow Functions
const greet1 = (name: string): void => {
  console.log(`Hello, ${name}!`);
};
greet1("Bob");

// 3. Function Types
function add(a: number, b: number): number {
  return a + b;
}
let sum: number = add(1, 2);

// 4. Optional and Default Parameters
function greet2(name: string, greeting: string = "Hello"): void {
  console.log(`${greeting}, ${name}!`);
}
greet2("Charlie");
greet2("Charlie", "Hi");

// 5. Rest Parameters
function sum1(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}
let total: number = sum1(1, 2, 3, 4, 5);

// 1. Class Declaration
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet3(): void {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

let john = new Person("John", 25);
john.greet3();

// 2. Inheritance
class Employee extends Person {
  department: string;

  constructor(name: string, age: number, department: string) {
    super(name, age);
    this.department = department;
  }

  greet3(): void {
    super.greet3();
    console.log(`I work in ${this.department}`);
  }
}

let jane = new Employee("Jane", 30, "HR");
jane.greet3();

// 3. Abstract Classes
abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

let circle = new Circle(5);
console.log(circle.area());

// 4. Encapsulation
class Person1 {
  private name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

let john1 = new Person1("John", 25);
console.log(john1.name);
console.log(john1.age);

// 5. Polymorphism
class Animal {
  speak(): void {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak(): void {
    console.log("Dog barks");
  }
}

let animal: Animal = new Dog();
animal.speak();

// 6. Access Modifiers
class Animal1 {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

let dog = new Animal1("Dog");
console.log(dog.getName());

// 1. Interface Declaration
interface Person2 {
  name: string;
  age: number;
}

let john2: Person2 = { name: "John", age: 25 };

// 2. Optional Properties
interface Person3 {
  name: string;
  age?: number;
}

let alice: Person3 = { name: "Alice" };

// 3. Function Types
interface GreetFunction {
  (name: string, age: number): string;
}

let greet4: GreetFunction = function (name: string, age: number): string {
  return `Hello, m name is ${name} and I am ${age} years old.`;
};

// 4. Extending Interfaces
interface Animal2 {
  name: string;
}

interface Dog1 extends Animal2 {
  breed: string;
}

let myDog: Dog1 = { name: "Rex", breed: "German Shepherd" };

// 1. Numeric Enums
enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

let today: Day = Day.Monday;

// String Enums
enum Month {
  January = "January",
  February = "February",
  March = "March",
  April = "April",
  May = "May",
  June = "June",
  July = "July",
  August = "August",
  September = "September",
  October = "October",
  November = "November",
  December = "December",
}

let currentMonth: Month = Month.June;

// 3. Computed Enums
enum Color {
  Red = 1,
  Green = Math.pow(2, 2),
  Blue = Math.pow(2, 3),
}

let color: Color = Color.Green;

// 4. Reverse Mapping
enum Day1 {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

let dayName: string = Day1[1];

// 1. Generic Functions
function identity<T>(value: T): T {
  return value;
}

let result1: number = identity<number>(42);
let result2: string = identity<string>("Hello, TypeScript!");

// 2. Generic Classes
class Box<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}

let box1: Box<number> = new Box<number>(42);
let box2: Box<string> = new Box<string>("Hello, TypeScript!");

// 3. Generic Constraints
interface Printable1 {
  print(): void;
}

function printValue<T extends Printable>(value: T): void {
  value.print();
}

class Person4 implements Printable1 {
  print(): void {
    console.log("Printing person...");
  }
}

let person1: Person4 = new Person4();
printValue(person1);
