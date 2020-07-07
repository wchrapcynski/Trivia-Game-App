import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute, testStore } from "../../helpers/utils";
import Leaderboard from "./leaderboard";

const setup = (initialState = {}, props) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Leaderboard store={store} {...props} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("Leaderboard Component", () => {
  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {
        gameReducer: {
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
          leaderboardReducer: {
            leaderboardData: [
              {
                date: "2020-06-02",
                email: "shaggy@zoiks.org",
                initials: "WDC",
                score: 60,
              },
              {
                date: "2020-06-01",
                email: "wchrapcynsk@gmail.com",
                initials: "***",
                score: 60,
              },
              {
                date: "2020-06-03",
                email: "pureshift@pureshift.com",
                initials: "PSP",
                score: 60,
              },
            ],
          },
        },
      };
      wrapper = setup(initialState);
    });
    it("should render a leaderboard component", () => {
      const leaderboard = findByTestAttribute(
        wrapper,
        "data-test",
        "leaderboard-component"
      );
      expect(leaderboard.length).toBe(1);
    });
  });
});
