import { types } from "./../actions/types";
import gameReducer, { initialState } from "./gameReducer";

describe("Game Reducer", () => {
  it("should return a default state", () => {
    const newState = gameReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  it("should return a new state if receiving type", () => {
    const gameData = true;
    const newState = gameReducer(undefined, {
      type: types.UDPATE_HAS_GAME_STARTED,
      payload: gameData,
    });
    expect(newState).toEqual({
      ...initialState,
      hasGameStarted: gameData,
    });
  });
});
