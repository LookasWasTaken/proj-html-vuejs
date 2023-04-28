import { reactive } from "vue";

export const state = reactive({
    userName: null,
    userEmail: null,
    userPhone: null,
    userMessage: null,
    name: null,
    email: null,
    storeInfo: [],
    storeUserInfo: [],
    saveInfo(){
        this.storeInfo.push({name : this.name, email : this.email})
        this.name = null
        this.email = null
    },
    storeData(){
        this.storeUserInfo.push({userName : this.userName, userEmail : this.userEmail, userPhone : this.userPhone, userMessage : this.userMessage})
        this.userName = null,
        this.userEmail = null,
        this.userPhone = null,
        this.userMessage = null
    },
});
