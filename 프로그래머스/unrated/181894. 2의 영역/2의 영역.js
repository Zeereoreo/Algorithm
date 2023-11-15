function solution(arr) {
    let result = [];
    let a = [];
    
    for(let i = 0; i<arr.length; i++){
     if(arr[i] === 2) a.push(i)
    }
    
    if(a.length === 0) result = [-1]
    else if(a.length === 1) result = [2]
    else if(a.length >= 2) result = arr.slice(a[0],a[a.length-1]+1)

    
    return result;
}