CrosswordMaker.Stats = (function() {
  var _this = {};
  
  _this.bind = function() {
    $(document).bind("grid-updated", CrosswordMaker.Stats.update);
  };

  _this.update = function() {
    $("#percent-blocked").text(($(".cell.block").size() / 2.25).toFixed(1));
  };

  return _this;
}).call($);
