const weeks = [
    {
        id: 0,
        pairs: [
            {
                homeTeam: {id: 1, score: 2},
                awayTeam: {id: 3, score: 3},
            },
            {
                homeTeam: {id: 2, score: 1},
                awayTeam: {id: 4, score: 3},
            },
        ]
    },

    {
        id: 1,
        pairs: [
            {
                homeTeam: {id: 2, score: 2},
                awayTeam: {id: 3, score: 0},
            },
            {
                homeTeam: {id: 1, score: 1},
                awayTeam: {id: 4, score: 0},
            },
        ]
    },

    {
        id: 2,
        pairs: [
            {
                homeTeam: {id: 1, score: 2},
                awayTeam: {id: 2, score: 2},
            },
            {
                homeTeam: {id: 3, score: 1},
                awayTeam: {id: 4, score: 10},
            },
        ]
    }
];

const teams = [
    {id: 1, name: 'dynamo'},
    {id: 2, name: 'lakers'},
    {id: 3, name: 'liverpool'},
    {id: 4, name: 'patriots'},
];

const showWeekResults = (weekId) => {
    debugger;
    const week = weeks.find(w => w.id === weekId);

    if (!week) {
        return 'no week by this ID';
    }

    return week.pairs.map(pair => {
        const hT = teams.find(t => t.id === pair.homeTeam.id);
        const aT = teams.find(t => t.id === pair.awayTeam.id);

        return `${hT.name} vs ${aT.name} (${pair.homeTeam.score}:${pair.awayTeam.score})`;
    }).join('\n');
};

const showStanding = () => {
    const result = {};

    for (const team of teams) {
        result[team.id] = {
            plus: 0,
            minus: 0,
            win: 0,
            lose: 0,
            tie: 0,
        }  
    }

    for (const {pairs} of weeks) {
        for (const {homeTeam, awayTeam} of pairs) {
            result[homeTeam.id].plus += homeTeam.score;
            result[awayTeam.id].plus += awayTeam.score;

            result[homeTeam.id].minus += awayTeam.score;
            result[awayTeam.id].minus += homeTeam.score;

            switch (true) {
                case homeTeam.score === awayTeam.score:
                    result[homeTeam.id].tie++;
                    result[awayTeam.id].tie++;
                    break;

                case homeTeam.score > awayTeam.score:
                    result[homeTeam.id].win++;
                    result[awayTeam.id].lose++;
                    break;

                case homeTeam.score < awayTeam.score:
                    result[awayTeam.id].win++;
                    result[homeTeam.id].lose++;
                    break;
            }
        }
    }
    
    return result;
};

const byField = (field) => {
    return (a, b) => a[field] > b[field] ? 1: -1;
}

const showResultForAllTeams = (obj) => {
    const result = {};

    for (const teamId in obj) {
        result[teamId] = {
            ...obj[teamId],
            points: 0
        }

        if(obj[teamId].win > 0) {
            result[teamId].points += obj[teamId].win * 3;
        }

        if(obj[teamId].tie > 0) {
            result[teamId].points += obj[teamId].tie;
        }
    }
    const resultArray = Object.entries(result).sort((a, b) => b[1].points - a[1].points);
    const objResult = resultArray.map(([key, value]) => ({ [key]: value }));
    return objResult;
}

const test = showWeekResults(1);
const test1 = showStanding();
const test2 = showResultForAllTeams(test1);
// console.log(test);
// console.log(test1);
console.log(test2);

/*
    {[team.id]: {score: number, concede: number, points: number}}
    HW: win: number, l: number, deuce: number,
    finish tournament code with sorting and add w/l/d
*/