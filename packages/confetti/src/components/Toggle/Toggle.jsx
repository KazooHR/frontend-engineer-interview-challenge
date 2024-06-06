import React from "react";
import cx from "classnames";

import styles from "./Toggle.scss";

/**
 * @typedef ToggleProps
 * @prop {string} [label] Label for the toggle. Not rendered, used for accessibility
 * @prop {string} [id] ID for the toggle, for associating labels to form elements (accessibility)
 * @prop {string} [data-testid] Unique test ID for the toggle
 * @prop {JSX.element | string} [statusOn] When toggled on, show this icon or React element
 * @prop {JSX.element | string} [statusOff] When toggled off, show this icon or React element
 * @prop {boolean} [autoSave=false] When changed, will display a visual indicator to the user that we saved their change
 * @prop {string} [savedLabel='Saved'] Label to show when autoSave is true, and we need to notify the user that we saved their change
 * @prop {boolean} [checked=false] Whether the toggle is checked or not
 * @prop {boolean} [disabled=false] Whether the toggle is disabled or not
 * @prop {function} [onChange] Function to call when the toggle is changed
 * @prop {function} [onToggleChange] Function to call when the toggle is changed
 */

/**
 * @param {ToggleProps} props
 */
export function Toggle({
  id = "",
  label = "",
  onChange,
  onToggleChange,
  autoSave = false,
  disabled = false,
  checked,
  savedLabel = "",
  statusOn = null,
  statusOff = null,
  "data-testid": dataTestId,
}) {
  const [saved, setSaved] = React.useState(false);

  const handleKeypress = React.useCallback((event) => {
    const input = event.target;
    if (event.key === "Enter" || event.key === "Space") {
      input.checked = !input.checked;
      handleChange(event);
    }
  }, []);

  const handleChange = React.useCallback((event) => {
    const onChangeResult = onChange(event);
    if (typeof onChangeResult === "object" && "then" in onChangeResult) {
      onChangeResult.then(() => {
        if (!autoSave) {
          return;
        }
        setSaved(true);
      });
    } else {
      onChange(event);
    }
    if (onToggleChange) {
      onToggleChange(event.target.checked);
    }
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSaved(false);
    }, 1000);
    return () => clearInterval(interval);
  }, [saved]);

  const icon = checked ? statusOn : statusOff;
  return (
    <div
      className={cx(styles.wrapper, {
        [styles.onIcon]: checked,
        [styles.offIcon]: !checked,
        [styles.iconToggle]: icon,
      })}
    >
      <label data-testid={`${dataTestId}-lbl`} htmlFor={id}>
        <span className="screen-reader-only">{label}</span>
        {icon}
        <input
          id={id}
          data-testid={`${dataTestId}-chk`}
          className={styles.toggle}
          type="checkbox"
          tabIndex="0"
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          onKeyPress={handleKeypress}
        />
      </label>
      {autoSave && saved ? (
        <span className={styles.bubble} data-testid={`${dataTestId}-bubble`}>
          {savedLabel}
        </span>
      ) : null}
    </div>
  );
}
