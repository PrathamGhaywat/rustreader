import "./App.css"
import PdfViewer from "./components/viewer/pdf/pdf-viewer"

function App() {
  const filePath = "/sample.pdf"

  return (
    <main>
      <p>You are reading: {filePath}</p>

      <PdfViewer path={filePath} />
    </main>
  )
}

export default App