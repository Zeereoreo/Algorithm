function solution(sides) {
    answer = sides.sort((a,b) => a - b);
    if(answer[0]+answer[1] <= answer[2]) return 2
    else return 1
}