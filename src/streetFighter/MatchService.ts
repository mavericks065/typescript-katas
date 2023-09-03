import {Match} from "./Match";
import fs from "fs";
import {parse} from "csv-parse";
import path from "path";


export class MatchService {
    parseCsvFile = async (filePath: string, delimiter: string): Promise<Match[]> => {
        const csvString = fs.readFileSync(filePath, 'utf-8');
        const parser = parse(csvString, {
            columns: true,
            delimiter,
            cast: true,
            bom: true,
        });

        const records: Match[] = [];
        for await (const record of parser) {
            const match = new Match(
                parseInt(record.timeslot),
                record.home,
                record.away,
                parseInt(record.roundsWon1),
                parseInt(record.roundsWon2)
            );
            records.push(match);
        }
        return records;
    };

    getMatches = async (season: string): Promise<Array<Match>> => {
        const csvFilePath = path.resolve("src/streetFighter/sources/SFPL_DB/2022-2023.csv");
        return this.parseCsvFile(csvFilePath, ",");
    }
}