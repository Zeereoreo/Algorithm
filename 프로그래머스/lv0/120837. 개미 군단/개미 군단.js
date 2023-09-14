function solution(hp) {
    // let result = {장군 : 5, 병정 : 3, 일 : 1};
    // let sum = 0;
    // while(hp === 0){
    //     if(hp > 5){
    //         result = hp - result.장군
    //         sum ++
    //     } else if (hp > 3) {
    //         result = hp - result.병정
    //         sum ++
    //     } else {
    //         result = hp - result.일
    //         sum ++
    //     }
    //     return sum
    // }
    return Math.floor(hp/5) + Math.floor((hp%5)/3) + ((hp%5) % 3);
}
    //장군 5 , 병정 3, 일개미 1 , 최소한의 병력을 구성 해라.