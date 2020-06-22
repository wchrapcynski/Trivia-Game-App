import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute, checkProps } from "./../../helpers/utils";
import NavButton from "./nav_button";

describe("Nav Button Component", () => {
  describe("Name of the group", () => {
    it("should not throw warnings", () => {
      const expectedProps = {
        label: "Test Text",
        clasType: "TestText",
        isCorrect: true,
        disabled: true,
      };
      const propError = checkProps(NavButton, expectedProps);
      expect(propError).toBeUndefined();
    });
  });
});
