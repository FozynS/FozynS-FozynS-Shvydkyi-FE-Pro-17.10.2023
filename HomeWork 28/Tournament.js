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
                awayTeam: {id: 4, score: 1},
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
            points: 0
        }  
    }

    for (const {pairs} of weeks) {
        for (const {homeTeam, awayTeam} of pairs) {
            result[homeTeam.id].plus += result[homeTeam.id].score;
            result[awayTeam.id].plus += result[awayTeam.id].score;

            result[homeTeam.id].minus += result[awayTeam.id].score;
            result[awayTeam.id].minus += result[homeTeam.id].score;
            switch (true) {
                case homeTeam.score === awayTeam.score:
                    result[homeTeam.id].points++;
                    result[awayTeam.id].points++;
                    break;

                case homeTeam.score > awayTeam.score:
                    result[homeTeam.id].points + 3;
                    break;

                case homeTeam.score < awayTeam.score:
                    result[awayTeam.id].points + 3;
                    break;
            }
        }
    }
    
    return result;
};

const test = showWeekResults(1);
const test1 = showStanding();
console.log(test);
// console.log(test1);
// RULES: win -> 3pt, deuce = 1pt, loose = 0pt
// {
//   homeTeam: {id: 1, score: 2},
//   awayTeam: {id: 3, score: 3},
// },

/*
    {[team.id]: {score: number, concede: number, points: number}}
    HW: win: number, l: number, deuce: number,
    finish tournament code with sorting and add w/l/d
*/