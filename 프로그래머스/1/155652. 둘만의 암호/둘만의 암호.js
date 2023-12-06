function solution(s, skip, index) {
    var answer = '';
    let ABC = "abcdefghijklmnopqrstuvwxyz"
    let newABC = [...ABC].filter((el) => !skip.includes(el))
    let a = [...s].map((el) => newABC[(newABC.indexOf(el) + index) % newABC.length]).join("")
    return a;
}
