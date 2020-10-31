import * as types from "./actionTypes";

export const setLikes = like => ({
    type: types.SET_LIKES,
    likes: like
});