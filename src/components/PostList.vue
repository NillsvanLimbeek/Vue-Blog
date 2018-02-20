<template>
    <div class="post-list">
        <h2 class="heading-secondary">Post List<i class="icon icon--small fas fa-list-ul"></i></h2>
        <div class="post-list__close"
             @click="closeSquare('topLeft')">
            <i class="icon icon--black far fa-times-circle"></i>
        </div>

        <div class="post-list__wrapper">
            <ul class="post-list__list">
                <li class="post-list__post"
                    v-for="(post, index) in getPostList"
                    :key="post.index"
                    @click="openSquare(index, 'topRight')">{{ post.title }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
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
            openSquare(index, input) {
                this.$store.commit("setSelectedPost", index);
                this.$store.commit("openSquare", input);
                console.log(this.$store.state.selectedPost);
            }
        },
        computed: {
            ...mapGetters([
                "getPostList"
            ])
        },
        created() {
            axios.get("https://vue-axios-project.firebaseio.com/blog.json")
                .then(response => {
                    this.$store.state.postList = [];
                    const data = response.data;
                    for(let key in data) {
                        this.$store.state.postList.push(data[key]);
                    }
                    console.log(this.$store.state.postList);
                })
                .catch(error => console.log(error))
        }
    }
</script>

<style>

</style>
