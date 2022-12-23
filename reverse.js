//Reverse Words
function reverseWords(kalimat) {
  let arrSplit = kalimat.split(' ');
  let arrReverse = arrSplit.reverse();
  let arrJoin = arrReverse.join(' ');

  console.log(arrJoin);
}

reverseWords('Saya belajar Javascript');
