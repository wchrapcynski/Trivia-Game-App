export function setLeaderboardData(data) {
  return { type: "UPDATE_LEADERBOARD_DATA", payload: data };
}
export function fetchLeaderboardData(url, apiOptions) {
  return (dispatch) => {
    fetch(url, apiOptions)
      .then((response) => response.json())
      .then((response) => dispatch(setLeaderboardData(response)))
      .catch((error) => console.log("Data was not received"));
  };
}

export function setleaderboardDisplay(data) {
  return { type: "UPDATE_LEADERBOARD_DISPLAY", payload: data }
}
export function updateLeaderboardDisplay(isDisplayed) {
  return (dispatch) => {
    dispatch(setleaderboardDisplay(isDisplayed))
  }
}