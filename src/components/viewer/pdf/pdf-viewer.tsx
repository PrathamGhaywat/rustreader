import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/Page/TextLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString()

interface PdfViewerProps {
  path: string
}

function PdfViewer({ path }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>(0)

  function onDocumentLoadSuccess({
    numPages,
  }: {
    numPages: number
  }) {
    setNumPages(numPages)
  }

  return (
    <Document
      file={path}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from({ length: numPages }, (_, index) => (
        <Page
          key={index}
          pageNumber={index + 1}
          width={600}
        />
      ))}
    </Document>
  )
}

export default PdfViewer