import React from "react"
import Layout from "../components/layout"
import { PageProps } from "gatsby";

export default ({ location }: PageProps<{}, {}>) => {
    return (
        <Layout
            seo={{
                title: "404",
            }}
            location={location}
        >
            <div className="not-found-div">
                <div className="not-found-title-div">
                    <h2 className="not-found-title">
                        4<span className="not-found-title-text">0</span>4
                    </h2>
                </div>
                <div className="not-found-msg">
                    <p>Oops! That page does not exist. <span role="img" aria-label="Sad face">😞</span></p>
                    <p>
                        <button onClick={() => {
                            if(window.history) window.history.back();
                        }} className="not-found-btn">Go Back?</button>
                    </p>
                </div>
            </div>
        </Layout>
    )
}
