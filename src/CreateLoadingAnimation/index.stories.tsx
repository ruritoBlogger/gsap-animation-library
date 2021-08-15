import { Story, Meta } from "@storybook/react";

import LoadingAnimation from "./index";

export default {
  title: "LoadingAnimation",
  component: LoadingAnimation,
} as Meta;

const Template: Story = () => <LoadingAnimation />;

export const DefaultAnimation = Template.bind({});
DefaultAnimation.args = {};
