function solution(id_list, report, k) {
    const reportedUser = {};
    const count = {};
    
    for(const r of report){
        const [userId, reportedId] = r.split(" ");
        if(reportedUser[reportedId] === undefined){
            reportedUser[reportedId] = new Set();
        }
        reportedUser[reportedId].add(userId);
    }
    // console.log(reportedUser)
    
    for(const reportedId of Object.keys(reportedUser)){
        if(reportedUser[reportedId].size >= k){
            for(const uid of reportedUser[reportedId]){
                count[uid] = (count[uid] || 0) +1
            }
        }
    }
    
    const answer = [];
    
    for(let i = 0; i<id_list.length; i++){
        answer.push(count[id_list[i]] || 0)
    }
    return answer;
}

// 신고당한 사람의 목록과 횟수
// 신고한 사람에게 돌아가는 메일