function solution(board, moves) {
    var answer = 0;
     let stack = [];
    for(let i = 0; i<moves.length; i++){
        let num = moves[i] - 1;
        for(let j = 0; j<board.length; j++){
            if(board[j][num] !== 0){
                if(stack[stack.length - 1] === board[j][num]){
                    stack.pop();
                    answer += 2;
                } else {
                    stack.push(board[j][num])
                }
                board[j][num] = 0;
                break;
            }
        }
       
    }
    return answer;
  
}

// [[0,0,0,0,0],
//  [0,0,1,0,3],
//  [0,2,5,0,1],
//  [4,2,4,4,2],
//  [3,5,1,3,1]]