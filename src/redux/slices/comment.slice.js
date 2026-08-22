import { createSlice } from "@reduxjs/toolkit";
import { COMMENT_ACTION, SUCCESS, FAIL } from "../constants";

const initialState = {
  commentList: { data: [], loading: false, error: null },
  actionLoading: { postComment: false },
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    getCommentListAction: (state) => { state.commentList.loading = true; },
    postCommentAction: (state) => { state.actionLoading.postComment = true; },
  },
  extraReducers: {
    [SUCCESS(COMMENT_ACTION.GET_COMMENT_LIST)]: (state, action) => {
      state.commentList = { data: action.payload.data, loading: false, error: null };
    },
    [FAIL(COMMENT_ACTION.GET_COMMENT_LIST)]: (state, action) => {
      state.commentList.loading = false;
      state.commentList.error = action.payload.error;
    },
    [SUCCESS(COMMENT_ACTION.POST_COMMENT)]: (state) => { state.actionLoading.postComment = false; },
    [FAIL(COMMENT_ACTION.POST_COMMENT)]: (state) => { state.actionLoading.postComment = false; },
  },
});

export const { getCommentListAction, postCommentAction } = commentSlice.actions;
export default commentSlice.reducer;
