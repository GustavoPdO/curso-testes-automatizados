const StringManipulations = require("./atividade1");

let stringM = {};
let baseString;

describe("StringManipulations class test", () => {
  beforeAll(() => {
    baseString =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur luctus urna, vehicula gravida nibh cursus ac.";
    stringM = new StringManipulations(baseString);
  });

  describe("findFirstMatch function test", () => {
    it("Should return the substring when there is match", () => {
      const output = "consectetur";
      const input = "consectetur";

      const actual = stringM.findFirstMatch(input);

      expect(actual).toEqual(output);
    });

    it("Should return an empty string when there is no match", () => {
      const output = "";
      const input = "match";

      const actual = stringM.findFirstMatch(input);

      expect(actual).toEqual(output);
    });
  });

  describe("findLastMatch function test", () => {
    it("Should return the substring when there is match", () => {
      const output = "consectetur";
      const input = "consectetur";

      const actual = stringM.findLastMatch(input);

      expect(actual).toEqual(output);
    });

    it("Should return an empty string when there is no match", () => {
      const output = "";
      const input = "match";

      const actual = stringM.findLastMatch(input);

      expect(actual).toEqual(output);
    });
  });

  describe("substringBetweenMatches function test", () => {
    it("Should return the substring between the two matches", () => {
      const output = " ipsum dolor sit amet, consectetur adipiscing ";
      const firstInput = "Lorem";
      const secondInput = "elit";

      const actual = stringM.substringBetweenMatches(firstInput, secondInput);

      expect(actual).toEqual(output);
    });

    it("Should return an empty string when the first input does not match", () => {
      const output = "";
      const firstInput = "match";
      const secondInput = "elit";

      const actual = stringM.substringBetweenMatches(firstInput, secondInput);

      expect(actual).toEqual(output);
    });

    it("Should return an empty string when the second input does not match", () => {
      const output = "";
      const firstInput = "Lorem";
      const secondInput = "match";

      const actual = stringM.substringBetweenMatches(firstInput, secondInput);

      expect(actual).toEqual(output);
    });

    it("Should return an empty string when none input matches", () => {
      const output = "";
      const firstInput = "first";
      const secondInput = "second";

      const actual = stringM.substringBetweenMatches(firstInput, secondInput);

      expect(actual).toEqual(output);
    });
  });

  describe("both_ends function test", () => {
    it("Should return the first and last 2 chars from the original string", () => {
      const output = "Loc.";

      const actual = stringM.both_ends();

      expect(actual).toEqual(output);
    });

    it("Should return an empty string when the original string has a length smaller than 2", () => {
      const input = "1";
      stringM = new StringManipulations(input);
      const output = "";

      const actual = stringM.both_ends();

      expect(actual).toEqual(output);
    });
  });

  describe("fix_start function test", () => {
    it("Should return an altered string", () => {
      const input = "babble";
      const output = "ba**le";

      const actual = stringM.fix_start(input);

      expect(actual).toEqual(output);
    });
  });
});
