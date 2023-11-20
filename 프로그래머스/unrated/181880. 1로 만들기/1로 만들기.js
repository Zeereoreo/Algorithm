function solution(num_list) {
    let result = 0;
    for (let i = 0; i < num_list.length; i++) {
        let e = num_list[i];
        while (e !== 1) {
            e = e % 2 ? (e - 1) / 2 : e / 2;
            result++;
        }
    }
    return result;
}