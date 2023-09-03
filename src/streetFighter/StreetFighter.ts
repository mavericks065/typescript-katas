import {Fighter} from "./FightersService";
import {Match} from "./Match";

export class Ranking {
    fighterId: number;
    name: string;
    country: string;
    rank: number;
    totalPoints: number;

    constructor(fighterId: number, name: string, country: string, rank: number, totalPoints: number) {
        this.fighterId = fighterId;
        this.name = name;
        this.country = country;
        this.rank = rank;
        this.totalPoints = totalPoints;
    }
}

export function calculateResult(fighters: Record<string, Fighter>, matches: Array<Match>): Array<Ranking> {
    const seasonRanking: Array<Ranking> = [];
    Object.entries(fighters).forEach((kv) => {
        const [id, fighter] = kv;
        const ranking = new Ranking(fighter.id, fighter.firstname, fighter.country ?? "", 0, 0);
        seasonRanking.push(ranking);
    });
    matches.forEach(match => {
        const awayFighter = fighters[match.away];
        const homeFighter = fighters[match.home];
        const awayPts = match.roundsWon2 > match.roundsWon1 ? 3 :  match.roundsWon2 === match.roundsWon1 ? 1 : 0;
        const homePts = match.roundsWon1 > match.roundsWon2 ? 3 :  match.roundsWon1 === match.roundsWon2 ? 1 : 0;
        seasonRanking[awayFighter.id].totalPoints += awayPts
        seasonRanking[homeFighter.id].totalPoints += homePts
    });
    seasonRanking.sort((r1, r2) => r2.totalPoints - r1.totalPoints)
        .forEach((ranking, idx) => {
            ranking.rank = idx + 1;
        });

    return seasonRanking;
}
