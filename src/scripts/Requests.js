import { getRequests } from "./dataAccess.js"


const listItemsArray = () => {

}



export const Requests = () => {
    const requests = getRequests()
    const listItemsArray = (request) => {
       
         return  `<li>${request.description}</li>`
        }

        let html = ` 
        
        <ul>
      
    ${
        requests.map(listItemsArray).join("")
    }

        </ul > `
   
    return html
}


        </ul > `
   
    return html
}

