import { Story, Meta } from "@storybook/react";

import { LoadingAnimationComponent } from "./index";

export default {
  title: "LoadingAnimationComponent",
  component: LoadingAnimationComponent,
} as Meta;

const Template: Story = () => <LoadingAnimationComponent />;

export const DefaultAnimation = Template.bind({});
DefaultAnimation.args = {};
