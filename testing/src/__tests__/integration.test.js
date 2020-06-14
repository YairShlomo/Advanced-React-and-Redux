import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";

it("can fetch a list of comments and display them", () => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  //find the fetchComment buttton and click it
  wrapped.find(".fetch-comments").simulate("click");
  //expect to find a list of comments
  expect(wrapped.find("li").length).toEqual(500);
});
