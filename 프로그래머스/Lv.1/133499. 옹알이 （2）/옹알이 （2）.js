function solution(babbling) {
    var answer = 0;
    let a = ["aya", "ye", "woo", "ma"]
    for(let i = 0; i<babbling.length; i++){
        let b = babbling[i]
        for(let j = 0; j<a.length; j++){
            if(b.includes(a[j].repeat(2))){
                break;
            }
            b = b.split(a[j]).join(" ");
            }
        if(b.split(" ").join("").length === 0){
                answer+=1
        }
    }
    return answer;
}