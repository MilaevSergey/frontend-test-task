import { useState } from "react";

import { ServicePdf } from "../../../services/ServicePdf";
import { converter } from "../../../utils/converter";
import { localSessionStorageHandler } from "../../../utils/localSessionStorageHandler";

export const useConverterForm = (setPdfData, setDataLocal, dataLocal) => {
  const { getDataSessionStorage, setDataSessionStorage } =
    localSessionStorageHandler();

  const [value, setValue] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!value.length) return;
    const currentDate = new Date()
      .toISOString()
      .replace(/T/, " ")
      .replace(/\..+/, "");

    setPdfData(null);

    const pdfDataApi = await ServicePdf.getPdfData(value);
    const result = await converter(pdfDataApi.data);

    setPdfData(result.data);

    setDataLocal([
      ...dataLocal,
      {
        data: result.data,
        name: `Convert at: ${currentDate} - ${value.slice(0, 10)}...`,
      },
    ]);

    setDataSessionStorage(
      "pdf",
      !!getDataSessionStorage("pdf")
        ? [
            ...getDataSessionStorage("pdf"),
            {
              data: result.data,
              name: `Convert at: ${currentDate} - ${value.slice(0, 10)}...`,
            },
          ]
        : [
            {
              data: result.data,
              name: `Convert at: ${currentDate} - ${value.slice(0, 10)}...`,
            },
          ]
    );
  };
  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return {
    onSubmit,
    onChangeInput,
    value,
  };
};
