$(function() {
  createGrid();
});

function createGrid(index) {
  _.each(_.range(15), function(row) {
    $("#grid").append('<tr class="row-' + row + '"></tr>');
    row = $(".row-" + row)
    _.each(_.range(15), function(col) {
      row.append('<td class="col-' + col + '"></td>');
    });
  });
}
