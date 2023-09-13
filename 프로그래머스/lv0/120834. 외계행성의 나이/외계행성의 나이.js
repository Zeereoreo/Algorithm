function solution(age) {
    let arr = ["a","b","c","d","e","f","g","h","i","j",];
    let result = "";
    age = age.toString();
    
    for (let i = 0; i<age.length; i++){
        result += arr[age[i]];
    }
    return result
}