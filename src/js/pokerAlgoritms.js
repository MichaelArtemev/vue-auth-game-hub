export function findPairs(arr) {
  let allSuits = [];
  let cutNames = [];
  for (let i = 0; i <= 4; i++) {
      if(arr[i].length === 7){
        allSuits.push(arr[i].substring(2, arr[i].length - 4));
      }
      if(arr[i].length === 6){
        allSuits.push(arr[i].substring(1, arr[i].length - 4));
      }
    cutNames.push(Number(arr[i].substring(0, arr[i].length - 5)));
  }
  let allSuitOneKind = [];
  for(let i = 0; i <= 4; i++){
      if(i === 4 && allSuits[i] === allSuits[i - 1]){
        allSuitOneKind.push(allSuits[i])
      }
    if (allSuits[i] === allSuits[i + 1]){
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
      alert("ПАРА ТУЗОВ!")
    } else {
      alert("пара ниже валетов! проигрыш")
    }
  }
  if (arr2.length === 2 && arr2[0] >= 11) {
    alert("ПАРА ВЫШЕ ВАЛЕТОВ! ВЫИГРЫШ")
  }
  if (arr2.length === 3) {
    alert("СЕТ! ВЫИГРЫШ")
  }
  if (arr2.length === 4) {
    let careCheck = [];
    for (let i = 0; i <= 3; i++) {
      if (arr2[0] === arr2[i]) {
        careCheck.push(arr2[i])
      }
    }
    if (careCheck.length === 4) {
      alert("КАРЭ! ВЫИГРЫШ")
    } else {
      alert("ДВЕ ПАРЫ! ВЫИГРЫШ")
    }
  }
  if (arr2.length === 5) {
    alert("ФУЛЛ ХАУС! ВЫИГРЫШ")
  }

  let diff = 0;
  let diffArr = [];
  if (arr2.length === 0){

  }
  if (arr2.length === 0) {
    cutNames.reverse();
    let royalTemplate = [13,12,11,10,1];
    let arrEquals = 0;
    for(let i = 0; i <= 4; i++){
        if (cutNames[i] === royalTemplate[i]){
            arrEquals++;
        }
    } 
       
    for (let i = 4; i >= 0; i--) {      
      diff = cutNames[i] - cutNames[i - 1];
      diffArr.push(diff);
    }
    diffArr.reverse().shift();
    let currentDiff = [];
    for(let i = 0; i <= 3; i++){
       if(diffArr[i] === -1){
        currentDiff.push(diffArr[i]);
       }
    }
    if(currentDiff.length === 4 && allSuitOneKind.length === 5){
        alert("СТРИТ ФЛЮШ! ВЫИГРЫШ")
    }
    if(currentDiff.length === 4 && allSuitOneKind.length != 5){
        alert("СТРИТ! ВЫИГРЫШ")
    }
    if(arrEquals === 5 && allSuitOneKind.length === 5){
        alert("ФЛЮШ РОЯЛ! ВЫИГРЫШ")
    }else{
        if(currentDiff.length != 4 && allSuitOneKind.length === 5){
            alert("ФЛЮШ! ВЫИГРЫШ")
        }
    }    
  }
}
