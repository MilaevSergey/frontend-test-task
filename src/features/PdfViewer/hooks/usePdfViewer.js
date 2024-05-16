import { useEffect, useState } from "react";

import { localSessionStorageHandler } from "../../../common/utils/localSessionStorageHandler";

export const usePdfViewer = () => {
  const [pdfData, setPdfData] = useState(null);
  const [dataLocal, setDataLocal] = useState([]);
  const { getDataSessionStorage } = localSessionStorageHandler();

  useEffect(() => {
    !!getDataSessionStorage("pdf") &&
      setDataLocal(getDataSessionStorage("pdf"));
  }, []);

  return {
    pdfData,
    setPdfData,
    dataLocal,
    setDataLocal,
  };
};
