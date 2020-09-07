/**
 * проверяет массив на одну из выигрышныхх комбинаций
 * @param {Array} array - передаваемый массив из currentDeck
 * @returns {Array} array - новый массив состоящий из комбинации для множителя и оповещении
 * @example
 * 
 * getResult(["1b.jpg","1b.jpg","1b.jpg","1b.jpg","1b.jpg",]);
 * //=> [0, "ПРОИГРЫШ"]
 */
export function getResult(arr) {
  console.log(arr);
  console.log('1arr');


  let allSuits = [];
  let cutNames = [];
  let combineNumber = [];
  //вырезает информацию о масти из str
  for (let i = 0; i <= 4; i++) {
    if (arr[i].length === 7) {
      allSuits.push(arr[i].substring(2, arr[i].length - 4));
    }
    if (arr[i].length === 6) {
      allSuits.push(arr[i].substring(1, arr[i].length - 4));
    }
    cutNames.push(Number(arr[i].substring(0, arr[i].length - 5)));
  }
  let allSuitOneKind = [];
  for (let i = 0; i <= 4; i++) {
    if (i === 4 && allSuits[i] === allSuits[i - 1]) {
      allSuitOneKind.push(allSuits[i])
    }
    if (allSuits[i] === allSuits[i + 1]) {
      allSuitOneKind.push(allSuits[i]);
    };
  }

  cutNames = cutNames.sort(function (a, b) {
    return a - b;
  });

  //   алгоритм получения пар
  let ks = [];
  for (let value of cutNames) {
    ks[value] = (ks[value] || 0) + 1;
  }
  let arr2 = [];
  for (let i in cutNames) {
    if (ks[cutNames[i]] > 1) {
      arr2.push(cutNames[i]);
    }
  }
  if (arr2.length === 2 && arr2[0] < 11) {
    if (arr2[0] === 1) {
      combineNumber = [1, "ПАРА ВЫШЕ ВАЛЕТОВ! ВЫИГРЫШ"];
      return combineNumber;
    } else {
      combineNumber = [0, "пара ниже валетов! проигрыш"];
      return combineNumber;
    }
  }
  if (arr2.length === 2 && arr2[0] >= 11) {
    combineNumber = [1, "ПАРА ВЫШЕ ВАЛЕТОВ! ВЫИГРЫШ"];
    return combineNumber;
  }
  if (arr2.length === 3) {
    combineNumber = [3, "ТРОЙКА! ВЫИГРЫШ"];
    return combineNumber;
  }
  if (arr2.length === 4) {
    let careCheck = [];
    for (let i = 0; i <= 3; i++) {
      if (arr2[0] === arr2[i]) {
        careCheck.push(arr2[i])
      }
    }
    if (careCheck.length === 4) {
      combineNumber = [7, "КАРЭ! ВЫИГРЫШ"];
      return combineNumber;
    } else {
      combineNumber = [2, "ДВЕ ПАРЫ! ВЫИГРЫШ"];
      return combineNumber;
    }
  }
  if (arr2.length === 5) {
    combineNumber = [6, "ФУЛЛ ХАУС! ВЫИГРЫШ"];
    return combineNumber;
  }
  //Флеш роял алгоритм
  let diff = 0;
  let diffArr = [];
  if (arr2.length === 0) {
    cutNames.reverse();
    let royalTemplate = [13, 12, 11, 10, 1];
    let arrEquals = 0;
    for (let i = 0; i <= 4; i++) {
      if (cutNames[i] === royalTemplate[i]) {
        arrEquals++;
      }
    }

    for (let i = 4; i >= 0; i--) {
      diff = cutNames[i] - cutNames[i - 1];
      diffArr.push(diff);
    }
    diffArr.reverse().shift();
    let currentDiff = [];
    for (let i = 0; i <= 3; i++) {
      if (diffArr[i] === -1) {
        currentDiff.push(diffArr[i]);
      }
    }
    if (currentDiff.length === 4 && allSuitOneKind.length === 5) {
      combineNumber = [8, "СТРИТ ФЛЮШ! ВЫИГРЫШ"];
      return combineNumber;
    }
    if (currentDiff.length === 4 && allSuitOneKind.length != 5) {
      combineNumber = [4, "СТРИТ! ВЫИГРЫШ"];
      return combineNumber;
    }
    if (arrEquals === 5 && allSuitOneKind.length === 5) {
      combineNumber = [9, "ФЛЮШ РОЯЛ! ВЫИГРЫШ"];
      return combineNumber;
    } else {
      if (currentDiff.length != 4 && allSuitOneKind.length === 5) {
        combineNumber = [5, "ФЛЮШ! ВЫИГРЫШ"];
        return combineNumber;
      }
    }
    if (currentDiff.length != 4 && allSuitOneKind.length != 5) {
      combineNumber = [0, "ПРОИГРЫШ"];
      return combineNumber;
    }
  }
}

