function solution(word) {
    var result = [];
    let str = "";
    for(let i = 1; i<=5; i++) dfs(str,i,result)
    return result.sort().indexOf(word)+1
}

function dfs(word , length , result){
        const vowels = [..."AEIOU"]
        if(length === word.length){
            result.push(word);
            return;
        }
    vowels.forEach((vowel) => {
        dfs(word + vowel, length, result);
    });
}