export const getFirstIndexInRange = (
  current,
  pagesPerSide,
  safeRange,
  numberOfPages
) => {
  const isFirstRange = current - pagesPerSide < 1;
  const isLastRange = current + pagesPerSide > numberOfPages;

  if (isFirstRange) {
    return 1;
  } else if (isLastRange) {
    return numberOfPages - (safeRange - 1);
  } else {
    return current - pagesPerSide;
  }
};
