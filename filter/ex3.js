/* Array.prototype.filter - Exercice 3

Ecrire une fonction keepStarks, qui prend en arguments un tableau de chaînes
(plus spécifiquement, des noms de personnages de Game of Thrones).

La fonction doit renvoyer un tableau ne contenant que les membres de la famille Stark.

Il y a plusieurs façons d'écrire cette fonction, et outre filter, tu auras probablement
besoin d'une de ces méthodes de String: endsWith ou split.

Exemple d'entrée:
  [
    'Bran Stark',
    'Cersei Lannister',
    'Sandor Clegane',
    'Arya Stark',
    'Yara Greyjoy',
    'Sansa Stark'
  ]

Sortie attendue:
  ['Bran Stark', 'Arya Stark', 'Sansa Stark']

 */
'use strict';

//----------long version without filter

// function keepStarks(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].endsWith('Stark')) {
//     newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }

// ----------ES6 version

function keepStarks(names) {
  return(names.filter(array => array.endsWith('Stark') ));
}


// Ne pas modifier l'export
module.exports = keepStarks;
