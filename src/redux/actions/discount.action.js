import { createAction } from "@reduxjs/toolkit";
import { DISCOUNT_ACTION, REQUEST } from "../constants";

export const checkDiscountAction = createAction(
  REQUEST(DISCOUNT_ACTION.CHECK_DISCOUNT)
);
