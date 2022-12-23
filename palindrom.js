// Palindrome
function palindrom(kata) {
  kata = kata.toLowerCase();

  for (let i = 0; i < kata.length / 2; i++) {
    if (kata[i] !== kata[kata.length - 1 - i]) {
      return console.log(kata + '= ini Bukan Palindrom');
    }
  }
  return console.log(kata + ' = ini adalah Palindrom');
}

palindrom('Malam');
