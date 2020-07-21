import moxios from "moxios";
import { testStore } from "./../helpers/utils";
import { fetchLeaderboardData } from "./../actions/leaderboardActions";
import { fetchQuestionData } from "./../actions/questionActions";

describe("Fetch leaderboard action", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("should update correctly", () => {
    const expectedState = [];
    for (let i = 0; i < 3; i++) {
      expectedState.push({
        date: `2020-06-0${i}`,
        email: `pureshift${i}@pureshift.com`,
        id: i,
        initials: "***",
        score: 60,
      });
    }
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: expectedState });
    });

    const data = store.getState();

    return store
      .dispatch(
        fetchLeaderboardData(
          data.gameReducer.apiEndPoints.leaderboard,
          data.gameReducer.apiAccessOptions
        )
      )
      .then(() => {
        const newState = store.getState();
        expect(newState.leaderboardReducer.leaderboardData).toStrictEqual(
          expectedState
        );
      });
  });
});

describe("fetch question action", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("should update correctly", () => {
    const expectedState = {
      question: "Test Question",
      choice1: "Test Choice1",
      choice2: "Test Choice2",
      choice3: "Test Choice3",
      choice4: "Test Choice4",
    };
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: expectedState });
    });

    const data = store.getState();

    return store
      .dispatch(
        fetchQuestionData(
          data.gameReducer.apiEndPoints.leaderboard,
          data.gameReducer.apiAccessOptions,
          "1"
        )
      )
      .then(() => {
        const newState = store.getState();
        expect(newState.questionReducer.question).toStrictEqual(
          expectedState.question
        );
      });
  });
});
