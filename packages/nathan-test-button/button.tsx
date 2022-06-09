import * as React from "react";

// import React from "react";
// import classnames from "classnames/bind";
// import styles from './button.module.scss';
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import FavoriteIcon from "@material-ui/icons/Favorite";

// const selector = "elements-button";

export type ButtonVariant = "default" | "icon-only" | "text-only";
export type ButtonPriority = "primary" | "secondary";
export type ButtonSize = "small" | "medium" | "large";
// export type ButtonIcon = { name: string, type: string };

export interface ButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export interface DefaultButtonProps extends ButtonProps {
  label: string;
  //icon: ButtonIcon;
  size: ButtonSize;
  priority?: ButtonPriority;
}

export interface TextOnlyButtonProps extends ButtonProps {
  label: string;
  size: ButtonSize;
}

export interface IconOnlyButtonProps extends ButtonProps {
  //icon: ButtonIcon;
  size: ButtonSize;
  priority?: ButtonPriority;
}

export type ElementsButtonProps = DefaultButtonProps &
  IconOnlyButtonProps &
  TextOnlyButtonProps;

export const ElementsButton = ({
  label,
  disabled,
  size,
  variant,
  priority,
  onClick,
}: ElementsButtonProps) => {
  // const cx = classnames.bind(styles);
  // const classes = cx(
  //   selector,
  //   [variant ?? 'default'],
  //   [priority ?? 'primary'],
  //   [size ?? 'medium']
  // );
  return (
    <button onClick={onClick} /* className={classes} */ disabled={disabled}>
      {variant !== "icon-only" && label}
      {/* {variant == "default" && <FavoriteIcon />} */}
      {/* {variant == "icon-only" && <FavoriteBorderIcon />} */}
    </button>
  );
};
