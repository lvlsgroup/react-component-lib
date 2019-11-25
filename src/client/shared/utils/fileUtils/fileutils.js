export const getIdFromFile = (file) => {
  return file.path + file.lastModified + file.size;
};
