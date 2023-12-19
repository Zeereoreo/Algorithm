function solution(s) {
    return s
        .split(" ")
        .map((el) => 
             [...el].map((e,i) => {
        if(i%2 === 0) return e.toUpperCase()
        else return e.toLowerCase()
    }).join("")).join(" ")
}