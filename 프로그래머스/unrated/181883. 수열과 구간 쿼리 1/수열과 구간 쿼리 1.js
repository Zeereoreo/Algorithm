function solution(arr, queries) {
    // for(let query of queries) {
    //     for(let i = query[0]; i<=query[1]; i++)
    //         arr[i] += 1;
    // }
    // return arr;

    for(let i=0; i<queries.length; i++){
        for(let j=0; j<arr.length; j++){
            if(queries[i][0]<=j&& j<=queries[i][1]){
                arr[j]++;
            }
        }
    }
    return arr
 
}