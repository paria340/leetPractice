
const twoSum = function (nums, target) {
    nums = [3, 2, 4, 7, 11]
    target = 6

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            // let difference = 6 - nums[i]
            if (nums[j] == target - nums[i]) {
                return [i, j]
            }
        }
    }
};

// console.log(twoSum())


function reverseNum(num) {

    return (
        parseFloat(
            num
                .toString()
                .split('')
                .reverse()
                .join('')
        ) * Math.sign(num)
    )
}


// console.log(reverseNum(-12223))

function reversedOrNot(num) {

    if (num <= -1) {
        return false
    } else {
        const reverse =
            parseFloat(
                num
                    .toString()
                    .split('')
                    .reverse()
                    .join('')
            ) * Math.sign(num)
        if (num === reverse) {
            return true
        } else {
            return false
        }
    }



}

// console.log(reversedOrNot(-121))

const table = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}


const romanToInt = function(string){
    
    string.split()
    let sum = 0;

    for(let i=0; i < string.length; i++){
        if(table[string[i]] < table[string[i+1]]){
            sum += table[string[i+1]] - table[string[i]]
            i++
        }else{
            sum += table[string[i]]
        }
    }
    return sum
}

// console.log(romanToInt(string))

// const hello = user => {
//     console.log(`Hello ${user}`);
//   }
  
// hello();
array = ["flower","flow","flight"]
const longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    let r = '';
    for (let i = 0; i < strs[0].length; i++) {
      for (let j = 1; j < strs.length; j++) {
        if (strs[0][i] !== strs[j][i]) return r;
      }
      r += strs[0][i];
    }
    return r;
  };
// console.log(longestCommonPrefix(array))

const valid = function(s) {
    for (let i = 0; i < s.legnth; i++){
        if(i == '('){
            i+1 == ')'
        }else{
            return
        }
    }
}


function removeDuplicates() {
    let nums = [1,1,2,3,4,5,6,7,9]
    let indexCounter = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != nums[i - 1]){
            nums[indexCounter] = nums[i]
            indexCounter++
        }
    }
    let result = nums.slice(0, indexCounter)
    return indexCounter
}
removeDuplicates()

let maxProfit = function(prices) {
    let profit = 0
    for(let i = 0; i < prices.length; i++){
        for(let j = 1; j <prices.length; j++){
           if(prices[i] > prices[j]){
                profit = profit + prices[j] - prices[i]
            } 
        }
    }
    console.log(profit)
};

maxProfit()

let maxProfit2 = function(prices) {
    let profit=0;
    for(let i=0;i<prices.length-1;i++){
        let j=i+1;
        if(prices[j]>prices[i]){
            profit=profit+prices[j]-prices[i];
        }
    }
    return profit;
};

let x = 12345
const newNum = Number(x.toString().slice(0, -1))
console.log(newNum)

function firstUniqueChar(s){
    const characterCount = {};
    for (let i=0; i<s.length; i++){
        const char = s[i]
        characterCount[char] = characterCount[char] + 1 || 1;
    }

    for (let i=0; i<s.length; i++){
        const char = s[i]
        if (characterCount[char] === 1){
            return i
        }
    }
    return -1
}


var isAnagram = function() {
    s = "rat"
    t = "car"
    let arrS = s.split('').sort().join('');
    let arrT = t.split('').sort().join('');

    for(let i=0; i<arrS.length; i++){
        for(let j=0; i<arrT.length; i++){
            if(arrS[i] == arrT[j]){
                i++
            }else{
                return false
            }
        }
        return true
    }
};
// isAnagram()


function isValidSudoku(board) { 
    let rows = [];
    let columns = [];
    let boxes = []; 

    for (let i = 0; i < 9; i++) {
        rows.push([]);
        columns.push([]);
        boxes.push([]);
    }

    for (let i = 0; i < board.length; i++) { 
      for (let j = 0; j < board.length; j++) {
  
        let cell = board[i][j];
  
        if(cell !== '.') {
          if (rows[i].includes(cell)) {
            return false
          } else rows[i].push(cell);
  
          if (columns[j].includes(cell)) {
            return false;
          } else columns[j].push(cell);
  
          let boxIndex = Math.floor((i / 3)) * 3 + Math.floor(j / 3);
  
          if (boxes[boxIndex].includes(cell)) {
            return false;
          } else boxes[boxIndex].push(cell);
  
        }
      }
    }  
    return true;
}

var strStr = function (haystack, needle) {
  // Base condition
  if (haystack == null || needle == null) {
      return -1;
  }
  // Special case
  if (haystack === needle) {
      return 0;
  }
  // length of the needle
  const needleLength = needle.length;
  // Loop through the haystack and slide the window
  for (let i = 0; i < haystack.length - needleLength + 1; i++) {
      // Check if the substring equals to the needle
      if (haystack.substring(i, i + needleLength) === needle) {
          return i;
      }
  }
  return -1;
};

var strStr = function(haystack, needle) {
  if(needle.length == 0){
      return 0;
  }

  if(haystack.length < needle.length){
      return -1;
  }

  let i = 0, j = 0;
  let index;

  while( i < haystack.length ){
      if( haystack[i] == needle[j] ){
          index = i;
          while( haystack[i] == needle[j] && j < needle.length ){
              i++;
              j++;
          }

          if( j == needle.length ){
              return index;
          } else {
              j = 0;
              i = index + 1;
          }
      } else {
          i++;
      }
  }

  return -1;
};