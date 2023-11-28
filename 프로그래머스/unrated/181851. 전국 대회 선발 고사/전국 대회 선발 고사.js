function solution(rank, attendance) {
    // var answer = 0;
    // let arr = [];
    // for (let i = 0; i < rank.length; i++) {
    //     let { [rank[i]]: b } = { [rank[i]]: attendance[i] };
    //     if (b === true) arr.push(rank[i]);
    //     arr.sort((a,b)=>a-b);
    //     if(arr[i] === rank[i]) arr[i] = i
    //     answer = (10000*arr[0]) + (100*arr[1] )+ arr[2]
    // }
    // return arr;
    let filter = rank.filter((el,i) => attendance[i])
    filter.sort((a,b) => a - b);
    let map = filter.map(el => rank.findIndex(i => i === el) )
    return 10000*map[0] + 100*map[1] + map[2]
}