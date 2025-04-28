class FormatUtility {
  static inputToArray(rawInput) {
    let array = [];
    for (const line of rawInput.split("\n")) {
      array.push(line);
    }
    return array;
  }

  static replaceDelimiter(line) {
    return line.replaceAll(";", "|");
  }

  static getNumberOfColumns(line) {
    return line.match(/\|/g).length + 1;
  }

  static formatContent(content) {
    const columnLengths = FormatUtility.getColumnLengthsContent(content);
    let formattedContent = [];

    for (let i = 0; i < content.length; i++) {
      let line = "";
      let arr = content[i].split("|");

      for (let j = 0; j < arr.length; j++) {
        while (arr[j].length < columnLengths[j]) {
          arr[j] += " ";
        }
        line = line + arr[j] + "|";
      }

      formattedContent.push(line);

      if (i === 0) {
        line = "";
        for (let k = 0; k < columnLengths.length; k++) {
          line = line + "-".repeat(columnLengths[k]) + "+";
        }
        formattedContent.push(line);
      }
    }

    return formattedContent;
  }

  static getColumnLengthsContent(content) {
    let columnLengths = [],
      strlength = 0;

    for (let i = 0; i < FormatUtility.getNumberOfColumns(content[0]); i++) {
      strlength = 0;
      for (let j = 0; j < content.length; j++) {
        const col = content[j].split("|");
        for (let k = 0; k < col.length; k++) {
          if (k === i && col[k].length > strlength) strlength = col[k].length;
        }
      }
      columnLengths.push(strlength);
    }

    return columnLengths;
  }
}

export default FormatUtility;
