<template>
    <LayoutBaseContentElement>
        <template v-slot:title>Crunch some Numbers</template>
        <template v-slot:desc>See how your projects are progressing via the new statistics engine.</template>
        <template v-slot:options>
            <div>Timeline: </div>
            <select>
                <option>This week</option>
            </select>
        </template>
        <template v-slot:body-content>
            <div class="t-content">
                <div class="d-col">
                </div>

            </div>
        </template>
    </LayoutBaseContentElement>
</template>

<script>
import LayoutBaseContentElement from "../layouts/LayoutBaseContentElement.vue";

export default {
    name: "CrunchSomeNumbers",
    components: {LayoutBaseContentElement,},
}
</script>

<style scoped>

</style>