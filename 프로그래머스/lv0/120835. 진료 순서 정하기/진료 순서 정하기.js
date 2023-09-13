function solution(emergency) {
    let result = [...emergency];
    result.sort((a,b) => b - a);
    return emergency.map(n => result.indexOf(n) + 1);
}