describe("CrosswordMaker.Numbering", function() {
  describe("numberClues", function() {
    it("numbers the clues correctly", function() {
      loadFixtures("small_blocked_grid.html");
      CrosswordMaker.Numbering.numberClues();
      expect(cellNumbers()).toEqual([
        "",  "1", "",  "2", "",
        "3", "",  "",  "",  "",
        "",  "",  "",  "",  "",
        "",  "4", "",  "5", "",
        "",  "",  "",  "",  ""
      ]);
    });

    it("removes existing numbers", function() {
      loadFixtures("small_blocked_grid.html");
      $(".row-1 .col-1").append('<div class="number">99</div>');
      CrosswordMaker.Numbering.numberClues();
      expect($(".row-1 .col-1 .number")).not.toExist();
    });

    function cellNumbers() {
      return $(".cell").map(function(_, cell) { return $(cell).find(".number").text(); });
    }
  });
});
