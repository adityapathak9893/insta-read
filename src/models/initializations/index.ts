import { AppState, InstaReadInfo } from "..";
import { TAB_VALUE } from "../enums";

export const initializedInstaReadInfo: InstaReadInfo = {
  header: "",
  subHeader: "",
  authors: "",
  readTime: null,
  listenTime: null,
  category: "",
  subCategory: "",
};

export const initializedAppState: AppState = {
  tabInfo: [],
  tabSelected: TAB_VALUE.instaHead,
};
