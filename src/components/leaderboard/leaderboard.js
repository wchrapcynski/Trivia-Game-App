import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchLeaderboardData } from "./../../actions/leaderboardActions";
import "./leaderboard.scss";

function LeaderBoard(props) {
  const { apiAccessOptions, apiEndPoint } = props;
  const { leaderboardData } = props;
  const { fetchLeaderboardData } = props;
  const [leaderboardDataMap, setLeaderboardDataMap] = useState();

  const setLeaderBoardData = () => {
    fetchLeaderboardData(apiEndPoint, apiAccessOptions);
  };

  useEffect(() => {
    setLeaderBoardData();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  useEffect(() => {
    if (leaderboardData) {
      setLeaderboardDataMap(
        leaderboardData.map((data, key) => {
          return (
            <div key={data.id}>
              {key + 1}
              {") "}
              {(data.initials !== "***"
                ? data.initials
                : data.email.substring(0, 3)
              ).toUpperCase()}{" "}
              {" - "}
              {data.score}
              {" - "}
              {data.date}
            </div>
          );
        })
      );
    }
  }, [leaderboardData]);

  return (
    <div className="leaderboard">
      {console.log(props)}
      {leaderboardData && leaderboardDataMap}
    </div>
  );
}

export default connect(
  (state) => ({
    leaderboardData: state.leaderboardReducer.leaderboardData,
    apiAccessOptions: state.gameReducer.apiAccessOptions,
    apiEndPoint: state.gameReducer.apiEndPoints.leaderboard,
  }),
  { fetchLeaderboardData }
)(LeaderBoard);
