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
            <div class="container-cards">
                <div class="card-block">
                    <div style="width: 100%;display: flex;justify-content: flex-start;">
                        <div class="card-title">
                            <div>Client Hours</div>
                            <div class="desc-content">Working Hours</div>
                        </div>
                    </div>
                    <div class="block-chart" style="max-height: 450px;">
                        <span id="max-text-circe">{{ getMax }}<br>Working Hours</span>
                        <canvas name="chart1"></canvas>
                    </div>
                    <div class="block-desc-circle">
                        <div class="elem-desc" v-for="item in circleData">
                            <div class="d-flex align-center g10">
                                <span :style="[{'backgroundColor': item.color}]"></span>
                                <div class="w-max-content">{{ item.title }}</div>
                            </div>
                            <div>{{ item.value }}h</div>
                        </div>
                    </div>
                </div>
                <div class="card-block">
                    <div class="card-title-image">
                        <div class="profile-block">
                            <div class="view-avatar">
                            </div>
                            <span class="status-avatar"></span>
                        </div>
                        <div>Jake Appleseed</div>
                        <div class="desc-content">London, UK</div>
                    </div>
                    <div class="t-content">
                        <div>
                            <div class="desc-content">Working hours</div>
                            <div>14 hours</div>
                        </div>
                        <div>
                            <div class="desc-content">Ammount Total</div>
                            <div>$ 6,269</div>
                        </div>
                        <div>
                            <div class="desc-content">Overdue</div>
                            <div>$ 829</div>
                        </div>
                        <div>
                            <div class="desc-content">% overall work</div>
                            <div>48%</div>
                        </div>
                    </div>
                    <div id="custom-href1">
                        <div>Send Invoice</div>
                    </div>
                </div>
                <div class="card-block">
                    <div style="width: 100%;display: flex;justify-content: flex-start;">
                        <div class="card-title">
                            <div>Total Overdue</div>
                            <div class="desc-content">I need Dollars</div>
                        </div>
                    </div>
                    <div style="width: 100%;height: 100%;position: relative;display: flex;align-items: center;justify-content: center">
                        <div class="title-chart">$14,220</div>
                        <div class="block-chart" style="display: flex;align-items: center;height: 250px;">
                            <canvas name="chart2"></canvas>
                        </div>
                    </div>
                    <div id="block-custom-href2">
                        <div style="padding-inline: 20px;padding-block: 0px 20px;">
                            <div id="custom-href2">Export PDF</div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </LayoutBaseContentElement>
</template>

<script>
import LayoutBaseContentElement from "@/layouts/LayoutBaseContentElement.vue";
import Chart from "chart.js/auto";

export default {
    name: "CrunchSomeNumbersCircle",
    components: {LayoutBaseContentElement},
    data() {
        return {
            customCss: {
                background: 'none',
            },
            circleData: [
                {color: '#ff003c', title: 'Sweet & Simple LTD.', value: '37:45'},
                {color: '#ff4a78', title: 'Nike Running Shoes', value: '16:22'},
                {color: '#fa91a8', title: 'Some Cool Company', value: '3:14'},
            ],
            chart1: undefined,
            chart2: undefined,
        }
    },
    computed: {
        getMax() {
            let max = String(this.circleData.reduce((sum, item) => sum += Math.round(Number(item.value.replaceAt(item.value.indexOf(':'), '.'))), 0));
            return max
        }
    },
    mounted() {
        //region chart1
        let ctx1 = document.querySelector('canvas[name="chart1"]').getContext('2d');
        this.chart1 = new Chart(ctx1, {
            type: 'doughnut',
            label: '',
            data: {
                datasets: [{
                    label: '',
                    data: [37.45, 16.22, 3.14],
                    backgroundColor: [
                        ...this.circleData.map(item=>item.color)
                    ],
                    hoverOffset: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '75%',
                layout: {
                    padding: 20,
                },
            }
        })
        //endregion
        //region chart2
        let ctx2 = document.querySelector('canvas[name="chart2"]').getContext('2d');
        this.chart1 = new Chart(ctx2, {
            type: 'line',
            data: {
                labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                datasets: [{
                    label: '',
                    data: [8, 10, 21, 21, 25, 23, 20],
                    borderColor: ['#a389d3'],
                    fill: false,
                    tension: 0.1,
                    pointBackgroundColor: ['#a389d3']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements:{
                    point:{

                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                    },
                    y: {
                        beginAtZero: true,
                        suggestedMax: 30
                    },
                },
            }
        })
        //endregion
    }
}
</script>

<style scoped>
#block-custom-href2{
    display: flex;
    justify-content: flex-start;
    align-items: end;
    width: 100%;
}

#custom-href2{
    font-size: 10pt;
    opacity: .5;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    cursor: pointer;
}

.block-desc-circle {
    width: 80%;
    padding-bottom: 50px;
}

.title-chart{
    font-size: 20pt;
    position: absolute;
    top: 15px;
}

.elem-desc {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 10px;
}

.elem-desc span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.container-cards {
    display: flex;
    height: 100%;
    gap: 20px;
}

#custom-href1{
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
}

#custom-href1 > div{
    color: #df468e;
    border-bottom: 1px solid #df468e;
    cursor: pointer;
}

.t-content {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding-top: 10%;
}

.t-content .desc-content{
    width: max-content;
}

.container-cards .desc-content {
    font-size: 10pt;
}

.t-content > div{
    padding: 25px;
}

.t-content > div:nth-child(1),
.t-content > div:nth-child(2) {
    border-top: 1px solid rgb(188, 199, 211);
}

.t-content > div:nth-child(1) {
    border-right: 1px solid rgb(188, 199, 211);
}

.t-content > div:nth-child(3),
.t-content > div:nth-child(4) {
    border-top: 1px solid rgb(188, 199, 211);
    border-bottom: 1px solid rgb(188, 199, 211);
}

.t-content > div:nth-child(3) {
    border-right: 1px solid rgb(188, 199, 211);
}

.card-block {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    max-height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
}

.card-title {
    padding: 15px;
}

.card-title-image {
    display: flex;
    /*justify-content: center;*/
    align-items: center;
    flex-direction: column;
    /*padding-block: 15px;*/
    padding-block: 30px 15px;
}

.profile-block {
    padding-bottom: 10px;
}

.view-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: url("/assets/image/testAvatar.jpg");
    background-position: center;
    background-size: cover;
}

.status-avatar {

}

.block-chart {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}

#max-text-circe {
    font-size: 1.4em;
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

@media (max-width: 1400px){
    .container-cards{
        flex-direction: column;
    }

    #block-custom-href2 > div{
        padding-inline: 20px !important;
        padding-block: 20px 20px !important;
    }

    #custom-href1{
        padding-block: 15px;
    }

    .card-block:nth-child(3) .block-chart{
        padding-top: 50px;
    }

    .card-block{
        min-height: 660px;
    }

    .view-avatar{
        width: 250px;
        height: 250px;
    }

    .t-content{
        padding-top: 0px;
    }

    /*#max-text-circe{*/
    /*    font-size: 20pt;*/
    /*}*/
}



</style>