import axios from "axios";

export const ServicePdf = {
  getPdfData: async (text) =>
    await axios.post(
      `${process.env.REACT_APP_BASE_URL}/create-pdf`,
      {
        text: text,
      },
      {
        responseType: "blob",
        headers: { "Content-Type": "application/json" },
        params: {
          apiKey: process.env.REACT_APP_API_KEY,
        },
      }
    ),
};
