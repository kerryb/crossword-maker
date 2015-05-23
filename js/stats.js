(function() {
  $(function() {
    $(document).bind("grid-updated", updateStats);
  });

  function updateStats() {
    $("#percent-blocked").text(($("td.block").size() / 2.25).toFixed(1));
  }
}).call();
