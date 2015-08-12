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

    function cellNumbers() {
      return $(".cell").map(function(_, cell) { return $(cell).find(".number").text(); });
    }
  });
});
