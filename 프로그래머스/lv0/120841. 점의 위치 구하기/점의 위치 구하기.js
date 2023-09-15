function solution(dot) {
    if(dot[0]>0 && dot[1]>0){
      return 1; 
    }else if(dot[0]<0 && dot[1]>0){
      return 2;
    }else if(dot[0]<0 && dot[1]<1){
      return 3;
    }else return 4
  
}
// dot[0] = a , dot[1] = b
// dot [a,b] a>0,b>0 일 땐 1
// dot [a,b] a<0,b>0 일 땐 2 
// dot [a,b] a>0,b<0 일 땐 3 
// dot [a,b] a<0,b<0 일 땐 4 