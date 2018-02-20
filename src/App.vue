<template>
    <div class="app">
        <div class="top-left">
            <div class="square square--top-left"
                 :class="{ 'square-open': getTopLeft }"
                 @click="openSquare('topLeft')">
                <div class="btn-square"
                     :class="{ 'no-opacity': getTopLeft }">
                    <i class="icon fas fa-list-ul"></i>
                </div> 
            </div>
            <h1 class="heading-primary heading-primary--top-left"
                :class="{ 'no-opacity': getTopLeft }">Post List</h1>

            <transition name="fade">
                <app-post-list v-if="getTopLeft"></app-post-list>
            </transition>
        </div>

        <div class="top-right">
            <div class="square square--top-right"
                 :class="{ 'square-open': getTopRight }"
                 @click="openSquare('topRight')">
                <div class="btn-square"
                     :class="{ 'no-opacity': getTopRight }">
                    <i class="icon fas fa-search"></i>
                </div> 
            </div>
            <h1 class="heading-primary heading-primary--top-right"
                :class="{ 'no-opacity': getTopRight }">Post Detail</h1>

            <transition name="fade">
                <app-post-detail v-if="getTopRight"></app-post-detail>
            </transition>
        </div>

        <div class="bottom-left">
            <div class="square square--bottom-left"
                 :class="{ 'square-open': getBottomLeft }"
                 @click="openSquare('bottomLeft')">
                <div class="btn-square"
                     :class="{ 'no-opacity': getBottomLeft }">
                    <i class="icon fas fa-plus"></i>
                </div> 
            </div>
            <h1 class="heading-primary heading-primary--bottom-left"
                :class="{ 'no-opacity': getBottomLeft }">New Post</h1>

            <transition name="fade">
                <app-new-post v-if="getBottomLeft"></app-new-post>
            </transition>  
        </div>

        <div class="bottom-right">
            <div class="square square--bottom-right"
                 :class="{ 'square-open': getBottomRight }"
                 @click="openSquare('bottomRight')">
                <div class="btn-square"
                     :class="{ 'no-opacity': getBottomRight }">
                    <i class="icon fas fa-pencil-alt"></i>
                </div> 
            </div>
            <h1 class="heading-primary heading-primary--bottom-right"
                :class="{ 'no-opacity': getBottomRight }">Edit Post</h1>

            <transition name="fade">
                <app-edit-post v-if="getBottomRight"></app-edit-post>
            </transition>
        </div>
    </div>
</template>

<script>
    import PostList from "./components/PostList.vue";
    import PostDetail from "./components/PostDetail.vue";
    import NewPost from "./components/NewPost.vue";
    import EditPost from "./components/EditPost.vue";

    import { mapGetters } from "vuex";

    export default {
        data() {
            return {

            }
        },
        methods: {
            openSquare(input) {
                this.$store.commit("openSquare", input);
            }
        },
        computed: {
            ...mapGetters([
                "getTopLeft",
                "getTopRight",
                "getBottomLeft",
                "getBottomRight"
            ])
        },
        components: {
            appPostList: PostList,
            appPostDetail: PostDetail,
            appNewPost: NewPost,
            appEditPost: EditPost
        }
    }
</script>

<style lang="scss">

    @import "./scss/main.scss";

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active {
        transition: all 1s ease .5s;
    }

    .fade-leave-active {
        transition: all .1s;
    }

    .fade-enter-to,
    .fade-leave {
        opacity: 1;
    }

</style>
