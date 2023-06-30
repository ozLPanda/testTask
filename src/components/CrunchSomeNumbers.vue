<template>
    <LayoutBaseContentElement
        :css="customCss"
    >
        <template v-slot:title>Crunch some Numbers</template>
        <template v-slot:desc>See how your projects are progressing via the new statistics engine.</template>
        <template v-slot:options>
            <div>Timeline:</div>
            <select>
                <option value="1">7 days</option>
            </select>
        </template>
        <template v-slot:body-content>
            <div class="t-content">
                <div class="d-col">
                    <div class="d-col-elem">
                        <div class="elem-title">
                            <div>96</div>
                            <div>Working Hours</div>
                        </div>
                        <div class="cylinders-block">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="d-col-elem">
                        <div class="elem-title">
                            <div>1, 204</div>
                            <div>Conversations</div>
                        </div>
                        <div id="block-mini-diagram">
                            <canvas name="chart"></canvas>
                        </div>
                    </div>
                    <div class="d-col-elem">
                        <div class="elem-title">
                            <div>{{ countPeople }}</div>
                            <div>People</div>
                        </div>
                        <div class="circles-block">
                            <div v-for="item in countPeople"></div>
                        </div>
                    </div>
                </div>
                <div class="block-diagram">
                    <DailyProgress/>
                </div>
            </div>
        </template>
    </LayoutBaseContentElement>
</template>

<script>
import LayoutBaseContentElement from "@/layouts/LayoutBaseContentElement.vue";
import DailyProgress from "./DailyProgress.vue";
import Chart from "chart.js/auto";

export default {
    name: "CrunchSomeNumbers",
    components: {DailyProgress, LayoutBaseContentElement},
    data() {
        return {
            chart: undefined,
            countPeople: 7,
            customCss: {
                background: 'none'
            }
        }
    },
    computed: {
        getMax() {
            // Получаем все линии, собираем у них все точки и между этим всем ищем максимальное число
            // Здесь функция без добавки максимального значения
            return this.lines.reduce((max, item) => {
                let i = item.data.reduce((n, i) => {
                    return n < i ? i : n
                }, 0)
                return max < i ? i : max
            }, 0)
        },
        date() {
            return this.lines.map(item => {
                return [...item.data]
            })
        },
        lines() {
            return [
                {
                    label: '',
                    data: [1100, 1000, 980, 900, 1050, 980, 1030, 1000, 1204, 1180, 1100, 1050],
                    borderColor: ['#F50057'],
                    borderWidth: 2,
                    tension: 0.4
                },
            ]
        },
    },
    mounted() {
        let ctx = this.$el.querySelector('canvas[name="chart"]').getContext('2d');
        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [1,2,3,4,5,6,7,8,9,10,11,12],
                datasets: [
                    {
                        label: '',
                        data: [1100, 1000, 980, 900, 1050, 980, 1030, 1000, 1204, 1180, 1100, 1050],
                        borderColor: ['#F50057'],
                        borderWidth: 2,
                        tension: 0
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        ticks: {
                            display: false
                        },
                        grid: {
                            display: false
                        },
                    },
                    x: {
                        ticks: {
                            display: false
                        },
                        grid: {
                            display: false
                        },
                    },
                },
                elements: {
                    point:{
                        radius: 0
                    }
                },
                layout: {
                    // padding: 20
                },
            }
        })
    }
}
</script>

<style scoped>
#block-mini-diagram {
    display: flex;
    justify-content: center;
    align-items: center;
}

#block-mini-diagram canvas{
    width: 100%;
    height: 100%;
}

.t-content {
    display: grid;
    grid-template-columns: 380px auto;
    grid-gap: 30px;
}

.t-content > div{
    background-color: white;
}

.d-col {
    display: grid;
}

.block-diagram {
    grid-column: 2/2;
    width: 100%;
    height: 540px;
    overflow: hidden;
}

.d-col-elem{
    overflow: hidden;
    text-align: center;
    display: grid;
    grid-template-columns: 120pt 150pt;
    grid-template-rows: 1fr;
    /* padding: 10px 0px; */
    width: 100%;
    border: 1px solid rgba(188, 199, 211, 0.4);
    height: 100%;
}

.elem-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.elem-title div:nth-child(2) {
    width: max-content;
}

.cylinders-block {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 100%;
}

.cylinders-block div {
    width: 40px;
    height: 130px;
}

.cylinders-block div:nth-child(1) {
    background: linear-gradient(180deg, rgba(129,194,253,1) 0%, rgba(129,194,253,1) 20%, rgba(73,167,250,1) 20%, rgba(73,167,250,1) 45%, rgba(13,129,232,1) 45%, rgba(13,129,232,1) 100%);
}

.cylinders-block div:nth-child(2) {
    background: linear-gradient(180deg, rgba(163,242,196,1) 0%, rgba(163,242,196,1) 20%, rgba(93,244,187,1) 20%, rgba(93,244,187,1) 60%, rgba(35,242,139,1) 60%, rgba(35,242,139,1) 100%);
}

.cylinders-block div:nth-child(3) {
    background: linear-gradient(180deg, rgba(216,175,239,1) 0%, rgba(216,175,239,1) 20%, rgba(199,121,244,1) 20%, rgba(199,121,244,1) 45%, rgba(134,20,200,1) 45%, rgba(134,20,200,1) 100%);
}

.circles-block {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    gap: 10px;
}

.circles-block div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.circles-block div:nth-child(2n) {
    background-color: #CFD8DC;
}

.circles-block div:nth-child(2n+1) {
    background-color: #B0BEC5;
}

@media (max-width: 1300px){
    .t-content{
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }

    .t-content .block-diagram{
        grid-column: 1/1;
        grid-row: 2/2;
        width: 100%;
    }

    .d-col{
        grid-column: 1/1;
        grid-row: 1/1;
        width: 100%;
        grid-template-rows: 1fr 1fr 1fr;
    }

    .d-col-elem{
        display: grid;
        grid-template-columns: 200pt auto;
        justify-items: center;
    }

    .cylinders-block{
        width: max-content;
    }
}
</style>