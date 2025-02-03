function solution(n, k, enemy) {
    let left = 0;
    let right = enemy.length;
    let middle = 0
    
    while(left <= right) {
        middle = Math.floor((left + right) / 2);
        const round = enemy.slice(0, middle).sort((a,b) => b - a);
        let cheat = k;
        let soldier = n;
        let currentRound = middle;
        
        for(let i = 0; i < round.length; i++) {
            const roundEnemy = round[i];
            
            
            if(cheat !== 0) {
                cheat -= 1;
            } else {
                soldier -= roundEnemy;
                
                if(soldier < 0) {
                    currentRound = i;
                }
            }
        }
        
    
        if(middle <= currentRound) {
            left = middle + 1;
        }else {
            right = middle - 1;
        }
    }
    
    return right;
}