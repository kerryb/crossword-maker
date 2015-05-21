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
      blockCell(row, col);
    });
  });
}

function clickCell(e) {
  cell = $(this);
  if (cell.hasClass("block")) {
    unblockCell(cell.data("row"), cell.data("col"));
  } else {
    blockCell(cell.data("row"), cell.data("col"));
  }
}

function blockCell(row, col) {
  $("#grid .row-" + row + " .col-" + col).addClass("block");
}

function unblockCell(row, col) {
  $("#grid .row-" + row + " .col-" + col).removeClass("block");
}
