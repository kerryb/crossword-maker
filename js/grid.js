$(function() {
  createGrid();
  $("#reset-0").bind("click", function() { resetGrid(1, 1); return false });
  $("#reset-1").bind("click", function() { resetGrid(0, 0); return false });
  $("#reset-2").bind("click", function() { resetGrid(0, 1); return false });
  $("#reset-3").bind("click", function() { resetGrid(1, 0); return false });
});

function createGrid() {
  _.each(_.range(15), function(row) {
    $("#grid").append('<tr class="row-' + row + '"></tr>');
    row = $(".row-" + row)
    _.each(_.range(15), function(col) {
      row.append('<td class="col-' + col + '"></td>');
    });
  });
}

function resetGrid(first_block_row, first_block_col) {
  $("#grid td").removeClass("block");
  _.each(_.range(first_block_row, 15, 2), function(row) {
    _.each(_.range(first_block_col, 15, 2), function(col) {
      $("#grid .row-" + row + " .col-" + col).addClass("block");
    });
  });
}
