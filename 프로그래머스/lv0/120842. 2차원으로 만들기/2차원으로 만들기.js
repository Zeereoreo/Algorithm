function solution(num_list, n) {
    var answer = [];
    for(let i =0; i < num_list.length/n; i++){
        answer.push(num_list.slice(i*n, i*n+n))
        //length의 길이를 n으로 나눠서 i의 반복을 줄이고
        //0,2
        //2,4
        //4,6
        //
    }
    return answer;
}

// n의 개수가 주어진다.
// num_list의 배열을 n의 값만큼 묶어서 2차 배열로 만든다.
// map? reduce? filter? slice?
// 