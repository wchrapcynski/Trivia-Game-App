import { types } from "./types";
import axios from "axios";

export function setLeaderboardData(data) {
  return { type: types.UPDATE_LEADERBOARD_DATA, payload: data };
}
// export function fetchLeaderboardData(url, apiOptions) {
//   return (dispatch) => {
//     fetch(url, apiOptions)
//       .then((response) => response.json())
//       .then((response) => dispatch(setLeaderboardData(response)))
//       .catch((error) => console.log("Data was not received"));
//   };
// }

export const fetchLeaderboardData = (url, apiOptions) => async (dispatch) => {
  await axios
    .get(url, apiOptions)
    .then((response) => dispatch(setLeaderboardData(response.data)))
    .catch((error) => console.log("Data was not received"));
};

export function setleaderboardDisplay(data) {
  return { type: types.UPDATE_LEADERBOARD_DISPLAY, payload: data };
}
export function updateLeaderboardDisplay(isDisplayed) {
  return (dispatch) => {
    dispatch(setleaderboardDisplay(isDisplayed));
  };
}
