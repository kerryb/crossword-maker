$(function() {
  createGrid();
  $("#reset-0").bind("click", function() { resetGrid(1, 1); return false });
  $("#reset-1").bind("click", function() { resetGrid(0, 0); return false });
  $("#reset-2").bind("click", function() { resetGrid(0, 1); return false });
  $("#reset-3").bind("click", function() { resetGrid(1, 0); return false });
  $("#grid td").bind("click", clickCell);
});

function createGrid() {
  _.each(_.range(15), function(row_index) {
    $("#grid").append('<tr class="row-' + row_index + '"></tr>');
    row = $(".row-" + row_index)
    _.each(_.range(15), function(col_index) {
      row.append('<td class="col-' + col_index + '" data-row="' + row_index + '" data-col="' + col_index + '"></td>');
    });
  });
}

function resetGrid(first_block_row, first_block_col) {
  $("#grid td").removeClass("block");
  _.each(_.range(first_block_row, 15, 2), function(row) {
    _.each(_.range(first_block_col, 15, 2), function(col) {
      blockCell({row: row, col: col});
    });
  });
}

function clickCell(e) {
  cell = $(this);
  fn = (cell.hasClass("block")) ? unblockCell : blockCell;
  _.each(cellPair(cell.data("row"), cell.data("col")), fn);
}

function cellPair(row, col) {
  return [
    {row: row, col: col},
    {row: 14 - row, col: 14 - col}
  ];
}

function blockCell(cell) {
  $("#grid .row-" + cell.row + " .col-" + cell.col).addClass("block");
}

function unblockCell(cell) {
  $("#grid .row-" + cell.row + " .col-" + cell.col).removeClass("block");
}
