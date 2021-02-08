const solution = (a, b) => {return (a < b ? add(a, b) : add(b, a))}

function add(a, b) {
    var answer = 0;
    
    if(a === b)
        return answer = a
    
    for(let i = a; i < b+1; i++)
        answer += i;
    
    return answer;
}