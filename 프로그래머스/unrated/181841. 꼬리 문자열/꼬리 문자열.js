function solution(str_list, ex) {
    // var answer = '';
    return str_list.filter(el=> !el.includes(ex)).join("")
    // return answer;
}