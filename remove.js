function solution(answer) {
    if(answer.length > 1)
    {
        answer.splice(answer.indexOf(Math.min(...answer)),1);
    }

    else answer[0] = -1;

    return answer;
}