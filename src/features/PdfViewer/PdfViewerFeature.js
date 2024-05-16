import React from "react";
import PDFViewer from "pdf-viewer-reactjs";

import { ConverterForm, History } from "../../common/components";

import { usePdfViewer } from "./hooks";

export const PdfViewerFeature = () => {
  const { pdfData, setDataLocal, dataLocal, setPdfData } = usePdfViewer();

  return (
    <div className="container mx-auto px-4 min-w-[320px]">
      <h3 className="font-bold py-6 text-4xl">PDF Converter</h3>

      <div className="flex flex-row">
        <div className="flex flex-col w-full pr-4">
          <ConverterForm
            setPdfData={setPdfData}
            setDataLocal={setDataLocal}
            dataLocal={dataLocal}
          />

          <div className="border border-gray-200 mt-6 w-full h-full min-h-96">
            {pdfData && (
              <PDFViewer
                key={pdfData}
                document={{ base64: pdfData }}
                hideZoom
                hideRotation
              />
            )}
          </div>
        </div>

        <History setPdfData={setPdfData} dataLocal={dataLocal} />
      </div>
    </div>
  );
};
