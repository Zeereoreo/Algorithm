function solution(my_string) {
//Set 객체는 동일한 값을 중복하여 포함할 수 없기 때문에
//동일한 값은 중복되지 않고 나열된다.
    var answer = new Set([...my_string])
//set객체를 배열로 만들어 join('')을 통해 문자열로 만들어준다.
    return [...answer].join('');
}

// function solution(s){  
//     let answer="";
//     //console.log(s.indexOf("K"));
//     for(let i=0; i<s.length; i++){
//     //console.log(s[i], i, s.indexOf(s[i]));
//       if(s.indexOf(s[i])===i) answer+=s[i];
//     }
//     return answer;
// }