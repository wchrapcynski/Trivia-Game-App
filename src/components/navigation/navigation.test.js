import React from "react";
import { shallow } from "enzyme";
import {
  findByTestAttribute,
  testStore,
} from "../../helpers/utils";
import Navigation from "./navigation";

const setup = (initialState = {}, props) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Navigation store={store} {...props} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("Navigation component", () => {
  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {
        gameReducer: {
          hasGameStarted: true,
          hasGameEnded: false,
          isQuestionActive: true,
          isCorrect: null,
          score: 2,
          apiEndPoints: {
            categorySearch: "http://localhost:8000/categorysearch/",
            leaderboard: "http://localhost:8000/leaderboard/",
            published: "http://localhost:8000/published/",
            question: "http://localhost:8000/question/",
            questionList: "http://localhost:8000/trivia/",
          },
          apiAccessOptions: {
            method: "GET",
            headers: {
              Authorization: "Token " + process.env.REACT_APP_TRIVIA_API_KEY,
            },
          },
        },
        questionReducer: {
          currentQuestion: 1,
          publishedItemsLength: 5,
        },
        leaderboardReducer: { leaderboardDisplay: false },
      };
      wrapper = setup(initialState);
    });
    it("should render a navigation bar", () => {
      const navigation = findByTestAttribute(
        wrapper,
        "data-test",
        "navigation-component"
      );
      expect(navigation.length).toBe(1);
    });
  });
});
