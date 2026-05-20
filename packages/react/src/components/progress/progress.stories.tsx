import type { Meta, StoryFn } from '@storybook/react-vite';
import { Progress } from './progress';

export default {
  title: 'Komponenter/Progress',
  component: Progress,
  args: {
    min: 0,
    max: 100,
  },
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export const Standard = { args: { value: 50 } };

export const Indeterminate = {};
