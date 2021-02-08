function countBiggerThanTen(number){
    let cnt = 0;
    number.forEach(element => {
        if(element > 10)
            cnt ++;
    });

    return cnt;
}

const numbers = [1,2,3,5,10,20,30,40,50,60];
console.log(countBiggerThanTen(numbers))