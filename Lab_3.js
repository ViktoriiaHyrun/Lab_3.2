let K = 0.01;
let L = 3;
let x = 0;
let y = 0;
let a = 0;
let b = 0;

const x_values = [1, 2, 6.5];
console.log('Please enter value for X');
x = parseFloat(prompt());

a = Math.exp((1.0 / 5.0) * Math.log(7.002 * Math.sqrt(K) - 1 + 1 / 10 * (Math.exp(x) + Math.exp(-x))));
console.log('Result is A=', a);

b = Math.log10(L) * (Math.cos(Math.PI / 5) + Math.cos(3 * Math.PI / 5));
console.log('Result is B=', b);

if (Math.pow(a, 2) + Math.pow(b, 2) > 0.1) {
    y = Math.atan(5 * Math.pow(a, 2) + 7 * Math.pow(b, 2));
} else if (Math.pow(a, 2) + Math.pow(b, 2) <= 0.1) {
    y = Math.asin(5 * Math.pow(a, 2) + 7 * Math.pow(b, 2));
}
console.log('Result is Y=', y);
