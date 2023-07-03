
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function choice (it) {
  return it.at(getRandomInt(0,it.length))
}


let arr = ["mazin", "ziad", "ahmed"]

const res = choice(arr)
console.log(res)
