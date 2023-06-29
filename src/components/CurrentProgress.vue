<template>
    <LayoutBaseContentElement
        :css="customCss"
    >
        <template v-slot:title>Current Progress</template>
        <template v-slot:desc>This table will show you how your current projects are behaving.</template>
        <template v-slot:body-content>
            <div class="list-items">
                <div class="item-block" v-for="item in arr">
                    <img :src="getURL(item.img)">
                    <div class="item-title">
                        <div>{{ item.title }}</div>
                        <div class="desc-content">{{ item.desc }}</div>
                    </div>
                    <div>{{ item.lastTime }}</div>
                    <div class="block-info">
                        <div>
                            <img src="/assets/image/clock.png">
                            <div>{{ item.time }}</div>
                        </div>
                        <div>
                            <img src="/assets/image/message.png">
                            <div>{{ item.messages }}</div>
                        </div>
                    </div>
                    <div style="display: flex;justify-content: center;align-items: center;">
                        <div class="progress-block">
                            <div :style="[{'width': item.percent+'%'}, item.color]" class="progress-bar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </LayoutBaseContentElement>
</template>

<script>
import LayoutBaseContentElement from "@/layouts/LayoutBaseContentElement.vue";

export default {
    name: "CurrentProgress",
    components: {LayoutBaseContentElement},
    data() {
        return {
            customCss: {
                background: 'none',
            },
            arr: [
                {
                    img: undefined,
                    title: 'Project Title',
                    desc: 'Design&Development',
                    lastTime: 'Last updated Today at 4:24 AM',
                    time: '26:30',
                    messages: 624,
                    color: {
                        backgroundColor: '#df468e',
                    },
                    percent: 15,
                },
                {
                    img: undefined,
                    title: 'Project Title',
                    desc: 'Design&Development',
                    lastTime: 'Last updated Today at 4:24 AM',
                    time: '26:30',
                    messages: 624,
                    color: {
                        backgroundImage: 'linear-gradient(90deg, #00bfa5 0%, #a6ffea 100%)'
                    },
                    percent: 95,
                },
                {
                    img: undefined,
                    title: 'Project Title',
                    desc: 'Design&Development',
                    lastTime: 'Last updated Today at 4:24 AM',
                    time: '26:30',
                    messages: 624,
                    color: {
                        backgroundImage: 'linear-gradient(90deg, #2878ff 0%, #81b0ff 100%)'
                    },
                    percent: 80,
                },
                {
                    img: undefined,
                    title: 'Project Title',
                    desc: 'Design&Development',
                    lastTime: 'Last updated Today at 4:24 AM',
                    time: '26:30',
                    messages: 624,
                    color: {
                        backgroundColor: '#aa00ff',
                    },
                    percent: 25,
                },
            ]
        }
    },
    methods: {
        getURL(url) {
            if (url) {
                return url
            } else return './assets/image/defAvatar.svg'
        }
    },
}
</script>

<style scoped>
.list-items {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.item-block {
    padding: 10px;
    background-color: white;
    display: grid;
    grid-template-columns: 60px 240pt 200pt 150pt auto;
    align-items: center;
}

.item-title {
    padding-inline: 15px 10px;
}

.block-info {
    display: flex;
    gap: 20px;
    align-items: center;
    padding-inline: 20px 20px;
    border-left: 1px solid #BCC7D3;
}

.block-info > div {
    display: flex;
    align-items: center;
    gap: 10px;
}

.block-info > div > img {
    width: 20px;
    height: 20px;
    opacity: .6;
}

.progress-block {
    //min-width: 150px;
    width: 80%;
    background-color: #cfd8dc;
    height: 10px;
    border-radius: 15px;
}

.progress-bar {
    height: 100%;
    background-color: #51c814;
    border-radius: 15px;
}
</style>