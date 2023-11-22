function solution(my_string) {
    var answer = [];
    // my_string.replace(" ", ",")
    return my_string.replaceAll(" ", ",").split(",");
}