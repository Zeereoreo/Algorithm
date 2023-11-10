function solution(my_string, is_suffix) {
    const a = []
    for(let i = 0; i<my_string.length; i++){
        
              a.push(my_string.slice(i))
    }
    return a.includes(is_suffix)? 1 : 0
}