// function solution(X, Y) {
//     var answer = '';
//     let x = [...X]
//     let y = [...Y]
//     let a = [];
//     for(let i = 0; i<x.length; i++){
//         for(let j = 0; j<y.length; j++){
//             if(x[i] === y[j] && a.includes(x[i]) === false){
//                a.push(x[i]);
//             }
//         }
//     }
    
//     return a.sort((a,b) => b-a).join("") === "" ? "-1" : a.sort((a,b) => b-a).join("");
// }

function solution(X, Y) {
    var answer = '';
    
    let hashX = new Map();
    let hashY = new Map();
    
    for(let i of X){
        hashX.set(i,(hashX.get(i) || 0) + 1)
    }
    for(let i of Y){
        hashY.set(i,(hashY.get(i) || 0) + 1)
    }
    
    for (let i = 9; i >= 0; i--) {
    const char = String(i);
    const count = Math.min(hashX.get(char), hashY.get(char));
    answer += char.repeat(count);
  }

  return answer ? (Number(answer) ? answer : '0') : '-1';
}