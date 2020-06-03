import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as leaderboardActions from "./../../actions/leaderboarActions";
import "./leaderboard.scss";

function LeaderBoard() {
  const dispatch = useDispatch();
  const { apiAccessOptions, apiEndPoints } = useSelector(
    (state) => state.gameReducer
  );
  const { leaderboardData } = useSelector((state) => state.leaderboardReducer);
  const [leaderboardDataMap, setLeaderboardDataMap] = useState();

  const setLeaderBoardData = () => {
    dispatch(
      leaderboardActions.fetchLeaderboardData(
        apiEndPoints.leaderboard,
        apiAccessOptions
      )
    );
  };

  useEffect(() => {
    setLeaderBoardData();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  useEffect(() => {
    if (leaderboardData) {
      setLeaderboardDataMap(
        leaderboardData.map((data) => {
          return (
            <div key={data.id}>
              {data.id}{") "}
              {data.email.split("@")[0]} {" - "}
              {data.score}{" - "}
              {data.date}
            </div>
          );
        })
      );
    }
  }, [leaderboardData]);

  return (
    <div className="leaderboard">{leaderboardData && leaderboardDataMap}</div>
  );
}

export default LeaderBoard;
