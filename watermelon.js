const solution = n => { return add(n)}

function add(n) {
    let result = ''
    
    if (n < 10000) 
    {
        for (let i = 0; i < n; i++) 
        {
            if(i % 2 === 0) { result +='수' }
            else { result += '박'}
    	}   
    }
    return result
}