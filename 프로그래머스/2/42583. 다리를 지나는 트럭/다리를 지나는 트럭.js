function solution(bridge_length, weight, truck_weights) {
    let bridge = new Array(bridge_length).fill(0);
    let time = 0;
    // console.log(bridge, "1")
    
    while(bridge.length) {
    // console.log(bridge, "2")
        
        bridge.shift();
        if(truck_weights.length){
            const sumBridge = bridge.reduce((a,b) => a + b, 0)
            if(sumBridge + truck_weights[0] <= weight){
                bridge.push(truck_weights.shift())
            } else {
                bridge.push(0)
            }    
      } 
    // console.log(bridge, "3")
    
    time++
 }
    return time
}