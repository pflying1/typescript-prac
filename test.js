function exampleOne(object) {
    var value = [];
    for (var key in object) {
        value.push(key);
    }
    return value;
}
var test = {
    name: "dd",
    age: "22",
    job: "ㄱㅂㅈ",
};
console.log(exampleOne(test));
