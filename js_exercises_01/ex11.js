// The following exercise contains the following subjects:
// ● Order Of Operation
// ● If statements
// Instructions
// John and Mike both play basketball on different teams. In the
// latest 3 games, John's team scored 89, 120, and 103 points,
// while Mike's team scored 116, 94, and 123 points.
// 1. Calculate the average score for each team.
// 2. Decide which team wins on average (highest average
// score), and print the winner to the console. Also include
// the average score in the output.
// 3. Then change the scores to show different winners. Don't
// forget to take into account that there might be a draw (the
// same average score).
// 4. EXTRA: Mary also plays basketball, and her team scored
// 97, 134, and 105 points. Like before, log the average
// winner to the console.
// 5. Like before, change the scores to generate different
// winners, keeping in mind there might be draws.
const johnsTeamScores = [89, 120, 103]
const mikesTeamScores = [116, 94, 123]
function sum(array) {
    return array.reducae((a, b) => a + b, 0);
}
function avg(array) {
    return (sum / array.length) || 0;
}
//1
const johnsTeamScoresAvg = avg(johnsTeamScores)
const mikesTeamScoresAvg = avg(mikesTeamScores)
console.log(`John's team avg: `, avg(johnsTeamScoresAvg))
console.log(`Mike's team avg: `, avg(mikesTeamScoresAvg))
//2
if (johnsTeamScores > mikesTeamScores) console.log('John winner: ', johnsTeamScores);
if (mikesTeamScores > johnsTeamScores) console.log('Mike winner: ', mikesTeamScores);
if (mikesTeamScores === johnsTeamScores) console.log('Draw');
