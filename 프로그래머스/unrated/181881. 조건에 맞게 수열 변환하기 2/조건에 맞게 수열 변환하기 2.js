function solution(arr) {
    let n = 0; 
    while(true){
        const change = arr.map((e) => {
            if(e < 50 && e % 2 !== 0) return e * 2 + 1;
            else if(e >= 50 && e % 2 === 0) return e / 2;
            else return e;
        });

        let areArraysEqual = arr.every((el, i) => el === change[i]);
        if (areArraysEqual) break;

        n += 1;
        arr = change;
    }
    return n;
}