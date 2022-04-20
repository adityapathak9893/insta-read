import { FC } from "react";
import { TAB_VALUE } from "../../models";
import { InfoSection } from "../infoSection";
import { NavigationBar } from "../navigatiionBar";
import { useStateSelector } from "./hooks";
import "./index.css";

export const App: FC = () => {
  const { tabSelected } = useStateSelector();
  return (
    <div>
      <NavigationBar />
      {tabSelected === TAB_VALUE.instaHead && <InfoSection />}
    </div>
  );
};
