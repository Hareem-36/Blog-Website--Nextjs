// pages/index.tsx
import FaqAccordion from "./components/FaqAccordion";
import Header from "./components/header";
import Foot from "../app/components/footer"
import Main from "./components/main";

export default function Home() {
  return (
    <div>
      <Header/>
      <Main/>
      <FaqAccordion />
    
   <Foot/>
    </div>
  );
}
