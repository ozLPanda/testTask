<template>
    <div class="t-main-block">
        <!-- Логотип компании в левом верхнем углу -->
        <div class="logo-company"><span id="just">@just</span><span id="free">Free</span></div>
        <!-- Шапка -->
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
                <div class="profile-name noselect" @click.native="profileDrop = profileDrop == true ? false : true">
                    <div>Filip J.</div>
                    <img :class="[{'arrow-drop': profileDrop}]" :src="defIconRoute + 'arrowDrop.svg'">
                    <div :class="['drop-menu', {'show-drop': profileDrop}]">
                        <div>Profile</div>
                        <div>Logout</div>
                    </div>
                </div>
                <div class="profile-avatar"></div>
            </div>
        </div>
        <!-- Менюшка -->
        <div :class="['block-menu', {'showed_menu': visibleMenu}]">
            <div style="height: 100%;position: relative;">
                <div class="block-control" @click="toggleMenu()">
                    <span>{{ getStatusMenu }}</span>
                </div>
                <div
                    :class="['menu-row', {'menu-row-active': isActive(item.id)}]"
                    @click="this.activeRow = item.id"
                    v-for="item in menuRows"
                >
                    <img :src="setRouteIconMenu(item.icon)">
                    <div>{{ item.title }}</div>
                </div>
            </div>
        </div>
        <!-- Контент -->
        <LayoutBaseBlockContent>
            <template v-slot:content>
                <WayvyLines
                    :date="week"
                    :lines="lines"
                />
                <CrunchSomeNumbers/>
                <CurrentProgress/>
                <CrunchSomeNumbersCircle/>
            </template>
        </LayoutBaseBlockContent>
    </div>
</template>

<script>
import LayoutBaseBlockContent from "../layouts/LayoutBaseBlockContent.vue";
import moment from 'moment';
import WayvyLines from "../components/WayvyLines.vue";
import CrunchSomeNumbers from "../components/CrunchSomeNumbers.vue";
import CurrentProgress from "@/components/CurrentProgress.vue";
import CrunchSomeNumbersCircle from "@/components/CrunchSomeNumbersCircle.vue";
import EmptyElement from "@/components/EmptyElement.vue";

export default {
    name: "FormMain",
    components: {
        EmptyElement,
        CrunchSomeNumbersCircle, CurrentProgress, CrunchSomeNumbers, WayvyLines, LayoutBaseBlockContent},
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
            visibleMenu: false,
            profileDrop: false,
        }
    },
    methods: {
        setRouteIconMenu(icon) {
            return this.defIconRoute + icon;
        },
        isActive(id) {
            return id == this.activeRow ? true : false
        },
        toggleMenu(){
            this.visibleMenu = this.visibleMenu === true ? false : true
        }
    },
    computed: {
        week(){
            let t = [];
            for(let i = 1; i <= 7; i++){
                t.push(moment().day(i).format("DD.MM"));
            }
            return t;
        },
        lines() {
            return [
                {
                    label: '',
                    data: [40, 48, 25, 48, 25, 48, 25, 48],
                    backgroundColor: ['rgba(245,0,87,0.6)'],
                    borderColor: ['#F50057'],
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                },
                {
                    label: '',
                    backgroundColor: ['rgba(156,39,176,0.6)'],
                    borderColor: ['#9C27B0'],
                    data: [52, 40, 50, 42, 55, 42, 50, 42, 50],
                    tension: 0.4,
                    fill: true,
                }
            ]
        },
        getStatusMenu(){
            return this.visibleMenu === true ? '<' : '>'
        }
    }
}
</script>

<style scoped>
.drop-menu{
    position: absolute;
    top: 1em;
    display: flex;
    flex-direction: column;
    width: 100%;
    transition: .2s top, .25s opacity;
    opacity: 0;
}

.drop-menu > div{
    padding: 10px;
    background-color: var(--background-header);
    border-bottom: 1px solid #A1B1C2;
    cursor: pointer;
    transition: .3s background-color;
}

.show-drop{
    top: 2.7em;
    opacity: 1;
    //display: flex;
}

.drop-menu > div:hover{
    background-color: #f8f8f8;
}

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
    opacity: .5;
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
    position: relative;
    border-left: 2px solid #A1B1C2;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-inline: 10px;
    cursor: pointer;
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
    font-size: 10pt;
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
    font-size: 11pt;
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

.block-control{
    position: absolute;
    display: none;
    right: -1.9em;
    padding: 15px;
    border-radius: 0px 10px 10px 0px;
    font-size: 16pt;
    color: white;
    background-color: var(--base-background-menu-row);
}

.showed_menu{
    margin-left: 12.5em !important;
}

@media (max-width: 1100px){
    .t-main-block{
        position: relative;
    }

    .d-center{
        grid-column: 1/3;
    }

    .block-control{
        display: block;
    }

    .block-menu{
        z-index: 2;
        position: absolute;
        left: -12.5em;
        top: 70px;
        transition: .5s margin;
    }
}

@media (max-width: 650px){
    .logo-company{
        display: none;
    }

    .block-header{
        grid-column: 1/3;
    }
}

</style>