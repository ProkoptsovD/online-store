import React from "react";
import { Details, Error, ErrorName, Wrapper } from "./NotFoundPage.styled";

class NotFoundPage extends React.Component {
    render() {
        return (
            <Wrapper>
                <Error>
                    404
                </Error>
                <ErrorName>
                    Page not found
                </ErrorName>
                <Details>
                    Requsted page could not be found or reached
                </Details>
            </Wrapper>
        )
    }
}

export default NotFoundPage;