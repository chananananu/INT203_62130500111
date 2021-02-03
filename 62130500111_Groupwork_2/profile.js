const app = {
    data() {
        return {
            firstname: 'Chananan',
            lastname: 'Likitsarawit',
            city: 'BKK TH',
            follower: '10.4k',
            project: '1234',
            rank: '4321',
            image: './images/image.jpg',
            cover: './images/cover.png',
        }
    }
}
mountApp = Vue.createApp(app).mount('#app')