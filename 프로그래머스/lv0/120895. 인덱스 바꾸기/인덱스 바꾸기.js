function solution(my_string, num1, num2) {
  let answer = '';
  let str1 = my_string[num1]
  let str2 = my_string[num2]
  let splitArr = my_string.split('')
  
  splitArr[num1] = str2
  splitArr[num2] = str1
   
  return splitArr.join('');
}

