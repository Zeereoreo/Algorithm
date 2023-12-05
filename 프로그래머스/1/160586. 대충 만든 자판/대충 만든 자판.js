function solution(keymap, targets) {
  const answer = [];

  // 원하는 문자 배열 targets을 하나씩 확인한다.
  targets.forEach((word) => {
    
    // 키를 최소 몇 번 눌러야하는지 확인하기 위한 변수
    let sum = 0;

    // 확인 중인 word 문자열을 하나씩 체크한다.
    for (const c of word) {

      // 원소의 길이가 100이므로 넉넉하게 1000으로 셋팅한다.
      let num = 1000;

      // 이제 keymap을 확인해 최소 필요 입력을 확인한다.
      keymap.forEach((keys) => {

        // indexOf() 메서드를 확인하면 몇번이 필요한지 알 수 있다.
        const idx = keys.indexOf(c);

        // -1일 경우는 찾을 수 없는 경우이므로 제외한다.
        // 아닐 경우 현제 셋팅된 값과 비교해 더 낮은 수를 구한다.
        // idx + 1을 한 이유는 배열은 0부터 시작하기 때문이다.
        if (idx !== -1) num = Math.min(num, idx + 1);
      });

      // keymap에서 원하는 문자를 찾지 못했을 경우
      // 그 문자열을 작성할 수 없으므로 -1로 셋팅하고 break해준다.
      if (num === 1000) {
        sum = -1;
        break;
      }

      // 찾은 값을 다 더해준다.
      sum += num;
    }

    // 최소 필요 수를 푸쉬해준다.
    answer.push(sum);
  });

  return answer;
}