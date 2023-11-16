import React, { Fragment } from "react";
import { Button, Stack } from "react-bootstrap";

function BootstrapComponents() {
    return (
        <React.Fragment>
            <Stack gap={2}>
            <Button as="a" variant="primary">
                Button as link
            </Button>
            <Button as="a" variant="success">
                Button as link
            </Button>
            </Stack>
        </React.Fragment>
    )
}

export default BootstrapComponents;