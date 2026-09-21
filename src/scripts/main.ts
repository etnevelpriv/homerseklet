import { Homerseklet } from "./models/Homerseklet.Class";
import "../styles/style.css";

const init = async function () {
    const idojarasData = await fetchIdojaras();
    console.log(idojarasData)
    printIdojarasTable(idojarasData);

}

const printIdojarasTable = function (arr: Homerseklet[]) {
    const TBodyElement = document.getElementById("idojarasTBody")
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