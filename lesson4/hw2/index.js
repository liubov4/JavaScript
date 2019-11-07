const m = 0;
const n = 15;
let res = 1;

for (let i = m; i <= n; i++) {
    if (i % 2 == 0 && i % 4) {
        res += i;
    }
}
for (let i = m; i <= n; i++) {
    if (i % 3) {
        res -= i;
    }
}
for (let i = m; i <= n; i++) {
    if (i % 4) {
        res *= i;
    }
}
for (let i = m; i <= n; i++) {
    if (i % 5) {
        console.log(i);
    } else {
        continue;
    }
}
console.log("Result: ", +res);