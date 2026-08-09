import "./App.css"
import EpubViewer from "./components/viewer/epub/epub-viewer"

function App() {
  const filePath = "/sample.epub"

  return (
    <main>
      <p>You are reading: {filePath}</p>

      <EpubViewer path={filePath} />
    </main>
  )
}

export default App