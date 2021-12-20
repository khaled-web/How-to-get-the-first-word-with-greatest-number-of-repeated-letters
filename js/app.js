// return first word with greatest number of repeated letters

function countLetters(str) {
 let tempArr = str.split(' ');
 tempArr = tempArr.map(e => {
  let tempArr = e.toLowerCase().split('');
  return tempArr.reduce((acc, cur) => {
   acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
   if (acc[cur] > acc.max) {
    acc.max = acc[cur];
   }
   return acc;
  }, {
   max: 1,
   word: e
  });
 })

 let amount = 1;
 let word = '';
 for (let item of tempArr) {
  if (item.max > amount) {
   amount = item.max;
   word = item.word;
  }
 }
 if (amount > 1) {
  return word
 }

 return -1;
}

console.log(countLetters("I sympathise with you"));