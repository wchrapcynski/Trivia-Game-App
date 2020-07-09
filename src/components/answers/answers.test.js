import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute, testStore } from "./../../helpers/utils";
import Answers from "./answers";

const setup = (intialState = {}, props = {}) => {
  const store = testStore(intialState);
  const wrapper = shallow(<Answers store={store} props={props} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("Answers Component", () => {
  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const intialState = {
        questionReducer: [
          { choice: "Choice 1 test text", correct: true },
          { choice: "Choice 2 test text", correct: false },
          { choice: "Choice 3 test text", correct: false },
          { choice: "Choice 4 test text", correct: false },
        ],
      };
      wrapper = setup(intialState);
    });
    it("should render an Answers component", () => {
      const answers = findByTestAttribute(
        wrapper,
        "data-test",
        "answers-component"
      );
      expect(answers.length).toBe(1);
    });
    it('should render four choice components', () => {
      const choices = findByTestAttribute(
        wrapper,
        "data-test",
        "choice-component"
      );
      expect(choices.length).toBe(4);
    });
  });
});
