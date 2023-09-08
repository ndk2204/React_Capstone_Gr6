import React, { Fragment, PropsWithChildren, ReactNode } from "react";
import "./global-style.scss";

/** Cách 1: props: Props */
// type Props = {
//   children: ReactNode;
// };
/** Cách 2: props: PropsWithChildren */
export function GlobalStyle(props: PropsWithChildren) {
  const { children } = props;

  return <Fragment>{children}</Fragment>;
}
