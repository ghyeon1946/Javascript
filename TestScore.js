function solution(answers) {
    var answer = [];
    let answer1 = [1, 2, 3, 4, 5];
    let answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let score1 = answers.filter((a, i) => a === answer1[i%5]).length;
    let score2 = answers.filter((a, i) => a === answer2[i%8]).length;
    let score3 = answers.filter((a, i) => a === answer3[i%10]).length;

    let score = Math.max(score1, score2, score3);

    if(score === score1) answer.push(1);
    if(score === score2) answer.push(2);
    if(score === score3) answer.push(3);

    return answer;
}