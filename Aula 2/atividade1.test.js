const StringManipulations = require("./atividade1");

let stringM = {};
let baseString;

describe("String Manipulations class test", () => {
  beforeAll(() => {
    baseString =
      "Condomínio GlobalTech - Estrada Giuseppina Vianelli Vianelli di Napolli, 1185 - Polo II de Alta Tecnologia, Campinas - SP, 13086-530, Brazil";
    stringM = new StringManipulations(baseString);
  });

  describe("findFirstMatch function test", () => {
    it("Should return the substring when there is match", () => {
      const output = "GlobalTech";
      const input = "GlobalTech";

      const actual = stringM.findFirstMatch(input);

      expect(actual).toEqual(output);
    });

    it("Should return an empty string when there is no match", () => {
      const output = "";
      const input = "CPQC";

      const actual = stringM.findFirstMatch(input);

      expect(actual).toEqual(output);
    });
  });

  describe("findLastMatch function test", () => {
    it("Should return the substring when there is match", () => {
      const output = "Vianelli";
      const input = "Vianelli";

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
      const output =
        " - Estrada Giuseppina Vianelli Vianelli di Napolli, 1185 - Polo II de Alta Tecnologia, ";
      const firstInput = "Condomínio GlobalTech";
      const secondInput = "Campinas - SP, 13086-530, Brazil";

      const actual = stringM.substringBetweenMatches(firstInput, secondInput);

      expect(actual).toEqual(output);
    });

    it("Should return an empty string when the first input does not match", () => {
      const output = "";
      const firstInput = "match";
      const secondInput = "Campinas - SP, 13086-530, Brazil";

      const actual = stringM.substringBetweenMatches(firstInput, secondInput);

      expect(actual).toEqual(output);
    });

    it("Should return an empty string when the second input does not match", () => {
      const output = "";
      const firstInput = "Condomínio GlobalTech";
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
      const output = "Coil";

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
