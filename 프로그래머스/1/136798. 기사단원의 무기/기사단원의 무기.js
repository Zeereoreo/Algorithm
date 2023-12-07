// function solution(number, limit, power) {
//     var answer = [];
//     let arr = [];
//     for(let i = 1; i<=number; i++){
//         arr.push(i)
//     }
    
//     let b = arr.map((el) => {
//         let count = 0;
//         for(let i = 1; i<=el; i++){
//             if(el%i === 0) {
//                 count++
//             }
//         }
//         return count;
//     } )
    
//     return b.map(el => el>limit ? power : el).reduce((a,c) => a+c,0)
    

// }

function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let divisor = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (i / j === j) divisor += 1;
        else divisor += 2;
      }
      if (divisor > limit) {
        divisor = power;
        break;
      }
    }
    answer += divisor;
  }
  
  return answer;
}