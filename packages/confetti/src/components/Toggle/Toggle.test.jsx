import React from "react";

import { render, fireEvent } from "@kazoohr/test";

import { Toggle } from "./Toggle";

const props = {
  autoSave: false,
  disabled: false,
  checked: false,
  onChange: () => {},
  ["data-testid"]: "this-is-a-unique-id",
};

describe("Toggle", () => {
  it("should render", () => {
    expect(() => render(<Toggle {...props} />)).not.toThrow();
  });

  it("should start checked if checked is set to true", () => {
    const subject = render(<Toggle {...props} checked />);
    expect(subject.getByTestId("this-is-a-unique-id-chk").checked).toEqual(
      true
    );
  });

  it("should be disabled if disabled is set to true", () => {
    const subject = render(<Toggle {...props} disabled />);
    expect(subject.getByTestId("this-is-a-unique-id-chk").disabled).toEqual(
      true
    );
  });

  it("should have save message if autoSave is true", async () => {
    const toggleChanged = jest.fn().mockImplementation(() => Promise.resolve());
    const onChange = jest.fn().mockImplementation(() => Promise.resolve());

    const subject = render(
      <Toggle
        {...props}
        autoSave
        onToggleChange={toggleChanged}
        onChange={onChange}
      />
    );

    fireEvent.click(subject.getByTestId("this-is-a-unique-id-chk"));

    expect(onChange).toHaveBeenCalled();
    expect(toggleChanged).toHaveBeenCalled();
  });
});
