$(function() {
  createGrid();
  resetGrid();
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

function resetGrid() {
  $("#grid td").removeClass("block");
  _.each(_.range(1, 14, 2), function(row) {
    _.each(_.range(1, 14, 2), function(col) {
      console.log(row, col);
      $("#grid .row-" + row + " .col-" + col).addClass("block");
    });
  });
}
