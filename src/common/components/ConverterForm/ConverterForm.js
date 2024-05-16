import React from "react";

import { useConverterForm } from "./hooks";

export const ConverterForm = ({ setPdfData, setDataLocal, dataLocal }) => {
  const { onSubmit, onChangeInput, value } = useConverterForm(
    setPdfData,
    setDataLocal,
    dataLocal
  );

  return (
    <form onSubmit={onSubmit}>
      <div className="flex justify-between items-start">
        <textarea
          className="w-4/6 inline-block text-black text-xl outline-none focus:ring-0 border-2 min-h-40"
          name="text"
          value={value}
          onChange={onChangeInput}
        ></textarea>

        <button
          className="inline-block w-1/5 h-auto px-5 py-2 text-sm font-medium text-center text-white bg-purple-700 disabled:bg-purple-500 rounded-md focus:ring-4 focus:ring-purple-200 hover:bg-purple-800"
          type="submit"
        >
          Convert
        </button>
      </div>
    </form>
  );
};
