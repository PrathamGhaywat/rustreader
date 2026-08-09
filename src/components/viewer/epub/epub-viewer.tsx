import { useState } from "react"
import { ReactReader } from "react-reader"

interface EpubViewerProps {
    path: string
}

function EpubViewer({ path }: EpubViewerProps) {
    const [location, setLocation] = useState<string | number>(0)

    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <ReactReader
                url={path}
                location={location}
                locationChanged={(epubcfi: string) => {
                    setLocation(epubcfi)
                }}
            />
        </div>
    )
}

export default EpubViewer