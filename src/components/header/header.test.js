import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAttr } from "../../../Utlis";
const setup = (props = {}) => {
  const cmp = shallow(<Header {...props} />);
  return cmp;
};

describe("Header Component Renders ", () => {
  let cmp = setup();
  const wrapper = findByTestAttr(cmp, "headerCmp");
  it("Should Render without errors", () => {
    expect(wrapper.length).toBe(1);
  });
  it("should render a logo", () => {
    const logo = findByTestAttr(cmp, "logoIMG");
    expect(logo.length).toBe(1);
  });
});
