/* Vue App Start */
const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            message: 'Benvenuto',

        }
    }
};

createApp(opzioni).mount('#app')