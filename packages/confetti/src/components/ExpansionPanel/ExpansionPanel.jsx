import React from "react";
import cx from "classnames";

import styles from "./ExpansionPanel.scss";

/**
 * A component that shows/hides a provided element by clicking their title.
 *
 * @typedef {object} ExpansionPanelProps
 * @prop {(JSX.Element | string)} content Element you want rendered in the opened expansion panel
 * @prop {boolean} isOpen Defines the initial state for the panel
 * @prop {boolean} [animate=false] When true, turns on animations
 */

/**
 * @param {ExpansionPanelProps} props
 */
export function ExpansionPanel({ isOpen, content, animate }) {
  return (
    <div className={styles["full-width"]}>
      <div
        className={cx(styles["expansion-panel"], {
          [styles["expansion-panel-open"]]: isOpen,
          [styles["expansion-panel-animated"]]: animate,
        })}
        data-testid={`displayed-content-${isOpen}`}
      >
        {content}
      </div>
    </div>
  );
}
