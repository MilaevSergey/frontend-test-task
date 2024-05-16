export const useHistory = (setPdfData) => {
  const onClickHistoryItem = (data) => {
    setPdfData(null);
    setPdfData(data);
  };

  return {
    onClickHistoryItem,
  };
};
