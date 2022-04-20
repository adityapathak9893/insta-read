import { useDispatch, useSelector } from "react-redux";
import { setTabValue } from "../../actions/app";
import { RootState } from "../../reducers";

export const useActionDispatch = () => {
  const dispatch = useDispatch();
  return {
    setTabValue: (tabVal: number) => dispatch(setTabValue(tabVal)),
  };
};

export const useStateSelector = () => ({
  tabSelected: useSelector((state: RootState) => state.app.tabSelected),
});
