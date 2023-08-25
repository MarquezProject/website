import React, { useState } from "react"
import { Link } from "./utils"

type ButtonProps = { title: string, to?: string, type?: any, label?: string, disabled?: boolean, iconLeft?: JSX.Element, iconRight?: JSX.Element, className?: string };
const Button: React.FC<ButtonProps> = props => {
    const { title, to, type, label, disabled } = props

    let innerComponents = (
        <React.Fragment>
            {props.iconLeft && (
                <span className="icon icon-left">{props.iconLeft}</span>
            )}
            <span>{props.title}</span>
            {props.iconRight && (
                <span className="icon icon-right">{props.iconRight}</span>
            )}
        </React.Fragment>
    )


    if(type) {
        const b = type.split(",");
        const t = b[1] ? b[1] : "button"
        const dis = disabled === undefined ? false: disabled
        if (b[0] === "button") {
            return <button type={t} disabled={dis} className={`btn btn-primary${dis ? ' disabled' : ''}${props.className ? ' ' + props.className : ''}`}>{innerComponents}</button>
        }
        if (b[0] === "extbutton") {
            return (
                <Link to={to}>
                    <button type={t} disabled={dis} className={`btn btn-primary${dis ? ' disabled' : ''}${props.className ? ' ' + props.className : ''}`}>{innerComponents}</button>
                </Link>
            )
        }
    }
    return (
        <Link to={to} className={`btn btn-primary${props.className ? ' ' + props.className : ''}`} title={label || title}>
            {innerComponents}
        </Link>
    )
}

const TextInput = ({ label, type = "text", name, onChange, footer }) => {
    const [focused, changeFocused] = useState(false)

    let elem = (
        <input
            type={type}
            name={name}
            className="ui-input"
            onFocus={() => changeFocused(true)}
            onBlur={() => changeFocused(false)}
            onChange={onChange}
            aria-label={name}
        />
    )

    if (type === "textarea") {
        elem = (
            <textarea
                className="ui-textarea"
                name={name}
                onChange={event => {
                    event.target.style.height = "auto"
                    event.target.style.height = event.target.scrollHeight + "px";
                    onChange(event);
                }}
                onFocus={() => changeFocused(true)}
                onBlur={() => changeFocused(false)}
                aria-label={name}
            />
        )
    }

    return (
        <div
            className={`${
                focused ? "input focused" : ""
            } ui-input-div`}
        >
            <p className="ui-input-div-p">{label}</p>
            <div className="ui-input-div-elem">
                {elem}
            </div>
            {footer && 
            <>{footer}</>
            }
        </div>
    )
}

export { Button, TextInput }
