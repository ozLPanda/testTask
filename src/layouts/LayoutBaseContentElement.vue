<template>
    <div class="content-block">
        <div class="header-content">
            <div class="header-left">
                <div class="title-content">
                    <slot name="title"></slot>
                </div>
                <div class="desc-content">
                    <slot name="desc"></slot>
                </div>
            </div>
            <div class="header-right">
                <slot name="options"></slot>
            </div>
        </div>
        <slot name="body-content"></slot>
    </div>
</template>

<script>
export default {
    name: "LayoutBaseContentElement"
}
</script>

<style scoped>
.content-block{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 2px solid #BCC7D3;
}

.desc-content{
    opacity: .5;
}
</style>