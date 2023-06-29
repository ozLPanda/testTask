<template>
    <div class="content-block">
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
        <div class="diagram-block">
            <canvas name="chart"></canvas>
        </div>
    </div>
</template>

<script>
import Chart from "chart.js/auto";
import moment from 'moment';

export default {
    name: "DailyProgress",
    data() {
        return {
            chart: undefined
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
        },
        lines() {
            return [
                {
                    label: '',
                    data: [50, 30, 60, 50, 60, 65, 68],
                    backgroundColor: ['#7d57c1'],
                    tension: 0,
                    order: 1,
                },
                {
                    label: '',
                    data: [50, 30, 60, 50, 60, 65, 68],
                    borderColor: ['#ffc400'],
                    borderWight: 2,
                    tension: 0,
                    type: 'line',
                    order: 0,
                    pointRadius: 5,
                    pointHoverRadius: 10,
                    pointBackgroundColor: ['#ffc400'],
                },
            ]
        },
        week() {
            let t = [];
            for (let i = 1; i <= 7; i++) {
                t.push(moment().day(i).format("DD.MM"));
            }
            return t;
        },
    },
    mounted() {
        let ctx = this.$el.querySelector('canvas[name="chart"]');
        if (!ctx) return
        this.chart = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: [...this.week],
                datasets: [...this.lines],
            },
            options: {
                scales: {
                    y: {
                        suggestedMin: 0,
                        suggestedMax: this.getMax,
                    },
                },
                barPercentage: 0.4,
                layout: {
                    padding: 10
                }
            }
        })
    }
}
</script>

<style scoped>
.content-block {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.diagram-block {
    height: 100%;
    display: flex;
    align-items: center;
}
</style>