import { mockData, InstaReadInfo } from "../models";

export const mockApiCall = async (): Promise<InstaReadInfo[]> => {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(mockData), 3000);
  });
};
