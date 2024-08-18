import React from "react";
import Header from "../components/Header";

const Home: React.FC = () => {
    return (
      <article className="home">
        <Header />
        <section className="section-habilidades">
          <div>
            <h1>REBUILD IN PROGRESS</h1>
            <p>...</p>
          </div>
          <hr className="home-hr"/>
          {/* <div className="html-css-icons">
           <><img alt="icon html"src={htmlLogo}/></> 
           <><img alt="icon css" src={cssLogo}/></>
          </div> */}
        </section>
        <hr className="between-sections"/>
      </article>
    )
}

export default Home;