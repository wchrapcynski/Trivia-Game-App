import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute, checkProps } from "./../../helpers/utils";
import NavButton from "./nav_button";

const expectedProps = {
  label: "Test Text",
  clasType: "TestText",
  isCorrect: true,
  disabled: true,
};

describe("Nav Button Component", () => {
  describe("Name of the group", () => {
    it("should not throw warnings", () => {
      const propError = checkProps(NavButton, expectedProps);
      expect(propError).toBeUndefined();
    });
  });
  // describe('Renders', () => {
  //   let wrapper = shallow(<NavButton {...expectedProps}/>);
  //   it('should render a button', () => {
  //     const button = findByTestAttribute(wrapper, "nav-buttton-component");
  //     expect(button.length).toBe(1);
  //   });
  // });
});
