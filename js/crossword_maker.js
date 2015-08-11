CrosswordMaker = {};

$(function() {
  CrosswordMaker.Grid.init();

  CrosswordMaker.Grid.bind();
  CrosswordMaker.Numbering.bind();
  CrosswordMaker.Stats.bind();
});
