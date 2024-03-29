import React from "react"

const Row = ({ children }) => {
    return (
        <div className="row block lg:flex items-center justify-content my-3">
            {children}
        </div>
    )
}

const Col = ({ children }) => {
    return (
        <div className="shortcodes">
            {children}
        </div>
    )
}

export { Row, Col }