function solution(my_string) {
    let a = my_string.split(" ")
    let b = a.filter((el) => el.replace(" "))
    return b;
    // my_string.split(" ").filter(v=>v) 
}