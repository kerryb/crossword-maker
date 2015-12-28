CrosswordMaker.Stats = (function() {
  var _this = {};
  
  _this.bind = function() {
    $(document).bind("grid-updated", CrosswordMaker.Stats.update);
  };

  _this.update = function() {
    percentage = ($(".cell.block").size() / $(".cell").size() * 100);
    $("#percent-blocked").text(percentage.toFixed(1));
    $("#percent-blocked-meter-pointer").css("left", percentage.toFixed() + "px");
  };

  return _this;
}).call($);
