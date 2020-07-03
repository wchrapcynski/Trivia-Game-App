import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute, testStore } from "../../helpers/utils";
import Question from "./question";

const setup = (initialState = {}, props) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Question store={store} {...props} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("Question Component", () => {
  describe("Renders", () => {
    beforeEach(() => {
      const initialState = {
        questionReducer: {
          question: "Test Text",
        },
        leaderboardReducer: {
          leaderboardDisplay: false,
        },
        gameReducer: {
          hasGameStarted: true,
          hasGameEnded: false,
          highScore: 2,
          isQuestionActive: true,
          isCorrect: false,
        },
      };
      setup(initialState);
    });
  });
});
