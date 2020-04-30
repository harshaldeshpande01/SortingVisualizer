export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  
  export function getInsertionSortAnimations(array) {
    if (array.length <= 1) return array;
  
    const animations = [];
  
    const auxiliaryArray = array;
  
    insertionSortHelp(auxiliaryArray, animations);
  
    return animations;
  }
  
  function insertionSortHelp(arr, animations) {
    var i, key, j;
    for (i = 1; i < arr.length; i++) {
      key = arr[i];
      animations.push([i, -1]);
      j = i - 1;
  
      /* Move elements of arr[0..i-1], that are  
      greater than key, to one position ahead  
      of their current position */
      while (j >= 0 && arr[j] > key) {
        animations.push([j, -1]);
        animations.push([j, -2]);
        animations.push([j + 1, arr[j]]);
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      animations.push([j + 1, key]);
      arr[j + 1] = key;
      animations.push([i, -2]);
    }
  }
  
  
  export function getCountingSortAnimations(array) {
    if (array.length <= 1) return array;
  
    const animations = [];
  
    //const auxiliaryArray = array;
  
    countSort(array, animations);
  
    return animations;
  }
  
  function countSort(arr, animations) {
    var max = Math.max(...arr);
    var min = Math.min(...arr);
    var range = max - min + 1;
  
    //const count = [];
    const count = new Array(range).fill(0);
    //const output = [];
    const output = new Array(arr.length).fill(0);
    //vector < int > count(range), output(arr.size());
    for (let i = 0; i < arr.length; i++) {
      animations.push([i, -1]);
      animations.push([i, -2]);
      count[arr[i] - min]++;
    }
  
    for (let i = 1; i < count.length; i++) {
      count[i] += count[i - 1];
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      output[count[arr[i] - min] - 1] = arr[i];
      count[arr[i] - min]--;
    }
  
    for (let i = 0; i < arr.length; i++) {
      animations.push([i, -1]);
      animations.push([i, -2]);
      animations.push([i, output[i]]);
      arr[i] = output[i];
    }
  }
  
  export function getbubbleSortAnimations(array) {
  
    if (array.length <= 1) return array;
  
    const animations = [];
  
    const auxiliaryArray = array.slice();
  
    bubbleSortHelp(auxiliaryArray, animations);
  
    return animations;
  
  }
  
  function bubbleSortHelp(
    arr,
    animations,
  ) {
  
    let sorted, j = 0;
    do {
      sorted = false;
      for (let i = 0; i < arr.length - 1 - j; i++) {
        animations.push([i, i + 1, true]);
  
        animations.push([i, i + 1, true]);
  
        if (arr[i] > arr[i + 1]) {
  
          animations.push([i, arr[i + 1], false]);
  
          animations.push([i + 1, arr[i], false]);
  
          let temp = arr[i];
  
          arr[i] = arr[i + 1];
  
          arr[i + 1] = temp;
  
          sorted = true;
        }
  
  
      }
      j++;
  
    } while (sorted);
  
  }