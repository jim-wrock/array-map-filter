/* Array.prototype.map - Exercice 5

Ecrire une fonction multiplyOddIndices, qui prend en entrée un tableau de nombres.
* Chaque nombre situé à un index pair doit être renvoyé tel quel
* Chaque nombre situé à un index impair doit être renvoyé multiplié par son index

Il va donc falloir utiliser le 2ème argument de la fonction passée à map.

Exemple de tableau d'entrée:
  [3, 8, 11, 13, 19, 7]
Tableau renvoyé par multiplyOddIndices:
  [3, 8, 11, 39, 19, 35]
*/

'use strict';

const test1 = [3, 8, 11, 13, 19, 7];

// function funk(array1) {
//   let arrayMultiplied = array1;
//   for (let i = 0; i < array1.length; i++) {
//     if (i % 2 === 0) { 
//       arrayMultiplied[i] = array1[i];
//     } else { 
//       arrayMultiplied[i] = array1[i] * i;
//     }
//   }
//   return arrayMultiplied;
// }

function multiplyOddIndices(numbers) {
  return numbers.map(function(number, index) {
    if (index % 2 === 0) {
      return number;
    } else {
      return number * index;
    }
    // return index % 2 == 0 ? number : number * index ;
  });
}

console.log(multiplyOddIndices(test1));

module.exports = multiplyOddIndices;