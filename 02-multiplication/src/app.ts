import { yarg } from "./config/plugins/yargs.plugin.js";
import { ServerApp } from "./presentation/server-app.js";

const main = async () => {

    const { b: base, l: limit, s: showTable, n : fileName, d: fileDestination  } = yarg;

    ServerApp.run({
        base, limit, showTable, fileName, fileDestination
    });
}

(
    async () => {
        await main();
    }
)();


