function exampleOne(object: object) {
  let value: Array<string> = [];
  for (let key in object) {
    value.push(key);
  }
  return value;
}

let test = {
  name: "dd",
  age: "22",
  job: "ㄱㅂㅈ",
};

console.log(exampleOne(test));
