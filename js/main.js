/* Vue App Start */
const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            userMail:[]

        }
    },
    methods:{
        generaMail() {

            console.log("Genera mail click")
            for (let i = 0; i < 10; i++) {
                
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
                    console.log(resp.data.response);
    
                    this.userMail.push(resp.data.response);
                });
                
            }
        }
    },
};

createApp(opzioni).mount('#app')