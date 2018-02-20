<template>
    <div class="post-detail">
        <h2 class="heading-secondary">Post Detail<i class="icon icon--small fas fa-search"></i></h2>
        <div class="post-detail__close"
             @click="closeSquare('topRight')">
            <i class="icon icon--black far fa-times-circle"></i>
        </div>

        <div class="post-detail__wrapper">
            <h3>{{ getSelectedPost.title }}</h3>
            <p>{{ getSelectedPost.content }}</p>
        </div>

        <button class="btn"
                @click="openSquare('bottomRight')">Edit</button>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        data() {
            return {

            }
        },
        methods: {
            closeSquare(input) {
                this.$store.commit("closeSquare", input);
            },
            openSquare(input) {
                this.$store.commit("openSquare", input)
            }
        },
        computed: {
            ...mapGetters([
                "getSelectedPost"
            ])
        }
    }
</script>

<style>

</style>
