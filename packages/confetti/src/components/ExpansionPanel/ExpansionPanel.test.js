import React from "react";

import { fireEvent, render } from "@kazoohr/test";

import { ExpansionPanel } from "./ExpansionPanel";

it('calls the setIsOpen function to shows the "content"', () => {
  const setIsOpen = jest.fn();
  const { getByTestId } = render(
    <ExpansionPanel
      key="panel-1"
      title="Title"
      isOpen={false}
      setIsOpen={setIsOpen}
      content={<div data-testid="content-component" />}
    />
  );
  expect(getByTestId("displayed-content-false")).toBeTruthy();

  fireEvent.click(getByTestId("expansion-button"));
  expect(setIsOpen).toHaveBeenCalled();
});
