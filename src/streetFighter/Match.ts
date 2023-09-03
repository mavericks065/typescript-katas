export class Match {
    timeslot: number;
    home: string;
    away: string;
    roundsWon1: number;
    roundsWon2: number;

    constructor(timeslot: number, home: string, away: string, roundsWon1: number, roundsWon2: number) {
        this.timeslot = timeslot;
        this.home = home;
        this.away = away;
        this.roundsWon1 = roundsWon1;
        this.roundsWon2 = roundsWon2;
    }
}