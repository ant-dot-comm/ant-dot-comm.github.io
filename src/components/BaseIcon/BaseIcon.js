import classNames from "classnames";
import React from "react";

export function BaseIcon(props) {
    const {
        className,
        href
      } = props

    const baseIconClasses = classNames(
        className,
        "base-icon",
    );

    return (
        <svg
            aria-hidden="true"
            className={baseIconClasses}
            focusable="false"
            viewBox="0 0 34 34"
        >
            <use href={href} xlinkHref={href} />
        </svg>
    );
}

