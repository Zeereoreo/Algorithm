function solution(board, moves) {
    var answer = 0;
    let stack = [];
    for(let i = 0; i<moves.length; i++){
        let now = moves[i] -1
        for(let j = 0; j<board.length; j++){
            if(board[j][now] != 0){
                if(stack[stack.length -1] === board[j][now]){
                    stack.pop();
                    answer += 2;
                }else {
                stack.push(board[j][now])
            }
            board[j][now] = 0;
            break;
                
            } 
        }
    }
    return answer;
}

// [0,0,0,0,0]
// [0,0,1,0,3]
// [0,2,5,0,1]          move    = [1,5,3,5,1,2,1,4]
// [4,2,4,4,2]          result  = [4,3,1,1,3,2,0,4]
// [3,5,1,3,1]         
