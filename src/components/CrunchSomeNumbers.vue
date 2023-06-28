<template>
    <LayoutBaseContentElement>
        <template v-slot:title>Crunch some Numbers</template>
        <template v-slot:desc>See how your projects are progressing via the new statistics engine.</template>
        <template v-slot:options>
            <div>Timeline:</div>
            <select>
                <option>This week</option>
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
                        <div>
                            <canvas name="chart"></canvas>
                        </div>
                    </div>
                    <div class="d-col-elem">
                        <div class="elem-title">
                            <div>7</div>
                            <div>People</div>
                        </div>
                        <div class="circles-block">
                            <div v-for="item in 7"></div>
                        </div>
                    </div>
                </div>
                <div style="width: 100%;">
                    <DailyProgress/>
                </div>
            </div>
        </template>
    </LayoutBaseContentElement>
</template>

<script>
import LayoutBaseContentElement from "../layouts/LayoutBaseContentElement.vue";
import DailyProgress from "./DailyProgress.vue";
import Chart from "chart.js/auto";

export default {
    name: "CrunchSomeNumbers",
    components: {DailyProgress, LayoutBaseContentElement},
    data() {
        return {
            chart: undefined,
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
            return this.lines.map(item=>{
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
                labels: [...this.date],
                datasets: [
                    ...this.lines
                ],
            },
            options: {
                scales: {
                    // y: {
                    //     ticks: {
                    //         display: false
                    //     },
                    //     grid: {
                    //         display: false
                    //     }
                    // },
                    // x: {
                    //     ticks: {
                    //         display: false
                    //     },
                    //     grid: {
                    //         display: false
                    //     }
                    // }
                },
                layout: {
                    padding: 20
                },
            }
        })
    }
}
</script>

<style scoped>
.t-content {
    display: flex;
    gap: 30px;
}

.d-col {
    width: max-content;
    display: flex;
    flex-direction: column;
}

.d-col-elem {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    border-block: 1px solid rgba(188, 199, 211, 0.4);
}

.elem-title {
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
    gap: 20px;
    width: 100%;
    height: 100%;
}

.cylinders-block div {
    width: 40px;
    min-height: 130px;
    height: 100%;
}

.cylinders-block div:nth-child(1) {
    /*background: rgb(30,136,229);*/
    background: linear-gradient(180deg, rgba(30, 136, 229, 0.2) 20%, rgba(30, 136, 229, 0.25) 20%, #1E88E5 60%);
}

.cylinders-block div:nth-child(2) {
    background-color: #51c814;
}

.cylinders-block div:nth-child(3) {
    background-color: #8614c8;
}

.circles-block {
    display: flex;
    flex-wrap: wrap;
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
</style>