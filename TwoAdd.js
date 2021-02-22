function solution(numbers) {
    var answer = [];
    var result = [];

    for(let i = 0; i < numbers.length-1; i++)
    {
        for(let j = i+1; j < numbers.length; j++)
        {
            answer.push(numbers[i] + numbers[j]);
        }
    }

    result = [...new Set(answer)];
    
    result.sort(function(a, b) {
        return a - b;
    });

    return result;
}