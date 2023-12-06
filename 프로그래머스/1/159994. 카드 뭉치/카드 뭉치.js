// function solution(cards1, cards2, goal) {
//     var answer = '';
//     let cardIdx1 = 0;
//     let cardIdx2 = 0;
    
//     goal.forEach((el) => {
//         if(cards1[cardIdx1] === el){
//             cardIdx1 ++
//         } else if(cards2[cardIdx2] === el){
//             cardIdx2 ++
//         } else {
//             return "No";
//         }
//     })
//     return "Yes";
// }

function solution(cards1, cards2, goal) {
  let idx1 = 0;
  let idx2 = 0;
  for (let word of goal) {

    if (cards1[idx1] === word) idx1++;

    else if (cards2[idx2] === word) idx2++;
    
    else return "No";
  }


  return "Yes";
}