export function getMoney(combo, factorCoin) {
  let stopResult = 0;
  switch (combo) {
    case 0:
        return stopResult = 0;
      break;
    case 1:
      switch (factorCoin) {
        case 1:
          return stopResult = 25 * 1
          break;
        case 2:
          return stopResult = 25 * 2
          break;
        case 3:
          return stopResult = 25 * 3
          break;
        case 4:
          return stopResult = 25 * 4
          break;
        case 5:
          return stopResult = 25 * 5
          break;
      }
      break;
    case 2:
        switch (factorCoin) {
            case 1:
              return stopResult = 25 * 2
              break;
            case 2:
              return stopResult = 25 * 4
              break;
            case 3:
              return stopResult = 25 * 6
              break;
            case 4:
              return stopResult = 25 * 8
              break;
            case 5:
              return stopResult = 25 * 10
              break;
          }
      break;
    case 3:
        switch (factorCoin) {
            case 1:
              return stopResult = 25 * 3
              break;
            case 2:
              return stopResult = 25 * 6
              break;
            case 3:
              return stopResult = 25 * 9
              break;
            case 4:
              return stopResult = 25 * 12
              break;
            case 5:
              return stopResult = 25 * 15
              break;
          }
      break;
    case 4:
        switch (factorCoin) {
            case 1:
              return stopResult = 25 * 4
              break;
            case 2:
              return stopResult = 25 * 8
              break;
            case 3:
              return stopResult = 25 * 12
              break;
            case 4:
              return stopResult = 25 * 16
              break;
            case 5:
              return stopResult = 25 * 20
              break;
          }
      break;
    case 5:
        switch (factorCoin) {
            case 1:
              return stopResult = 25 * 6
              break;
            case 2:
              return stopResult = 25 * 12
              break;
            case 3:
              return stopResult = 25 * 18
              break;
            case 4:
              return stopResult = 25 * 24
              break;
            case 5:
              return stopResult = 25 * 30
              break;
          }
      break;
    case 6:
        switch (factorCoin) {
            case 1:
              return stopResult = 25 * 9
              break;
            case 2:
              return stopResult = 25 * 18
              break;
            case 3:
              return stopResult = 25 * 27
              break;
            case 4:
              return stopResult = 25 *36
              break;
            case 5:
              return stopResult = 25 * 45
              break;
          }
      break;
    case 7:
        switch (factorCoin) {
            case 1:
              return stopResult = 25 * 25
              break;
            case 2:
              return stopResult = 25 * 50
              break;
            case 3:
              return stopResult = 25 * 75
              break;
            case 4:
              return stopResult = 25 * 100
              break;
            case 5:
              return stopResult = 25 * 125
              break;
          }
      break;
    case 8:
        switch (factorCoin) {
            case 1:
              return stopResult = 25 * 50
              break;
            case 2:
              return stopResult = 25 * 100
              break;
            case 3:
              return stopResult = 25 * 150
              break;
            case 4:
              return stopResult = 25 * 200
              break;
            case 5:
              return stopResult = 25 * 250
              break;
          }
      break;
    case 9:
        switch (factorCoin) {
            case 1:
              return stopResult = 25 * 250
              break;
            case 2:
              return stopResult = 25 * 500
              break;
            case 3:
              return stopResult = 25 * 750
              break;
            case 4:
              return stopResult = 25 * 1000
              break;
            case 5:
              return stopResult = 25 * 4000
              break;
          }
      break;    
  }
}
