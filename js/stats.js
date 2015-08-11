CrosswordMaker.Stats = (function() {
  var _this = {};
  
  _this.bind = function() {
    $(document).bind("grid-updated", updateStats);
  };

  function updateStats() {
    $("#percent-blocked").text(($(".cell.block").size() / 2.25).toFixed(1));
  }

  return _this;
}).call($);
