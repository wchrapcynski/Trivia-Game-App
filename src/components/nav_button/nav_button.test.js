import React from "react";
import { shallow } from "enzyme";
import {
  findByTestAttribute,
  checkProps,
  testStore,
} from "./../../helpers/utils";
import NavButton from "./nav_button";

const expectedProps = {
  label: "Test Text",
  clasType: "TestText",
  isCorrect: true,
  disabled: true,
};

const setup = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<NavButton store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("Nav Button Component", () => {
  describe("Name of the group", () => {
    it("should not throw warnings", () => {
      const propError = checkProps(NavButton, expectedProps);
      expect(propError).toBeUndefined();
    });
  });
  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {
        gameReducer: {
          hasGameStarted: true
        }
      }
      wrapper = setup(initialState);
    });
    it("should render a button", () => {
      const button = findByTestAttribute(wrapper, "nav-buttton-component");
      expect(button.length).toBe(1);
    });
  });
});
