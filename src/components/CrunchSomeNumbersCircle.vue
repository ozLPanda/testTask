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
                    <div id="custom-href1">Send Invoice</div>
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

export default {
    name: "CrunchSomeNumbersCircle",
    components: {TimeLine, LayoutBaseContentElement},
    data() {
        return {
            customCss: {
                backgroundColor: 'none',
            }
        }
    },
    mounted() {

    }
}
</script>

<style scoped>
.container-cards {
    display: flex;
    gap: 20px;
}

.t-content{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
}

.t-content .desc-content{
    font-size: 10pt;
}

.t-content > div:nth-child(1),
.t-content > div:nth-child(2){
    padding: 10px;
    border-top: 1px solid rgb(188, 199, 211);
}

.t-content > div:nth-child(1){
    border-right: 1px solid rgb(188, 199, 211);
}

.t-content > div:nth-child(3),
.t-content > div:nth-child(4){
    padding: 10px;
    border-top: 1px solid rgb(188, 199, 211);
    border-bottom: 1px solid rgb(188, 199, 211);
}

.t-content > div:nth-child(3){
    border-right: 1px solid rgb(188, 199, 211);
}

.card-block {

}

.card-title {

}

.profile-block {

}

.view-avatar{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-image: url("/assets/image/testAvatar.jpg");
    background-position: center;
    background-size: cover;
}

.status-avatar {

}
</style>