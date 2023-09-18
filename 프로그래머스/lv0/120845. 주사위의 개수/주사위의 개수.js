function solution(box, n) {
    let result = 1;
    for(let i = 0; i<box.length; i++){
        result *= Math.floor(box[i]/n )
    }
    return result 
}

//부피 공식 
//10 * 8 * 6 / 3^3 = 12