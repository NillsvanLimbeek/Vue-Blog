import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        topLeft: false,
        topRight: false,
        bottomLeft: false,
        bottomRight: false,
        postList: [],
        selectedPost: {}
    },
    getters: {
        getTopLeft: state => {
            return state.topLeft;
        },
        getTopRight: state => {
            return state.topRight;
        },
        getBottomLeft: state => {
            return state.bottomLeft;
        },
        getBottomRight: state => {
            return state.bottomRight;
        },
        getPostList: state => {
            return state.postList;
        },
        getSelectedPost: state => {
            return state.selectedPost;
        }
    },
    mutations: {
        openSquare: (state, input) => {
            switch(input) {
                case "topLeft":
                    state.topLeft = true;
                    break;
                case "topRight":
                    state.topRight = true;
                    break;
                case "bottomLeft":
                    state.bottomLeft = true;
                    break;
                case "bottomRight":
                    state.bottomRight = true;
                    break;
            }
        },
        closeSquare: (state, input) => {
            switch(input) {
                case "topLeft":
                    state.topLeft = false;
                    break;
                case "topRight":
                    state.topRight = false;
                    break;
                case "bottomLeft":
                    state.bottomLeft = false;
                    break;
                case "bottomRight":
                    state.bottomRight = false;
                    break;
            }
        },
        setSelectedPost: (state, input) => {
            state.selectedPost = state.postList[input];
        }
    }
})