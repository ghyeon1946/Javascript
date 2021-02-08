function solution(n) {
    var answer = [];

    if(n < 10000000001)
    {
        let nStr = [];
        nStr = n.toString().split('');
        
        for(let i = 0; i < nStr.length; i++)
            answer.unshift(Number(nStr[i]))
    }
    
    return answer;
}