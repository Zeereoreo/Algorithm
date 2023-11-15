function solution(arr, query) {
    var answer = [];
      for(let i = 0; i<query.length; i++){
        if(i%2 === 0) arr = arr.slice(0,query[i]+1)
        else if(i%2 !== 0) arr = arr.slice(query[i])
      }

    return arr;
}

// function solution(arr, query) {
//     let answer = arr;

//     query.forEach((q, i) => {
//         if (i % 2 === 0) answer = answer.slice(0, q + 1);
//         else answer = answer.slice(q);
//     });

//     return answer;
// }