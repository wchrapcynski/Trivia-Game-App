import checkPropTypes from "check-prop-types";

export const findByTestAttribute = (component, attribute) => {
  const wrapper = component.find(`[data-test='${attribute}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErrors = checkPropTypes(
    // eslint-disable-next-line react/forbid-foreign-prop-types
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsErrors;
};