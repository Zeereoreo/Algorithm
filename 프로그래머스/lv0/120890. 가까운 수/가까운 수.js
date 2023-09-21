function solution(array, n) {
    var answer = 0;
    var array2 = [];
    // 처음에 정렬해주기
    array = array.sort()
    for(let i=0; i<array.length; i++){
        // array - n 을 배열로 담고
        array2[i] = Math.abs(Math.abs(array[i]) - n)
    }
        // 최소값을 구한다.
        MinNum = Math.min(...array2)
        
        // 최소값 index를 찾고
        index = array2.indexOf(MinNum)

        // 기존 array에 구한 index를 넣는다 
        answer = array[index]
    return answer;
}
// 주어진 n에 가장 가까운 정수