import { ServiceForm } from "./ServiceForm.js"
import { Requests } from "./Requests.js"



export const SinkRepair = () => {
    return `
        <h1>Maude and Merle's Sink Repair</h1>
        <div id = forms>
        <section class="serviceForm">
        ${ServiceForm()}
        </section>
        </div>
        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Requests()}
        </section>
    `
}



