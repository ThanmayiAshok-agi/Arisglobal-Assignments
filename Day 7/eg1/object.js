const add = (...args) => {
  let result = 0;
  for (let arg of args) result += arg;
  return console.log(result);
};
add(1, 3, 5, 7);
