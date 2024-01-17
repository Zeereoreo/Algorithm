function solution(survey, choices) {
    var answer = '';
    let surveyList = [
        ["R","T"],
        ["C","F"],
        ["J","M"],
        ["A","N"],
    ]
    
    const surveyScore = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
    
    survey.forEach((n,i) => {
        const type = n.split("");
        if(choices[i] < 4){
            surveyScore[type[0]] += 4- choices[i];
        }
        if(choices[i] > 4){
            surveyScore[type[1]] += choices[i] - 4
        }
    })
    
    return surveyList
                    .map((n) => {
         if (surveyScore[n[0]] < surveyScore[n[1]]) {
        return n[1];
      }
      return n[0];
    })
    .join("")
}