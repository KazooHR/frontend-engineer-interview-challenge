import React from "react";

export const customBackgroundDecorator = (Story, ctx) => {
  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: ctx.globals.theme,
        border: "1px dashed rgb(229, 229, 229)",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "16px 0px",
        padding: "50px 35px",
        position: "relative",
        transition: "background-color 0.2s ease 0s",
      }}
    >
      <Story />
    </div>
  );
};
