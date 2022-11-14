defaultTablePageVisible = 5;

export const visiblePageList = (totalPage: number, firstPage = 0): number[] => {
  let pageList = [];
  for (let i = 1; i < defaultTablePageVisible + 1; i++) {
    if (firstPage + i <= totalPage && firstPage + i > 0) {
      pageList.push(firstPage + i);
    }
  }
  if (pageList.length < defaultTablePageVisible) {
    for (
      let i = defaultTablePageVisible;
      defaultTablePageVisible > pageList.length && pageList[0] >= 1;
      i--
    ) {
      if (pageList[0] === 1) {
        break;
      }
      if (pageList[0] > 0) {
        pageList = [pageList[0] - 1, ...pageList];
      }
    }
  }
  return pageList;
};
