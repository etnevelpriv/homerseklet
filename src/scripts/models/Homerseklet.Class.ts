import type { Homerseklet_Interface } from "./Homerseklet.Interface";
export class Homerseklet implements Homerseklet_Interface {
    day: string;
    temperature: number;
    constructor(day: string, temperature: number) {
        this.day = day;
        this.temperature = temperature;
    };
    toCSV(homerseklet: Homerseklet) {
        return(
`
\{
day:${homerseklet.day},
temperature:${homerseklet.temperature}
\},
`)
    };
};