import { CreateTable } from "../domain/use-cases/create-table.js";
import { SaveFile } from "../domain/use-cases/save-file.js";


interface RunOptions {
    base: number,
    limit: number,
    showTable: boolean,
    fileName: string,
    fileDestination: string
}


export class ServerApp {

    static run({ base, limit, showTable, fileName, fileDestination }: RunOptions) {
        const table = new CreateTable().execute({ base, limit });
        const wasCreated = new SaveFile().execute(
            {
                fileContent: table,
                fileDestination,
                fileName
            });

        if (showTable) {
            console.log(table)
        }

        (wasCreated)
            ? console.log('file created')
            : console.log('file was not created')
    }
}