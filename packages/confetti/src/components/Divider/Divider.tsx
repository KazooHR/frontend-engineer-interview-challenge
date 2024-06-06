import React from "react";

import cx from "classnames";

import styles from "./Divider.scss";

export const COLOR_MAP = {
  "nav-gray": styles["divider-nav-gray"],
  "gray-1": styles["divider-gray-1"],
  "gray-2": styles["divider-gray-2"],
  "gray-3": styles["divider-gray-3"],
  "gray-4": styles["divider-gray-4"],
  "gray-5": styles["divider-gray-5"],
  "gray-6": styles["divider-gray-6"],
};

export interface DividerProps {
  /**
   * Additional classnames to add to the divider `div`
   */
  className?: string;
  /**
   * Additional styles to add to the divider `div`
   */
  style?: React.CSSProperties;
  /**
   * The color of the divider
   */
  color?: keyof typeof COLOR_MAP;
}

/**
 * A 1px line that will expand in any direction.
 */
export function Divider({
  className,
  style,
  color = "gray-5",
}: DividerProps) {
  const classNames = cx(COLOR_MAP[color], className);

  return <div className={classNames} style={style} />;
}
