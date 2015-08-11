CrosswordMaker.Stats = (function() {
  var _this = {};
  
  _this.bind = function() {
    $(document).bind("grid-updated", CrosswordMaker.Stats.update);
  };

  _this.update = function() {
    $("#percent-blocked").text(($(".cell.block").size() / $(".cell").size() * 100).toFixed(1));
  };

  return _this;
}).call($);
