function biggerThanThree(number)
{
    const number_ = []
    for(let i = 0; i < number.length; i++)
    {
        if(number[i] > 3)
        {
            number_.push(number[i])
        }
    }
    return number_
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers))