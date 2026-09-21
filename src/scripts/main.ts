import { Homerseklet } from "./models/Homerseklet.Class";
import "../styles/style.css";

const init = async function () {
    const idojarasData = await fetchIdojaras();
    console.log(idojarasData)
    const idojarasArr = [...idojarasData]
    printIdojarasTable(idojarasArr);
    document.getElementById("formButton")?.addEventListener("click", () => {
        const formElement = document.getElementById("idojarasForm") as HTMLFormElement;
        const idojarasElement = document.getElementById("homersekletInput") as HTMLInputElement;
        const idojaras = idojarasElement.value;
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        const napNumber = new Date().getUTCDay();
        const nap = days[napNumber - 1];
        const homerseklet = new Homerseklet(nap, Number(idojaras));
        idojarasArr.push(homerseklet);
        printIdojarasTable(idojarasArr);
        formElement.reset();
    });
    document.getElementById("exportButton")?.addEventListener("click", () => {
        const startingString = `\[\n`
        const endString = `\n\]`
        idojarasArr.forEach((idojaras: Homerseklet) => {
            
        });
    });
};

const printIdojarasTable = function (arr: Homerseklet[]) {
    const TBodyElement = document.getElementById("idojarasTBody")
    while (TBodyElement?.firstChild) {
        TBodyElement.removeChild(TBodyElement.firstChild);
    };
    arr.forEach((homersekletAdat: Homerseklet) => {
        const homerseklet = new Homerseklet(homersekletAdat.day, homersekletAdat.temperature);

        const trElement = document.createElement("tr");
        const tdNapElement = document.createElement("td");
        const tdHomersekletElement = document.createElement("td");

        if (homerseklet.temperature > 30) {
            trElement.classList.add("tr-piros");
        } else if (homerseklet.temperature < 10) {
            trElement.classList.add("tr-kek");
        } else { trElement.classList.add("tr-szurke"); };

        tdNapElement.textContent = homerseklet.day;
        tdHomersekletElement.textContent = homerseklet.temperature.toString();

        TBodyElement?.appendChild(trElement);
        trElement.appendChild(tdNapElement);
        trElement.appendChild(tdHomersekletElement);
    });
};

const fetchIdojaras = async function () {
    const URL = "https://petrik-idojaras-default-rtdb.europe-west1.firebasedatabase.app/.json";
    try {
        const response = await fetch(URL, {
            method: "GET"
        });
        if (response.ok) {
            const data = response.json();
            return (data)
        }
    } catch (err: Error | any) {
        throw new Error(err);
    };
};

document.addEventListener("DOMContentLoaded", init);