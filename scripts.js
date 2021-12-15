
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

const string = 'III'
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

console.log(romanToInt(string))

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
console.log(longestCommonPrefix(array))