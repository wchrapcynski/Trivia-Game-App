import { types } from "./../actions/types";
import gameReducer, { initialState } from "./gameReducer";

describe("Game Reducer", () => {
  it("should return a default state", () => {
    const newState = gameReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
});
