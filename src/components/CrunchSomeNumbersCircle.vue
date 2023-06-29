<template>
    <LayoutBaseContentElement
        :css="customCss"
    >
        <template v-slot:title>Crunch some Numbers</template>
        <template v-slot:desc>See how your projects are progressing via the new statistics engine.</template>
        <template v-slot:options>
            <time-line/>
        </template>
        <template v-slot:body-content>
            <div class="container-cards">
                <div class="card-block">
                    <div class="card-title">
                        <div>Client Hours</div>
                        <div class="desc-content">Working Hours</div>
                    </div>
                    <div class="block-chart">
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
                                <!--                                <img src="/assets/image/testAvatar.jpg">-->
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
                    <div class="card-title">
                        <div>Total Overdue</div>
                        <div class="desc-content">I need Dollars</div>
                    </div>
                    <div class="title-chart">$14,220</div>
                    <div class="block-chart">
                        <canvas name="chart2"></canvas>
                    </div>
                    <div id="custom-href2">Export PDF</div>
                </div>
            </div>
        </template>
    </LayoutBaseContentElement>
</template>

<script>
import LayoutBaseContentElement from "@/layouts/LayoutBaseContentElement.vue";
import TimeLine from "@/components/TimeLine.vue";
import Chart from "chart.js/auto";

export default {
    name: "CrunchSomeNumbersCircle",
    components: {TimeLine, LayoutBaseContentElement},
    data() {
        return {
            customCss: {
                background: 'none',
            },
            circleData: [
                {color: '#f40039', title: 'Sweet & Simple LTD.', value: '37:45'},
                {color: '#ec3b66', title: 'Nike Running Shoes.', value: '16:22'},
                {color: '#ed7491', title: 'Some Cool Company', value: '3:14'},
            ],
            chart1: undefined,
            chart2: undefined,
        }
    },
    computed: {
        getMax() {
            let max = String(this.circleData.reduce((sum, item) => sum += Number(item.value.replaceAt(item.value.indexOf(':'), '.')), 0));
            return max.replaceAt(max.indexOf('.'), ':')
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
                        '#f40039',
                        '#ec3b66',
                        '#ed7491',
                    ],
                    hoverOffset: 5
                }]
            },
            options: {
                cutout: 80,
                layout: {
                    padding: 40,
                }
            }
        })
        //endregion
        //region chart2
        //endregion
    }
}
</script>

<style scoped>
.block-desc-circle {
    width: 80%;
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
}

.container-cards .desc-content {
    font-size: 10pt;
}

.t-content > div:nth-child(1),
.t-content > div:nth-child(2) {
    padding: 10px;
    border-top: 1px solid rgb(188, 199, 211);
}

.t-content > div:nth-child(1) {
    border-right: 1px solid rgb(188, 199, 211);
}

.t-content > div:nth-child(3),
.t-content > div:nth-child(4) {
    padding: 10px;
    border-top: 1px solid rgb(188, 199, 211);
    border-bottom: 1px solid rgb(188, 199, 211);
}

.t-content > div:nth-child(3) {
    border-right: 1px solid rgb(188, 199, 211);
}

.card-block {
    width: 100%;
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
    padding-block: 15px;
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
}

#max-text-circe {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>