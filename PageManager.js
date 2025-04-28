import FormatUtility from "./FormatUltility.js";
import Page from "./Page.js";

class PageManager {
  createPages(rawInput, maxNumberOfLines) {
    const inputArray = FormatUtility.inputToArray(rawInput);
    let pages = [],
      pageContent = [];

    for (let index = 1; index < inputArray.length; index++) {
      pageContent.push(FormatUtility.replaceDelimiter(inputArray[index]));
      if (index % maxNumberOfLines === 0 || index === inputArray.length - 1) {
        pageContent.unshift(FormatUtility.replaceDelimiter(inputArray[0]));
        pages.push(new Page(FormatUtility.formatContent(pageContent)));
        pageContent = [];
      }
    }

    return pages;
  }
}

export default PageManager;
