import { PreviewComponent } from "./withCustomPreview";

export const globalTypes = {
  theme: {
    name: "Background",
    title: "Background Title",
    description: "Preview Background",
    defaultValue: "#ffffff",
    toolbar: {
      icon: "paintbrush",
      items: ["#ffffff", "#f7f7f7", "#227c31"],
    },
  },
};

export const decorators = [PreviewComponent];
