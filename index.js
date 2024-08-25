
var examScore = prompt("Enter your exam score:");
score = +examScore;

if (isNaN(score)) {
    console.log("Not a Number");

}
else if (score < 0 || score > 100) {
    console.log("Invalid Score");

} else {
    switch (true) {
        case score === 100:
            console.log("Perfect Score");
            break;
        case score >= 85:
            console.log("You got an A");
            break;
        case score >= 75:
            console.log("You got a B");
            break;
        case score >= 65:
            console.log("You got a C");
            break;
        case score >= 50:
            console.log("You got a D");
            break;
        default:
            console.log("You got an F");
    }
}
