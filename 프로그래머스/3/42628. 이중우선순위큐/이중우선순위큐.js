function solution(operations) {
    var answer = [];
    let que = [];
    let a = operations.map(e=>e.split(" "))

    for(let i = 0; i<a.length; i++){
        if(a[i][0] === "I") que.push(a[i][1])
        else if(a[i][0] === "D" && a[i][1] === "1"){
            que.sort((a,b)=>a-b)
            que.pop()
        }
        else if(a[i][0] === "D" && a[i][1] === "-1"){
            que.sort((a,b)=>a-b)
            que.shift()
        }
    }
    if(que.length === 0) return [0,0];
    else return [Math.max(...que), Math.min(...que)];
}