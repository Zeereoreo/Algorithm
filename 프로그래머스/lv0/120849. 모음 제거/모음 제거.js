function solution(my_string) {
    const a = ['a', 'e', 'i', 'o', 'u'];
    for(let i=0; i<a.length; i++){
        my_string = my_string.replaceAll(a[i],"  ")
    }
     return my_string.split("  ").join("")
}

//포함하지 않은 것을 리턴 한다.