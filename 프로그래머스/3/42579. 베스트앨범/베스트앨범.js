function solution(genres, plays) {
    var answer = [];
    const genresObj = {}
    const playObj = {}
    
    for(let i = 0; i<genres.length; i++){
        let genre = genres[i];
        let play = plays[i]
        
        if(!(genre in genresObj)){
            genresObj[genre] = [];
            playObj[genre] = 0;
        }
        genresObj[genre].push([i,play]);
        playObj[genre] += play;
        
    }
    
    const sortedGenres = Object.keys(playObj).sort((a,b) => {
        return playObj[b] - playObj[a]
    })
    
    
    for(const genre of sortedGenres){
        let sortedSongs = genresObj[genre].sort((a,b) => {
            return a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]
        })
  
        answer.push(...sortedSongs.slice(0,2).map((song) => song[0]))
    }
    
    
    return answer;
}