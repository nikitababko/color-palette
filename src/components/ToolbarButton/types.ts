import type React from 'react';

export type ToolbarButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  leftSide: string | number | React.ReactNode;
  label: string;
};
