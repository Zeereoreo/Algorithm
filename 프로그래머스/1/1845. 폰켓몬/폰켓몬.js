function solution(nums) {
  
    let total = nums.length / 2;
    let mon = [];
    
    for(let i = 0; i<nums.length; i++){
        if(mon.length < total){
            if(mon.includes(nums[i]) === false){
                mon.push(nums[i])
            }
        }
    }
    return mon.length;
}