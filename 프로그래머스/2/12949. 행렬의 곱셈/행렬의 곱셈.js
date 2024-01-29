function solution(arr1, arr2) {
    var answer = [];
//     [[1, 4],            [[3, 3],
//      [3, 2],            [3, 3]]
//      [4, 1]]
    
//     [[15, 15],
//      [15, 15],
//      [15, 15]]
    for(let i = 0; i<arr1.length; i++){
        let result = [];
        // 0 1 2 , 0 1 3+12 , 3+12 , 9+6 , 9+6 , 12+3, 12+3
        for(let j = 0; j<arr2[0].length; j++){
            let el = 0
            for(let k = 0; k<arr2.length; k++){
                el += arr1[i][k] * arr2[k][j];
            }
            result.push(el)
        }
        answer.push(result)
    }
    return answer;
}