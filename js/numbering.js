CrosswordMaker.Numbering = (function() {
  var _this = {};

  _this.bind = function() {
    $(document).bind("grid-updated", numberClues);
  };

  _this.numberClues = function() {
    $("#grid .number").remove();
    var number = 1;
    $("#grid .cell:not(.block)").each(function() {
      if (startOfAcrossWord(this) || startOfDownWord(this)) {
        numberCell(this, number++);
      }
    });
  }

  function startOfAcrossWord(cell) {
    var row = $(cell).data("row");
    var col = $(cell).data("col");
    return (col === 0 ||
            (col < 14 &&
             $("#grid .cell.block[data-row=" + row + "][data-col=" + (col - 1) + "]").length &&
             $("#grid .cell:not(.block)[data-row=" + row + "][data-col=" + (col + 1) + "]").length));
  }

  function startOfDownWord(cell) {
    var row = $(cell).data("row");
    var col = $(cell).data("col");
    return (row === 0 ||
            (row < 14 &&
             $("#grid .cell.block[data-col=" + col + "][data-row=" + (row - 1) + "]").length &&
             $("#grid .cell:not(.block)[data-col=" + col + "][data-row=" + (row + 1) + "]").length));
  }

  function numberCell(cell, number) {
    $(cell).append('<div class="number">' + number + '</div>');
  }

  return _this;
}).call($);
