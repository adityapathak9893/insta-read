import { useDispatch, useSelector } from "react-redux";
import { setTabValue } from "../../actions/app";
import { RootState } from "../../reducers";

export const useStateSelector = () => ({
  tabSelected: useSelector((state: RootState) => state.app.tabSelected),
});
