export const getIdFromFile = (file) => {
  return file.path + file.lastModified + file.size;
};

export function getCanvasBlob(canvas, mimeType, qualityArgument) {
  return new Promise(function(resolve) {
    canvas.toBlob(
      function(blob) {
        resolve(blob);
      },
      mimeType,
      qualityArgument
    );
  });
}
