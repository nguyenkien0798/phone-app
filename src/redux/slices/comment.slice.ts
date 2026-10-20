import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { COMMENT_ACTION, SUCCESS, FAIL } from "../constants";
import type { Comment } from "../../types";

const initialState = {
  commentList: { data: [] as Comment[], loading: false, error: null as string | null },
  actionLoading: { postComment: false },
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    getCommentListAction: (state, _action: PayloadAction<any>) => { state.commentList.loading = true; },
    postCommentAction: (state, _action: PayloadAction<any>) => { state.actionLoading.postComment = true; },
  },
  extraReducers: {
    [SUCCESS(COMMENT_ACTION.GET_COMMENT_LIST)]: (state, action) => {
      state.commentList = { data: Array.isArray(action.payload.data) ? action.payload.data : [], loading: false, error: null };
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
