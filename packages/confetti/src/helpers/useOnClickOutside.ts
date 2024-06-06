import React from "react";

/**
 * React hook that allows you to control clicking away from a particular React
 * component. Pass it React element refs, and if a user clicks away from one or
 * more of them, the `handler` function is called.
 */
export function useOnClickOutside({
  elementRefs = [],
  dependencies = [],
  handler = () => {},
}: {
  /**
   * The React refs of the elements you want to be the focal points. If the user clicks away from these elements, the `handler` function is called.
   */
  elementRefs?: React.RefObject<any>[];
  /**
   * Optional dependency array for useEffect.
   */
  dependencies?: any[];
  /**
   * The function we call when a user clicks away from `elementRefs`
   */
  handler?: Function;
} = {}) {
  React.useEffect(() => {
    window[awayClickBrowserProp] = new Map();

    window[awayClickBrowserProp].set(elementRefs, handler);
    document.addEventListener("click", outsideClickHandler, true);
    document.addEventListener("tap", outsideClickHandler, true);

    return () => {
      window[awayClickBrowserProp].delete(elementRefs);
      document.removeEventListener("click", outsideClickHandler, true);
      document.removeEventListener("tap", outsideClickHandler, true);
    };
  }, dependencies);

  return;
}

const awayClickBrowserProp = "$confettiClickAwayNodes";

function outsideClickHandler(event: MouseEvent) {
  for (const [nodes, fn] of window[awayClickBrowserProp]) {
    const isClickedNodeInsideClickAwayNode = nodes.some(
      (node) => node.current && node.current.contains(event.target)
    );
    if (!isClickedNodeInsideClickAwayNode) {
      fn();
    }
  }
}
