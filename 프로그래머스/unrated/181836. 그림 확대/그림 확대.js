function solution(picture, k) {
    const answer = []

    for(let i = 0 ; i < picture.length ; i ++) {
        let a = ''
        for(let j = 0 ; j < picture[i].length ; j ++) {
            for(let l=0 ; l < k ; l ++) {
                a+=picture[i][j]    
            }
        }
        answer.push(a)
    }

    return answer.reduce((acc, cur) => {
        const arr = []
        for(let i = 0 ; i < k ; i ++) {
            arr.push(cur)
        }
        return [...acc, ...arr]
    }, [])
}
