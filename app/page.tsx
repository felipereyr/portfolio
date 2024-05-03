import {Header} from "./components/Header"
import {Main} from "./components/Main"
import {Footer} from "./components/Footer"


export default function Home() {
  return (
    <main className="bg-cover bg-center" style={{backgroundImage: "url(/main-bg.png)"}}>
      <Header/>
      <Main/>
      <Footer/>
    </main>
  );
}
