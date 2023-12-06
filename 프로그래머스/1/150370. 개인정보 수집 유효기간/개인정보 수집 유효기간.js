function solution(today, terms, privacies) {
    var answer = [];
    let expire = new Date(today);
    let termType = {};
    terms.forEach((e)=> {
        const [type,term] = e.split(" ")
        termType[type] = Number(term)
    })
    // {"A" = 6 ,
    // "B" = 12,
    // "C" = 3}
    privacies.forEach((e,i) => {
        const [date,type] = e.split(" ");
        const changeDate = new Date(date);
        
        changeDate.setMonth(changeDate.getMonth() + termType[type]);
        if(changeDate <= expire) answer.push(i + 1)
    })
    
    return answer;
}