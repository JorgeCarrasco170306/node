import fs from 'fs';

export interface SaveFileUseCase {
    execute: (options: SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
    fileContent: string,
    fileDestination?: string,
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase {

    constructor() {
        /**
         *
         */
    }

     execute({ fileContent, fileDestination: destination = 'outputs', fileName = 'table' }: SaveFileOptions) {

        try {
            fs.mkdirSync(destination, { recursive: true });
            fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent);
            return true;
        }

        catch (error) {
            return false;
        }
    }
}