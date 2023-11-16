// function solution(str_list) {
    
//     let a = str_list.indexOf("l");
//     let b = str_list.indexOf("r");
//     if(a === -1 && b === -1) return [];
//     else if(a === 0 || b===0) return [];
//     else if(a < b) return str_list.slice(0,a);
//     else if(b < a) return str_list.slice(b)

    
   
// }

function solution(str_list) {
    const index = str_list.findIndex(item => item === 'l' || item === 'r');
    
    
    if(index === -1){
        return [];
    }
 
    else if(str_list[index] === 'l') {
        return str_list.slice(0, index);    
    } 
    
    else {
        return str_list.slice(index + 1);
    }
}