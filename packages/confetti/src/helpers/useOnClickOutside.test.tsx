import React from "react";

import { render, fireEvent } from "@kazoohr/test";

import { useOnClickOutside } from "./useOnClickOutside";

const listenerFn = jest.fn();

function Simulator() {
  const child1Ref = React.useRef();
  useOnClickOutside({
    elementRefs: [child1Ref],
    handler: listenerFn,
    dependencies: [],
  });

  return (
    <div data-testid="parent">
      <div ref={child1Ref} data-testid="child-1">
        <div data-testid="grand-child-1"></div>
      </div>
      <div data-testid="child-2">
        <div data-testid="grand-child-2"></div>
      </div>
    </div>
  );
}

beforeEach(() => {
  jest.clearAllMocks();
});

it("doesn't fail with no args (just for robustness)", () => {
  function Simulator() {
    const child1Ref = React.useRef();
    useOnClickOutside();

    return (
      <div data-testid="parent">
        <div ref={child1Ref} data-testid="child-1">
          <div data-testid="grand-child-1"></div>
        </div>
        <div data-testid="child-2">
          <div data-testid="grand-child-2"></div>
        </div>
      </div>
    );
  }

  expect(() => {
    render(<Simulator />);
  }).not.toThrow();
});

it("does not call listener function if the click was inside the element that is being watched", () => {
  const { getByTestId } = render(<Simulator />);
  const grandChild1 = getByTestId("grand-child-1");

  fireEvent.click(grandChild1);
  expect(listenerFn).not.toHaveBeenCalled();
});

it("calls listener function if the click was outside the element that is being watched", () => {
  const { getByTestId } = render(<Simulator />);
  const parentElement = getByTestId("parent");

  fireEvent.click(parentElement);
  expect(listenerFn).toHaveBeenCalled();
});

it("deletes listeners", () => {
  const { unmount } = render(<Simulator />);

  unmount();

  fireEvent.click(document);
  expect(listenerFn).not.toHaveBeenCalled();
});
