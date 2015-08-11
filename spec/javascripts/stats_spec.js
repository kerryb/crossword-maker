describe("CrosswordMaker.Stats", function() {
  describe("update", function() {
    it("updates the percentage blocked", function() {
      loadFixtures("small_blocked_grid.html");
      CrosswordMaker.Stats.update();
      expect($("#percent-blocked").text()).toEqual("44.0");
    });
  });
});
