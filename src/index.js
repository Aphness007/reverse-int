module.exports = function reverse (n) {
    // let reverse = String(n).split("");
    // if(n < 0) reverse.shift();
    // return +reverse.reverse().join("");
    let reverse = [...String(Math.abs(n))];
    return +reverse.reverse().join("");
}
