export const converter = (data) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        resolve({
          data: reader.result.replace(`data:application/pdf;base64,`, ""),
        });
      } else {
        reject(new Error("Failed to read the file."));
      }
    };

    reader.readAsDataURL(data);
  });
