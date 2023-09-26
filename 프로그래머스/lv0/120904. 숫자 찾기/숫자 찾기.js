function solution(num, k) {
    return String(num).indexOf(String(k)) > -1 ? String(num).indexOf(String(k)) + 1 : String(num).indexOf(String(k));
}


// number를 비교하려면 문자열로로 바꾼다.
