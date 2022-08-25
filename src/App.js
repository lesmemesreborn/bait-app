import logo from "./logo.svg"
import "./App.css"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import background from "./assets/background.jpg"

const App = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <div className="container lg mx-auto flex-col h-screen border-2 border-black">
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App
