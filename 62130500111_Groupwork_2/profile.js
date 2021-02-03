const app = {
    data() {
        return {
            firstname: 'Chananan',
            lastname: 'Likitsarawit',
            city: 'BKK TH',
            university: 'KMUTT',
            faculty: 'School of Infomation Technology',
            major: 'Information Technology',
            id: '62130500111',
            image: './images/image.jpg',
        }
    }
}
mountApp = Vue.createApp(app).mount('#app')