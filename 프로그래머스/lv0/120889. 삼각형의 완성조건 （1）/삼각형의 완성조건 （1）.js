function solution(sides) {
    answer = sides.sort((a,b) => a - b);
    if(answer[0]+answer[1] <= answer[2]) return 2
    else return 1
}
// sort 내림차순 만들고 1,2,3 변 모두 정해서 구하기
// 삼항연사자 사용도 자주 하자 answer[0]+answer[1] <= answer[2] ? 2 : 1
// 구조분해 할당
// [long , a , b] = sides.sort((a,b)=>b-a);
// long < a + b ? 1 : 2