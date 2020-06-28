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
  compressTargetInBytes,
  mimeType,
  qualityArgument = 1,
  compressBy = 0.08,
  compressIncrementer = 0.08
) {
  return new Promise(function(resolve) {
    canvas.toBlob(
      function(blob) {
        const blobSize = blob.size;
        const quality = qualityArgument - compressBy;

        if (blobSize > compressTargetInBytes && quality > 0) {
          const quality = qualityArgument - compressBy;
          resolve(
            getCompressedCanvasBlob(
              canvas,
              compressTargetInBytes,
              'image/jpeg',
              quality,
              compressBy + compressIncrementer,
              compressIncrementer
            )
          );
        } else {
          resolve({
            blob: blob,
            compressedBy: compressBy,
            wasCompressed: compressBy > compressIncrementer,
          });
        }
      },
      mimeType,
      qualityArgument
    );
  });
}
