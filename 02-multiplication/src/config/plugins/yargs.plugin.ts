import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(process.argv)
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base'
    })
    .option("l", {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
    })
    .option("s", {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show Multiplication table'
    })
    .option("n", {
        alias: 'name',
        type: 'string',
        demandOption: true,
        describe: 'File name'
    })
    .option("d", {
        alias: 'destination',
        type: 'string',
        demandOption: true,
        describe: 'File destination dir'
    })
    .parseSync();

