// input [1,2,3,4,5,6]
// target 5;

const nums = [1,2,3,4,5,6]
const target =5;

const twoSum = (nums, target)=> {
    const result =[]
    const map = new Map();
    for(let i=0;i<nums.length;i++){
        let diff = target - nums[i]
        if(map.has(diff)) {

            result.push([map.get(diff), i])
        } else{
            map.set(nums[i], i)
        }
    }
return result;
}
console.log(twoSum(nums, target))