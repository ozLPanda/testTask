<template>
    <div class="block-content">
        <slot name="content"></slot>
    </div>
</template>

<script>
export default {
    name: "LayoutBaseBlockContent"
}
</script>

<style scoped>
.block-content{
    grid-column: 2/2;
    grid-row: 2/2;
    background-color: var(--base-background-content);
    padding: 30px;
    display: flex;
    justify-content: center;
    gap: 20px;
}
</style>