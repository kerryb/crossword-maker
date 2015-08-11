CrosswordMaker.Grid = (function() {
  var _this = {};

  _this.init = function() {
    createGrid();
  };

  _this.bind = function() {
    $("#reset-0").bind("click", function() { resetGrid(1, 1); });
    $("#reset-1").bind("click", function() { resetGrid(0, 0); });
    $("#reset-2").bind("click", function() { resetGrid(0, 1); });
    $("#reset-3").bind("click", function() { resetGrid(1, 0); });
    $("#grid .cell").bind("click", clickCell);
  };

  function createGrid() {
    _.each(_.range(15), function(row_index) {
      $("#grid").append('<div class="row row-' + row_index + '"></div>');
      row = $(".row-" + row_index);
      _.each(_.range(15), function(col_index) {
        row.append('<div class="cell col-' + col_index + '" data-row="' + row_index + '" data-col="' + col_index + '"></td>');
      });
    });
  }

  function resetGrid(first_block_row, first_block_col) {
    $("#grid .cell").removeClass("block");
    _.each(_.range(first_block_row, 15, 2), function(row) {
      _.each(_.range(first_block_col, 15, 2), function(col) {
        blockCell({row: row, col: col});
      });
    });
    $(document).trigger("grid-updated");
  }

  function clickCell() {
    var cell = $(this);
    var fn = (cell.hasClass("block")) ? unblockCell : blockCell;
    _.each(cellPair(cell.data("row"), cell.data("col")), fn);
    $(document).trigger("grid-updated");
  }

  function cellPair(row, col) {
    return [
      {row: row, col: col},
      {row: 14 - row, col: 14 - col}
    ];
  }

  function findCell(cell){
    return $("#grid .row-" + cell.row + " .col-" + cell.col);
  }

  function blockCell(cell) {
    findCell(cell).addClass("block");
  }

  function unblockCell(cell) {
    findCell(cell).removeClass("block");
  }

  return _this;
}).call($);
