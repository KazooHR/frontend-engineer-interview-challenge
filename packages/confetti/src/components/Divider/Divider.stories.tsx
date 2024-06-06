import React from "react";

import { Meta } from "@kazoohr/storybook";

import { Divider, DividerProps } from "./Divider";

export function Default(props: DividerProps) {
  return (
    <div>
      <div>Hello</div>
      <Divider color={props.color} />
      <div>World</div>
    </div>
  );
}

export function VerticalDivider(props: DividerProps) {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <div>🙈</div>
      <Divider color={props.color} />
      <div>🙉</div>
      <Divider color={props.color} />
      <div>🙊</div>
      <Divider color={props.color} />
      <div>😎</div>
    </div>
  );
}

const config: Meta<DividerProps> = {
  title: "Divider",
  component: Divider,
  args: {
    style: {},
    className: "",
    color: "gray-5",
  },
};

export default config;
