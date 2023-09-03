import {FighterService} from "../FightersService";

describe("Fighters service", () => {
    it("should return the list of fighters", async () => {
        // given
        const fighterService = new FighterService();
        // when
        const fightersResult = fighterService.getFighters();

        // then
        expect(Object.entries(fightersResult).length).toEqual(12)
        expect(fightersResult[0]).toEqual({
            "id": 0,
            "firstname": "Ryu",
            "country": "JPN"
        })
        expect(fightersResult[1]).toEqual({
                "id": 1,
                "firstname": "Edmond",
                "lastname": "Honda",
                "country": "JPN"
            })
    })
});