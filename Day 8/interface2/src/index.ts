interface Person {
  firstName: string;
  lastName: string;
  greet: () => string;
}
let employee: Person = {
  firstName: "a",
  lastName: "b",
  greet: (): string => {
    return "Hello";
  }
};
console.log(employee);
