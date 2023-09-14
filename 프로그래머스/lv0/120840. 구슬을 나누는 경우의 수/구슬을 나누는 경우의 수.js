function solution(balls, share) {
    	// 서로 다른 n개 중 m개를 뽑는 경우의 수 공식
    return factorial(balls) / (factorial((balls-share)) * factorial(share))
}
// 팩토리얼을 구하는 함수
function factorial(num) {
    let returnFactorial = BigInt(1)
    for(let i = num; i >= 2; i-- ) {
        returnFactorial*=BigInt(i)
    }
    return returnFactorial
}


// 경우의 수 구하기 (n개 중에 m개 뽑기)
// n! / (n-m)! * m!  공식
// balls = n share = m
// 5! = 5*4*3*2*1 / 2*1 * 3*2*1

//팩토리얼을 구현하고 했으면 쉬웠다