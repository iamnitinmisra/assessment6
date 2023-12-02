const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  test("check that shuffle returns an array", () => {
    const array = shuffle();

    expect(array).toHaveLength(0);
    expect(typeof array).toBe("object");
  });

  test("check that shuffle returns an array", () => {
    const mockArray = [0, 1, 2, 3, 4];
    const array = shuffle(mockArray);
    const isShuffled = mockArray[0] != array[0];

    expect(isShuffled).toBeTruthy();
  });
});
