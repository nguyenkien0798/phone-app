import "react-redux";
import type { RootState } from "../store";

declare module "react-redux" {
  export interface DefaultRootState extends RootState {}
}
