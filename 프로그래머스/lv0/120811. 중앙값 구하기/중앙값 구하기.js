function solution(array) {
    
    let middle = Math.floor(array.length/2);
    let result = array.sort((a, b) => a - b);
    var answer = result[middle]
    
    return answer;
}