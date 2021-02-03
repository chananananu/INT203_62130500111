const app = {
    data() {
        return {
            firstname: 'Chananan',
            lastname: 'Likitsarawit',
            city: 'BKK TH',
            bussiness: 'KMUTT',
            faculty: 'School of Infomation Technology',
            major: 'Information Technology',
            id: '62130500111',
            image: './images/image.jpg',
        }
    }
}
mountApp = Vue.createApp(app).mount('#app')