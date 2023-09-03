import fs from "fs";
import path from "path";

export interface Fighter {
    id: number;
    firstname: string;
    lastname: string | null;
    country: string | null;
}

export class FighterService {

    parseJsonFile = <T>(filePath: string): T[] => {
        const jsonString = fs.readFileSync(filePath, 'utf-8');
        const jsonData = JSON.parse(jsonString);
        return jsonData;
    };

    getFighters = (): Record<string, Fighter> => {
        const jsonFilePath = path.resolve("src/streetFighter/sources/getFcaApiFighters.json");
        const fightersArr: Array<Fighter> = this.parseJsonFile(jsonFilePath);

        const fighters: Record<string, Fighter> = {};
        fightersArr.forEach(fighter => {
            fighters[fighter.firstname] = fighter
        })

        return fighters;
    };
};