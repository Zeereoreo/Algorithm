function solution(myString, pat) {
    var answer = 0;
    let b = [...myString].map((el) => {
        if(el === "A") return "B"
        else return "A"
    }).join("")
    
    return b.includes(pat) ? 1 : 0
}