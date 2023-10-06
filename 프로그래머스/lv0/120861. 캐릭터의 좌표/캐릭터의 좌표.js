function solution(keyinput, board) {
    let result = [0,0];
    let range = [Math.floor(board[0]/2),Math.floor(board[1]/2)]
    for(let i = 0; i<keyinput.length; i++){
        if(keyinput[i] === 'left') result[0] --
        else if (keyinput[i] === 'right') result[0] ++
        else if (keyinput[i] === 'up') result[1] ++
        else if (keyinput[i] === 'down') result[1] --
        if(result[0] > range[0]) {
            result[0] -= 1;
        } else if (result[0] < -range[0]){
            result[0] += 1;
        }
        if(result[1] > range[1]) {
            result[1] -= 1;
        } else if (result[1] < -range[1]){
            result[1] += 1;
        }
    }
    return result
}

//보드의 크기를 넘어 갈 순 없다