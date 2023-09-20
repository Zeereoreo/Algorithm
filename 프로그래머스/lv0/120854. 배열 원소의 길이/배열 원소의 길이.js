function solution(strlist) {
    var answer = [];
    let 임시 = 0;
    for(let i =0 ; i<strlist.length; i++){
        임시 = strlist[i].length
        answer.push(임시);
    }
    return answer;
}

// 배열 하나당의 원소의 개수를 리턴
// 배열마다 개수 세고 배열에 담기