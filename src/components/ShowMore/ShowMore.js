import React, { useState } from 'react';
import Button from "@material-ui/core/Button";

function ShowMore ({data, showMore, backToMinimal, renderedItems}) {
    let button;
    if (data.length !== renderedItems) {
        button = (
            <Button variant="contained" color="primary" onClick={showMore}>
                Show more
            </Button>
        );
    } else {
        button = (
            <Button variant="contained" color="primary" onClick={backToMinimal}>
                Minimize
            </Button>
        );
    }
    return (
        <>
            {button}
        </>
    );
}

export default ShowMore;