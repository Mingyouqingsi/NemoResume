<template>
    <div>
        <h2 v-if="star">Loading...</h2>
        <h3 v-else>First star is {{v}}</h3>
    </div>
</template>
<script>
export default {
    data() {
        return {
            star: true,
            v: ''
        }
    },
    mounted() {
        // this.getStars()
        this.getLocalRes()
    },
    methods: {
        getStars() {
            let url = 'https://api.github.com/search/repositories?q=r&sort=stars'
            this.axios({
                method: 'get',
                url: url
            }).then((res) => {
                console.log(res)
                this.star = false
                this.v = res.data.items[0].name
            })
            // this.axios.get(url)
            //     .then((res) => {
            //         console.log(res)
            //         this.star = false
            //         this.v = res.data.items[0].name
            //     })
            //     .catch((err) => {
            //         console.log(err)
            //     })
        },
        getLocalRes() {
            this.axios.get('/api/oneres')
                .then((res) => {
                    console.log(res)
                })
        }
    }
}
</script>
<style lang="scss" scoped>
</style>
