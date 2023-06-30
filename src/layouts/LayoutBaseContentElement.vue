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
        <div :style="[css]" class="content-body">
            <slot name="body-content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "LayoutBaseContentElement",
    props:{
        css:{
            type: Object,
            default: undefined,
        }
    }
}
</script>

<style>
.header-right{
    display: flex;
    gap: 10px;
}

.header-right select{
    border-radius: 20px;
    background-color: #cfd8dc;
    padding: 5px 10px;
    border: none;
    outline: none;
    border-right: 10px solid transparent;
}
</style>