function solution(myStr) {
    let a = [...myStr].map(el => el === "a" || el === "b" || el === "c" ? " " : el).join("").split(" ").filter((el) => el !== "")
    
    return a.length === 0 ? ["EMPTY"] : a;
}