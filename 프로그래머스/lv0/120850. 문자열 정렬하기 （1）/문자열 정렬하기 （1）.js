function solution(my_string) {
    const regex = /^[0-9]+$/;

    let ans = [];
    
    for(let i = 0; i < my_string.length; i++){
        if(regex.test(my_string[i])){
            ans.push(Number(my_string[i]));
        }
    }
    
    return ans.sort((a,b) => a - b);
}

// 문자열에 있는 숫자를 오름차순으로 리턴하라
// .sort((a,b) => a-b)
// 문자