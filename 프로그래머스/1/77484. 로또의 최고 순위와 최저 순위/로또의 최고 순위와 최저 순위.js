function solution(lottos, win_nums) {
    var answer = [0,0];
    let cor = {
        0:6,
        1:6,
        2:5,
        3:4,
        4:3,
        5:2,
        6:1,
    }
    let best = lottos.filter(e => win_nums.includes(e)).length;
    let bad = lottos.filter(e => e === 0).length;
    
    
    return [cor[best+bad], cor[best]];
    // return cor[bad];
}