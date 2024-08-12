
import Content from "./components/content"
import Gallery from "./components/gallery"
import Header from "./components/header"
function App() {

  return (
    <>
      <Header/>
      <main className="lg:px-32 padding-y">
        <div className="max-container lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-24 items-center">
          <Gallery />
          <Content />
        </div>
      </main>
    </>
  )
}

export default App