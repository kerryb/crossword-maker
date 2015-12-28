describe("CrosswordMaker.Stats", function() {
  describe("update", function() {
    beforeEach(function() {
      loadFixtures("small_blocked_grid.html");
      CrosswordMaker.Stats.update();
    });

    it("updates the percentage blocked", function() {
      expect($("#percent-blocked").text()).toEqual("48.0");
    });

    it("updates the percentage blocked meter", function() {
      expect($("#percent-blocked-meter-pointer").css("left")).toEqual("48px");
    });
  });
});
