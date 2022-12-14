const ages = [12, 23, 43, 23, 76, 78];
const ages2 = [54, 67, 89, 23, 56, 67, 56];
const ages3 = [34, 56, 34, 43, 23, 54, 76];
// const totalages = ages.concat(ages2).concat(ages3);
const totalages = [...ages, ...ages2, 45, ...ages3];
console.log(totalages);

const minister = 380;
const osi = 430;
const buisness = 2200;
const takaPoisa =[1100, 2200, 3300, 4300];
const maximum = Math.max(minister, osi, buisness);
const maximum2 =Math.max(...takaPoisa);
console.log(maximum2);
console.log(maximum);

