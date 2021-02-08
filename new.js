const add = (a,b) => {return a+b};
const subt = (a,b) => {return a-b};
const mult = (a,b) => {return a*b};
const div = (a,b) => {return a/b};

function func(a, b, callback)
{
    console.log(callback(a,b));
}

func(10, 20, mult)