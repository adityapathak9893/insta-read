import React, { FC } from "react";
import { TAB_VALUE } from "../../models";
import { DetailsSection } from "../detailsSection";
import { InfoSection } from "../infoSection";
import { NavigationBar } from "../navigatiionBar";
import { useStateSelector } from "./hooks";
import "./index.css";
import tracks from "../.././tracks";

export const App: FC = () => {
  const { tabSelected } = useStateSelector();
  return (
    <div>
      <NavigationBar />
      {tabSelected === TAB_VALUE.instaHead && (
        <React.Fragment>
          <InfoSection /> <DetailsSection />
        </React.Fragment>
      )}
    </div>
  );
};
