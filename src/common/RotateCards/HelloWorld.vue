<template>
    <div class="container">
        <section class="score-panel">
            <span class="moves">0</span> Moves
            <div
                class="restart"
                @click="shuffle"
            >
            </div>
        </section>

        <ul
            class="deck"
            id="deck"
        >
            <li
                class="card"
                v-for="(item,index) in myArrInfo"
                :key="index"
            >{{item}}</li>
        </ul>
    </div>
</template>

<script src="./hello.js"></script>

<style scoped lang="less">
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.deck {
    width: 16.6rem;
    min-height: 16.8rem;
    background: linear-gradient(160deg, #02ccba 0%, #aa7ecd 100%);
    padding: 0.32rem;
    border-radius: 0.1rem;
    box-shadow: 0.12rem 0.15rem 0.2rem 0 rgba(46, 61, 73, 0.5);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 1rem;
    .card {
        height: 3.25rem;
        width: 3.35rem;
        background: #2e3d49;
        font-size: 0;
        color: #ffffff;
        border-radius: 0.08rem;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0.05rem 0.02rem 0.2rem 0 rgba(46, 61, 73, 0.5);
        transform: rotateY(180deg);
        transition: transform 0.3s;
    }
    .open {
        transform: rotateY(360deg);
        background: #02b3e4;
        cursor: default;
        transition: transform 0.3s;
    }
    .show {
        font-size: 0.33rem;
    }
    .match {
        cursor: default;
        background: #02ccba;
        font-size: 0.33rem;
        animation: fbig 0.3s alternate;
    }
}

@keyframes fbig {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.1);
    }
}

.score-panel {
    width: 4.45rem;
    margin-bottom: 0.1rem;
    display: flex;

}

.score-panel .restart {
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    // background-color: antiquewhite;
}
</style>
