import { types } from "./../actions/types";
import leaderboardReducer, { initialState } from "./leaderboardReducer";

describe("Leaderboard Reducer", () => {
  it("should return a default state", () => {
    const newState = leaderboardReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  it("should return a new state if receiving type", () => {
    const leaderboardDisplay = true;
    const newState = leaderboardReducer(undefined, {
      type: types.UPDATE_LEADERBOARD_DISPLAY,
      payload: leaderboardDisplay,
    });
    expect(newState).toEqual({
      leaderboardDisplay: leaderboardDisplay,
      leaderboardData: null,
    });
  });
});
