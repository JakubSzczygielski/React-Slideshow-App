import "./App.css";
import { useState } from "react";
// { src: "23804670.jpg", id: 2 },{ src: "generic-person-gray-photo-placeholder-man-vector-24848950.jpg", id: 3 }
function App() {
  const divs = [
    { src: "23838616.jpg", id: 1 },
    { src: "23804670.jpg", id: 2 },
    {
      src: "generic-person-gray-photo-placeholder-man-vector-24848950.jpg",
      id: 3,
    },
    { src:"23804670.jpg", id: 4 },
  ];
  const [active, setActive] = useState(2);

  function Header() {
    return <h1>Slideshow App 📸</h1>;
  }

  function handleNext() {
    if (active < divs.length) {
      setActive(active + 1);
    } else {
      setActive(1);
    }
  }

  function handlePrev() {
    if (active === 1) {
      setActive(divs.length);
    } else {
      setActive(active - 1);
    }
  }

  return (
    <body>
      <Header />

      <div className="slideshow-container">
        <div className="vertical-center">
          {divs.map((el) => (
            <div
              className={`slide ${active === el.id ? "" : "none"}`}
              key={el.id}
            >
              <div className="number">
                <p id="text">{`${el.id}/${divs.length}`}</p>
              </div>
              <img src={el.src} alt={`Photo ${el.id}`} className="responsive" />
            </div>
          ))}
          <a className="prev" onClick={handlePrev}>
            <span class="span">&#10094;</span>
          </a>
          <a className="next" onClick={handleNext}>
            <span class="span">&#10095;</span>
          </a>
          <div class="dot-container">
            {divs.map((el) => (
              <>
                <div className={`dot ${active === el.id ? "dot-active" : ""}`} key={el.id} onClick={()=> setActive(el.id)}></div>
              </>
            ))}
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
