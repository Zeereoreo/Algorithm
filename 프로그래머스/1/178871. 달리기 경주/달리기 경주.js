function solution(players, callings) {
    let playersIdx = {};
    // 객체 형태로 미리 player:index 형태로 만들기.
    players.forEach((name, index) => {
        playersIdx[name] = index;
    });
    
    for(let i=0; i< callings.length; i++){
        let idx = playersIdx[callings[i]]; // 실제 변경되어야 하는 index.
        let chang = players[idx-1]; // 객체의 index도 업데이트 해주기위해 미리 저장.
        
        [players[idx], players[idx-1]] = [players[idx-1], players[idx]];
        // [a, b] = [b, a] spread syntax
        // 이렇게 풀어 사용 해도 된다.
        // players[idx-1] = callings[i];
        // players[idx] = chang;
        
        playersIdx[callings[i]] = idx - 1;
        playersIdx[chang] = idx;
    }

    return players;
}