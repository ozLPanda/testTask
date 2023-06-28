<template>
    <div class="t-main-block">
        <div class="logo-company"><span id="just">@just</span><span id="free">Free</span></div>
        <div class="block-header">
            <div class="block-search">
                <img :src="defIconRoute + 'magnifying-glass.png'">
                <input type="text" placeholder="Search">
            </div>
            <div class="block-profile">
                <div class="profile-notify">
                    <img :src="defIconRoute + 'notification.png'">
                    <span class="circle-notify">{{ notification_count }}</span>
                </div>
                <div class="profile-name">
                    <div>Filip J.</div>
                    <img :src="defIconRoute + 'arrowDrop.svg'">
                </div>
                <div class="profile-avatar"></div>
            </div>
        </div>
        <div class="block-menu">
            <div
                :class="['menu-row', {'menu-row-active': isActive(item.id)}]"
                @click="this.activeRow = item.id"
                v-for="item in menuRows"
            >
                <img :src="setRouteIconMenu(item.icon)">
                <div>{{ item.title }}</div>
            </div>
        </div>
        <LayoutBaseBlockContent>
            <template v-slot:content>
                <LayoutBaseContentElement>
                    <template v-slot:title>Hi Fillip</template>
                    <template v-slot:desc>Checkout your latest projects and their progress.</template>
                    <template v-slot:body-content>Test123</template>
                </LayoutBaseContentElement>
            </template>
        </LayoutBaseBlockContent>
    </div>
</template>

<script>
import LayoutBaseBlockContent from "../layouts/LayoutBaseBlockContent.vue";
import LayoutBaseContentElement from "../layouts/LayoutBaseContentElement.vue";

export default {
    name: "FormMain",
    components: {LayoutBaseContentElement, LayoutBaseBlockContent},
    data() {
        return {
            defIconRoute: "/assets/image/",
            menuRows: [
                {id: 1, title: 'Home', icon: "home.svg"},
                {id: 2, title: 'Time Management', icon: "time_managment.svg"},
                {id: 3, title: 'Inbox  ', icon: "inbox.svg"},
                {id: 4, title: 'Calendar', icon: "calendar.svg"},
                {id: 5, title: 'Analytics', icon: "analytics.svg"},
                {id: 6, title: 'Settings', icon: "settings.svg"},
            ],
            notification_count: 8,
            activeRow: 1,
        }
    },
    methods: {
        setRouteIconMenu(icon) {
            return this.defIconRoute + icon;
        },
        isActive(id) {
            return id == this.activeRow ? true : false
        },
    },
}
</script>

<style scoped>
.logo-company {
    font-family: 'Open Sans', sans-serif;
    color: white;
    background-color: var(--background-logo);
    display: flex;
    justify-content: center;
    align-items: center;
}

#just {
    font-weight: 200;
}

#free {
    font-weight: 600;
}

.block-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--background-header);
}

.block-search {
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 15px;
    padding-inline: 20px 10px;
}

.block-search img {
    width: 20px;
    height: 20px;
    opacity: .5;
}

.block-search input[type="text"] {
    width: 100%;
    font-size: 16pt;
    border: none;
    outline: none;
    background: none;
}

.block-profile {
    display: flex;
    align-items: center;
    padding-inline: 0px 20px;
}

.profile-name {
    border-left: 2px solid #A1B1C2;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-inline: 10px;
}

.profile-name > div {
    width: max-content;
}

.profile-avatar {
    background-color: #37474F;
    border-radius: 50%;
    width: 40px;
    height: 40px;
}

.profile-notify {
    position: relative;
}

.profile-notify img {
    width: 20px;
    height: 20px;
    padding-inline: 0px 10px;
}

.circle-notify {
    position: absolute;
    border-radius: 50%;
    background-color: #1E88E5;
    right: 4px;
    top: -10px;
    width: 18px;
    height: 18px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12pt;
}

.t-main-block {
    display: grid;
    grid-template-rows: 70px auto;
    grid-template-columns: 230px auto;
    width: 100%;
    height: 100%;
}

.block-menu {
    font-family: 'Open Sans', sans-serif;
    height: 100%;
    background-color: var(--base-background-menu-row);
}

.menu-row {
    color: white;
    display: flex;
    gap: 15px;
    padding: 20px;
    cursor: pointer;
    transition: background-color .3s;
}

.menu-row:hover {
    background-color: var(--base-background-menu-row-hover);
}

.menu-row-active {
    background-color: var(--base-background-menu-row-active) !important;
}
</style>