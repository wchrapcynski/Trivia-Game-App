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
  classType: "control",
  isCorrect: true,
  disabled: false,
};

const setup = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<NavButton store={store} {...expectedProps}/>)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("Nav Button Component", () => {
  describe("Check prop types", () => {
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
          hasGameStarted: false,
        },
      };
      wrapper = setup(initialState);
    });
    it("should render a button", () => {
      const button = findByTestAttribute(
        wrapper,
        "data-test",
        "nav-buttton-component"
      );
      expect(button.length).toBe(1);
    });
    it("should render button text", () => {
      const button = findByTestAttribute(
        wrapper,
        "data-test",
        "nav-button-text"
      );
      expect(button.length).toBe(1);
    });
    it("should be flashing green, enabled, and displaying a cursor", () => {
      const button = findByTestAttribute(
        wrapper,
        "className",
        "flashing-green button-enabled nav_button__cursor "
      );
      expect(button.length).toBe(1);
    });
  });
});
