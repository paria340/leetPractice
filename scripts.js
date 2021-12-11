
let twoSum = function(nums, target) {
    nums = [3,2,4, 7, 11]
    target = 6
    
    for(let i=0; i<nums.length;i++){
        for(let j=0; j<nums.length; j++){
                // let difference = 6 - nums[i]
                if(nums[j] == target - nums[i]){
                    return [i, j]
                }
            } 
    }
};

twoSum()
console.log(twoSum())