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

export function getCompressedCanvasBlob(
  canvas,
  compressUnderXBytes,
  mimeType,
  qualityArgument = 1,
  compressBy = 0.08,
  compressIncrementer = 0.08
) {
  return new Promise(function(resolve) {
    canvas.toBlob(
      function(blob) {
        const blobSize = blob.size;
        if (blobSize > compressUnderXBytes) {
          const quality = qualityArgument - compressBy;
          resolve(
            getCompressedCanvasBlob(
              canvas,
              compressUnderXBytes,
              'image/jpeg',
              quality,
              compressBy + compressIncrementer,
              compressIncrementer
            )
          );
        } else {
          resolve({
            blob: blob,
            wasCompressed: compressBy > compressIncrementer,
          });
        }
      },
      mimeType,
      qualityArgument
    );
  });
}
