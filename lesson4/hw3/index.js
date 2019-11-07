const m = 0;
const n = 1000;
let sum = 0;
let result = 0;
const j = 5000;

for (let i = m; i <= n; i++) {
    if (i % 2 === 0) {
        sum += i;
        console.log(i + " Found");
    } else if (sum * 5 > j) {
        console.log("Bigger");
    } else {
        console.log("Smaller or equal");
    }

}