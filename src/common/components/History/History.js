import React from "react";

import { useHistory } from "./hooks";

export const History = ({ setPdfData, dataLocal }) => {
  const { onClickHistoryItem } = useHistory(setPdfData);

  return (
    <div className="w-full pl-4">
      <h3 className="font-bold mb-8 text-2xl">Convert History</h3>

      {!!dataLocal &&
        dataLocal.map((item, i) => (
          <div
            className="cursor-pointer py-3 hover:bg-purple-400 hover:text-white"
            key={i}
            onClick={() => onClickHistoryItem(item.data)}
          >
            {item.name}
          </div>
        ))}
    </div>
  );
};
