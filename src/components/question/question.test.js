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
  describe("Renders when game has started", () => {
    let wrapper;
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
      wrapper = setup(initialState);
    });
    it("should render the question box component", () => {
      const questionBox = findByTestAttribute(
        wrapper,
        "data-test",
        "question-box-component"
      );
      expect(questionBox.length).toBe(1);
    });
    it("should not display the leaderboard", () => {
      const questionBox = findByTestAttribute(
        wrapper,
        "data-test",
        "display-leaderboard"
      );
      expect(questionBox.length).toBe(0);
    });
  });
  describe("Renders when game has not started", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {
        questionReducer: {
          question: "Test Text",
        },
        leaderboardReducer: {
          leaderboardDisplay: true,
        },
        gameReducer: {
          hasGameStarted: false,
          hasGameEnded: true,
          highScore: 2,
          isQuestionActive: false,
          isCorrect: null,
        },
      };
      wrapper = setup(initialState);
    });
    it('should render the leaderboard when enabled', () => {
      const questionBox = findByTestAttribute(
        wrapper,
        "data-test",
        "display-leaderboard"
      )
      expect(questionBox.length).toBe(1);
    });
  });
});
