function dubol(num){
    return num * 2;
}
const total = dubol(20);
console.log(total);

const addDubol = num => num * 3;
const total2 = addDubol(10);
console.log(total2);

const add = (x, y) => (x + y);
const total3 = add(20, 40);
console.log(total3);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result4 = doMath(20, 9);
console.log(result4);


