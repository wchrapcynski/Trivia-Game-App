import { types } from "./../actions/types";
import questionReducer, { initialState } from "./questionReducer";

describe("Question Reducer", () => {
  it("should return a default state", () => {
    const newState = questionReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  it("should return a new state if receiving type", () => {
    const questionData = {
      question: "Test text",
      choices: ["test text1", "test text2", "test text3", "test text4"],
    };
    const newState = questionReducer(undefined, {
      type: types.UPDATE_QUESTION_DATA,
      payload: questionData,
    });
    expect(newState).toEqual({
      question: questionData.question,
      choices: questionData.choices,
      publishedItems: null,
      publishedItemsLength: 0,
      currentQuestion: 0,
    });
  });
});
