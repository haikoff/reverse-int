module.exports = function reverse (n) {
  if(n<0){
        n = n*(-1)
    }
  return String(n).split("").reverse().join("");
}
