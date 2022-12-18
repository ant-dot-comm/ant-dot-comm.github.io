import classNames from "classnames";
import React from "react";

export function BaseIcon(props) {
    const {
        className,
        href,
        id,
        onClick,
      } = props

    const baseIconClasses = classNames(
        className,
        "base-icon",
    );

    const click = {
        onClick: onClick && onClick
    }

    return (
        <svg
            aria-hidden="true"
            className={baseIconClasses}
            focusable="false"
            id={id}
            viewBox="0 0 34 34"
            {...click}
        >
            <use href={href} xlinkHref={href} />
        </svg>
    );
}

