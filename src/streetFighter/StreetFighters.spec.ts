import {Fighter} from "./FightersService";
import {Match} from "./Match";
import {calculateResult, Ranking} from "./StreetFighter";


describe("Street Fighters", () => {
    it("should return the ranking of the fighters of the season", async () => {
        // given
        const fighters: Record<string, Fighter> = {
            'Ryu': {
                "id": 0,
                "firstname": "Ryu",
                "lastname": null,
                "country": "JPN",
            },
            'Edmond': {
                "id": 1,
                "firstname": "Edmond",
                "lastname": null,
                "country": "JPN",
            }
        };

        const matches: Array<Match> = [
            {
                'timeslot': 1,
                'home': "Ryu",
                'away': "Edmond",
                'roundsWon1': 2,
                'roundsWon2': 0
            }, {
                'timeslot': 2,
                'home': "Ryu",
                'away': "Edmond",
                'roundsWon1': 2,
                'roundsWon2': 0
            }, {
                'timeslot': 3,
                'home': "Ryu",
                'away': "Edmond",
                'roundsWon1': 1,
                'roundsWon2': 1
            }]

        // when
        const seasonResult: Array<Ranking> = calculateResult(fighters, matches);

        // then
        expect(seasonResult.length).toEqual(2)
        expect(seasonResult[0]).toEqual({
            "fighterId": 0,
            "name": "Ryu",
            "country": "JPN",
            "rank": 1,
            "totalPoints": 7
        })
        expect(seasonResult[1]).toEqual({
            "fighterId": 1,
            "name": "Edmond",
            "country": "JPN",
            "rank": 2,
            "totalPoints": 1
        })
    })
});