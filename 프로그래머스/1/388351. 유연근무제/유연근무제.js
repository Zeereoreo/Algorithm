function solution(schedules, timelogs, startday) {
    var answer = schedules.length;
    //스케쥴 순서에 맞게 +10 이하로 출근해야함
    //startday
    let safe = schedules.map(e=>{
        e = e+10
        let hour = Math.floor(e/100)
        let min = e%100
        if(min>59){
            hour++
            min = e%100 - 60
        }
        e = hour*100 + min
        return e
    })
    // console.log(safe)
    for(let i = 0; i<timelogs.length; i++){
        for(let j = 0; j<timelogs[i].length; j++){
            let day = (j+startday)%7
        if(day > 5 || day === 0) {
            // console.log("토/일")
            continue;
        }
        else{
            // console.log(day,"요일")
            if(safe[i]<timelogs[i][j]){
                answer--
                break;
            }
        }        
        }

    }
    return answer;
}