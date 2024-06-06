import React, { useState } from "react";

import { storiesOf, boolean, text } from "@kazoohr/storybook";

import ToggleMd from "./Toggle.md";
import { Toggle } from "./Toggle";

storiesOf("Toggle", module)
  .addParameters({ docs: { page: ToggleMd } })
  .add("default", () => {
    const [store, setStore] = useState({
      checked: true,
    });

    const updateStore = (updatedStore) => {
      setStore((currentStore) => ({
        ...currentStore,
        ...updatedStore,
      }));
    };

    return (
      <Toggle
        id={text("id", "toggle-default")}
        label={text("label", "Toggle")}
        autoSave={boolean("Auto Save", false)}
        checked={store.checked}
        data-testid="toggle-default"
        disabled={boolean("Disabled", false)}
        savedLabel={text("saved label", "Saved")}
        onChange={(e) => {
          updateStore({ checked: e.target.checked });
          // Return a promise for the autoSave feature
          return Promise.resolve(true);
        }}
      />
    );
  })
  .add("alert on data change", () => {
    const [store, setStore] = useState({
      checked: true,
    });

    const updateStore = (updatedStore) => {
      setStore((currentStore) => ({
        ...currentStore,
        ...updatedStore,
      }));
    };

    return (
      <Toggle
        id="toggle-default"
        label="Toggle"
        autoSave={boolean("Auto Save", false)}
        checked={store.checked}
        disabled={boolean("Disabled", false)}
        data-testid="toggle-alert-on-data-change"
        savedLabel={text("saved label", "Saved")}
        onToggleChange={(value) => {
          alert("toggle set to " + value);
        }}
        onChange={(e) => {
          updateStore({ checked: e.target.checked });
          // Return a promise for the autoSave feature
          return Promise.resolve(true);
        }}
      />
    );
  });
