import { reactive } from "vue";

export const state = reactive({
    name: null,
    email: null,
    storeInfo: [],
    saveInfo(){
        this.storeInfo.push({name : this.name, email : this.email})
        this.name = null
        this.email = null
    }
});
