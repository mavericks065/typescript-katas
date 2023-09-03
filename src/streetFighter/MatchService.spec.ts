import {Match} from "./Match";
import {MatchService} from "./MatchService";

describe("For a season", () => {
    it("should return a list of matches", async () => {
        // given
        const expectedMatch = {
            'timeslot': 1,
            'home': "blanka",
            'away': "e honda",
            'roundsWon1': 2,
            'roundsWon2': 0
        }
        const matchService = new MatchService();

        const matches: Array<Match> = await matchService.getMatches("2022-2023");

        // then
        expect(matches.length).toEqual(66);
        expect(matches[0]).toEqual(expectedMatch);
        expect(matches[0].getWinner()).toBe("blanka");
    });
});
