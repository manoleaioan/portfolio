import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

export const LightboxImage = ({ src, style }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <img 
                src={src}
                onClick={() => setOpen(true)}
                style={style}
            />

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[{ src }]}
                plugins={[Zoom]}
            />

        </>
    );
};