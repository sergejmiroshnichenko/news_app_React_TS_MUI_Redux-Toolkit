export const truncateText = (text: string, maxLength: number) => {
  if (text) {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  }
};

export const formatText = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
