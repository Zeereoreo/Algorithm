function solution(array) {
    const answer = [...array.reduce((acc, cur) => {
        acc.set(cur, acc.get(cur) ? acc.get(cur) + 1 : 1);

        return acc;
    }, new Map())]
    .sort((a, b) => b[1] - a[1]);

    if (answer.length >= 2) {
        console.log(answer[0][1], answer[1][1]);
        if (answer[0][1] === answer[1][1]) return -1;
        else return answer[0][0];
    }

    else return answer[0][0];
}