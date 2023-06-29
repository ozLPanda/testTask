<template>
    <LayoutBaseContentElement>
        <template v-slot:title>Hi Fillip</template>
        <template v-slot:desc>Checkout your latest projects and their progress.</template>
        <template v-slot:options>
        </template>
        <template v-slot:body-content>
            <div class="header-body-content">
                <div>
                    <div class="title-content">Wavy Lines</div>
                    <div class="desc-content">Working Hours</div>
                </div>
                <div id="week-control">
                    <div>THIS WEEK</div>
                    <img src="/assets/image/arrowDrop.svg">
                </div>
            </div>
            <canvas name="chart"></canvas>
        </template>
    </LayoutBaseContentElement>
</template>

<script>
import Chart from 'chart.js/auto'
import LayoutBaseContentElement from "../layouts/LayoutBaseContentElement.vue";

export default {
    name: "WayvyLines",
    components: {LayoutBaseContentElement},
    props: {
        date: Array,
        lines: Array
    },
    data() {
        return {
            chart: undefined,
        }
    },
    computed: {
        getMax() {
            // Получаем все линии, собираем у них все точки и между этим всем ищем максимальное число
            return this.lines.reduce((max, item) => {
                let i = item.data.reduce((n, i) => {
                    return n < i ? i : n
                }, 0)
                return max < i ? i : max
            }, 0) + 5
        }
    },
    mounted() {
        let ctx = document.querySelector('canvas[name="chart"]');
        if(!ctx) return;
        this.chart = new Chart(ctx.getContext('2d'), {
            type: 'line',
            data: {
                labels: [...this.date],
                datasets: [
                    ...this.lines
                ],
            },
            options: {
                scales: {
                    y: {
                        suggestedMin: 0,
                        suggestedMax: this.getMax,
                    }
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
canvas {
    width: 100%;
    max-height: 500px !important;
}
</style>