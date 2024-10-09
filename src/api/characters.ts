import { instance } from "./base.api";

const endpoint : string = "character";

export  const characters = {
  getAll: function ({page}:{page:number}) {
    return instance.get(endpoint, {params:{page

    }})
    
  }
}