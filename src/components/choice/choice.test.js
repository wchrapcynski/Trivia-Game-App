import React from "react";
import { shallow } from "enzyme";
import {
  findByTestAttribute,
  checkProps,
  testStore,
} from "./../../helpers/utils";
import Choice from "./choice";

const expected_props = {
  correct: true,
  choice: "Test text",
  emitEvent: () => {},
};

const setup = (intialState = {}, props = { expected_props }) => {
  const store = testStore(intialState);
  const wrapper = shallow(<Choice store={store} {...props} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("Choice Component", () => {
  describe("check prop types", () => {
    it("should not throw warnings", () => {
      const propError = checkProps(Choice, expected_props);
      expect(propError).toBeUndefined();
    });
  });
  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const intialState = {
        gameReducer: {
          hasGameStarted: true,
          isQuestionActive: true,
          score: 2,
          highScore: 3,
        },
      };
      wrapper = setup(intialState);
    });
    it("should render a choice component", () => {
      const choice = findByTestAttribute(
        wrapper,
        "data-test",
        "choice-component"
      );
      expect(choice.length).toBe(1);
    });
  });
  describe("Clicks", () => {
    let wrapper;
    let mockFunction;
    beforeEach(() => {
      mockFunction = jest.fn();
      const props = {
        correct: false,
        choice: "Example Text",
      };
      const intialState = {
        gameReducer: {
          hasGameStarted: true,
          isQuestionActive: true,
          score: 2,
          highScore: 3,
        },
      };
      wrapper = shallow(
        <Choice
          onClick={mockFunction}
          store={testStore(intialState)}
          {...props}
        />
      )
        .childAt(0)
        .dive();
    });
    it("should emit callback on click event", () => {
      const choice = findByTestAttribute(
        wrapper,
        "data-test",
        "choice-component"
      );
      choice.simulate("click");
      const callback = mockFunction.mock.calls.length;
      console.log(wrapper.debug());
      expect(callback).toBe(1);
    });
  });
});
