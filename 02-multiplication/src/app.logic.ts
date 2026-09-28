import * as fs from 'fs';
import { yarg } from "./config/plugins/yargs.plugin.js"

const multiplicador = yarg.b;
const limit = yarg.l;

let header = `
-------------------------------
Tabla de multiplcar del ${multiplicador}
-------------------------------
\n`;

let outputMessage = '';



outputMessage = header + outputMessage;

if(yarg.s){
    console.log(outputMessage)
}


