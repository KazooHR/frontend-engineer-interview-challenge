import React from "react";
import jsxToString from "react-element-to-jsx-string";

export const PreviewComponent = (Story, context) => (
  <>
    <h1>{context.kind}</h1>
    See{" "}
    <a href={`/?path=/docs/${context.id}`} target="_top">
      docs and props
    </a>{" "}
    for more information about this component. You can also use the "Canvas" and
    "Docs" tabs to toggle between these view modes.
    <h2 style={{ margin: "16px 0px" }}>Demo:</h2>
    <div
      style={{
        alignItems: "center",
        backgroundColor: context.globals.theme,
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
    <div style={{ margin: "16px 0px" }}>
      <h2>Live Code:</h2>
      <pre>
        <code>
          {jsxToString(Story(), {
            // Print function signature
            functionValue: (fn) => /function .*\(.*\)/.exec(fn.toString()),
          })}
        </code>
      </pre>
    </div>
  </>
);
