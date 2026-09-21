import type { Homerseklet } from "./models/Homerseklet.Class";
import type { Homerseklet_Interface } from "./models/Homerseklet.Interface";
import "../styles/style.css";

const init = async function() {
    const idojarasData = await fetchIdojaras();
    console.log(idojarasData)
}

const fetchIdojaras = async function() {
    const URL = "https://petrik-idojaras-default-rtdb.europe-west1.firebasedatabase.app/.json";
    try {
        const response = await fetch(URL, {
            method: "GET"
        });
        if (response.ok) {
            const data = response.json();
            return(data)
        }
    } catch (err:Error|any) {
        throw new Error(err);
    };
};

document.addEventListener("DOMContentLoaded", init);