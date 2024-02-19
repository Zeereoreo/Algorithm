function solution(arr){

    let stack = [];
    for(let i = 0; i<arr.length; i++){
        if (stack.length === 0) stack.push(arr[0]);
        if(stack[stack.length -1] !== arr[i]) stack.push(arr[i]) 
    }
    return stack;
}