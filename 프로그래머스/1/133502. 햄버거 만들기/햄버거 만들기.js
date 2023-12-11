function solution(ingredient) {
    var answer = 0;
    for(let i = 0; i<ingredient.length; i++){
        if(ingredient[i] === 1 && ingredient[i+1] === 2 && ingredient[i+2] === 3 && ingredient[i+3] === 1){
            ingredient.splice(i,4)
            answer ++
            i = i-3
        }
    }
    return answer;
    // var answer = 0;
    // let stack = [];
    // for(let i = 0; i<ingredient.length; i++){
    //     stack.push(ingredient[i])
    //     if (
    //         stack[stack.length-1] === 1 &&
    //         stack[stack.length-2] === 3 &&
    //         stack[stack.length-3] === 2 &&
    //         stack[stack.length-4] === 1
    //     ) {
    //         answer++;
    //         stack.splice(-4);
    //     }
    // }
    // return answer
}