class Queue {
    items = [];
    front = 0;
    rear = 0;
    
    constructor(arr){
        this.items = arr;
        this.rear = arr.length;
    }
    
    push(item){
        this.items.push(item);
        this.rear++;
    }
    
    pop(){
        return this.items[this.front++]
    }
    
    first(){
        return this.items[this.front]
    }
    
    isEmpty(){
        return this.front===this.rear
    }
}

function solution(cards1, cards2, goal) {
    var answer = '';
    
    cards1 = new Queue(cards1);
    cards2 = new Queue(cards2);
    goal = new Queue(goal)

    while(!goal.isEmpty()){
        if(!cards1.isEmpty() && cards1.first() === goal.first()){
            cards1.pop()
            goal.pop()
        }else if(!cards2.isEmpty() && cards2.first() === goal.first()){
            cards2.pop()
            goal.pop()
        }else{
            break;
        }
    }
    return goal.isEmpty() ? "Yes" : "No";
}