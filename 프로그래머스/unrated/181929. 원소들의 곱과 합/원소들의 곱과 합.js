function solution(num_list) {
    let acc = 1;
    let pow = 0;
    for (let i = 0; i<num_list.length; i++){
        acc *= num_list[i]
        pow += num_list[i]
    }
    return acc > (pow*pow) ? 0 : 1
}