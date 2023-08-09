// "VE" = "Very Easy"
// "EA" = "Easy"
// "ME" = "Medium"
// "HA" = "Hard"
// "VH" = "Very Hard"
// "EX" = "Expert"


var obj = {
    "VE": 5,
    "EA": 10,
    "ME": 20,
    "HA": 40,
    "VH": 80,
    "EX": 120
}
class user {
    constructor(name, xp, log) {
        this.name = name;
        this.xp = xp;
        this.log = log;
    }
    newSolvedChallenge(mariam) {
        this.xp += obj[mariam.level];
        this.log.push(mariam.id);
    }
}

var user1 = new user("Mariam", 10, []);
console.log(user1);

user1.newSolvedChallenge({
    id: 1,
    level: 'VE'
});
let o = {
    id: 2,
    level: 'ME'
};
user1.newSolvedChallenge(o);

user1.newSolvedChallenge({
    id: 3,
    level: 'EX'
});
console.log(user1.xp);
console.log(user1.log);