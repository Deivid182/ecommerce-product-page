
import Content from "./components/content"
import Gallery from "./components/gallery"
import Header from "./components/header"
function App() {

  return (
    <>
      <Header/>
      <main className="padding-x padding-y">
        <div className="max-container px-8 flex gap-32 items-center">
          <Gallery />
          <Content />
        </div>
      </main>
    </>
  )
}

export default App