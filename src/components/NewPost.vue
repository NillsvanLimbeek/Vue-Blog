<template>
    <div class="new-post">
        <h2 class="heading-secondary">New Post<i class="icon icon--small fas fa-plus"></i></h2>
        <div class="new-post__close"
             @click="closeSquare('bottomLeft')">
            <i class="icon icon--black far fa-times-circle"></i>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            closeSquare(input) {
                this.$store.commit("closeSquare", input);
            }
        }
    }
</script>

<style>

</style>
