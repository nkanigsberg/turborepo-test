import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ElementsButton, ElementsButtonProps } from './button';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  component: ElementsButton,
  title: 'Components/Button',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/4Tld3MqrLcb8n498BYRmS1/Sanofi-POC',
    },
  },
} as ComponentMeta<typeof ElementsButton>;

const Template: ComponentStory<typeof ElementsButton> = (args: ElementsButtonProps) => (
  <ElementsButton {...args}>Hello Button</ElementsButton>
);

export const DefaultButton = Template.bind({});
DefaultButton.parameters = {
  badges:[BADGE.EXPERIMENTAL],
};
DefaultButton.args = {
  variant: 'default',
  size: 'medium',
  priority: 'primary',
  label: 'Default Button',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.parameters = {
  badges:[BADGE.EXPERIMENTAL],
};
Secondary.args = {
  variant: 'default',
  size: 'medium',
  label: 'Default Button',
  priority: 'secondary',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.parameters = {
  badges:[BADGE.EXPERIMENTAL],
};
Disabled.args = {
  variant: 'default',
  disabled: true,
  size: 'medium',
  label: 'Disabled Button',
};

export const IconOnly = Template.bind({});
IconOnly.parameters = {
  badges:[BADGE.EXPERIMENTAL],
};
IconOnly.args = {
  variant: 'icon-only',
  size: 'medium',
  disabled: false,
};

export const IconOnlySecondary = Template.bind({});
IconOnlySecondary.parameters = {
  badges:[BADGE.EXPERIMENTAL],
};
IconOnlySecondary.args = {
  variant: 'icon-only',
  priority: 'secondary',
  size: 'medium',
  disabled: false,
};

export const DisabledIconOnly = Template.bind({});
DisabledIconOnly.parameters = {
  badges:[BADGE.EXPERIMENTAL],
};
DisabledIconOnly.args = {
  variant: 'icon-only',
  disabled: true,
  size: 'medium',
};

export const TextOnly = Template.bind({});
TextOnly.parameters = {
  badges:[BADGE.EXPERIMENTAL],
};
TextOnly.args = {
  variant: 'text-only',
  size: 'medium',
  label: 'Text Button',
  disabled: false,
};

export const DisabledTextOnly = Template.bind({});
DisabledTextOnly.parameters = {
  badges:[BADGE.EXPERIMENTAL],
};
DisabledTextOnly.args = {
  variant: 'text-only',
  disabled: true,
  size: 'medium',
  label: 'Disabled Text Button',
};