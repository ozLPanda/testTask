<template>
    <div class="d-center">
        <div class="block-content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "LayoutBaseBlockContent"
}
</script>

<style scoped>
.d-center{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: var(--base-background-content);
}

.block-content{
    width: 90%;
    grid-column: 2/2;
    grid-row: 2/2;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 40px;
}
</style>