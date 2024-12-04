import React from "react";
import style from "./Navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap icons

function Navbar({ isDarkMode, toggleDarkMode }) {
  return (
    // <header
    //   id="header"
    //   className={`fixed-top ${style.headertransparent} ${style.header1}`}
    //   style={{
    //     position: "relative",
    //     marginBottom: "0", 
    //     paddingBottom: "0", 
    //   }}
    // >
      <div className="container d-flex align-items-center justify-content-between" style={{ paddingBottom: "0",  }}>
        <div className={style.logo}>
          <h1>
            <img src="image.png" alt="nav" />
          </h1>
          
        </div>

        <nav id="navbar" className={style.navbar}>
          <ul>
            <li>
              <button
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: isDarkMode ? "#333" : "#f9f9f9",
                  border: "2px solid",
                  borderColor: isDarkMode ? "#444" : "#ddd",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onClick={toggleDarkMode}
                className="dark-mode-toggle"
              >
                {isDarkMode ? (
                  <i
                    className="bi bi-sun-fill"
                    style={{ color: "#ffd700", fontSize: "24px" }}
                  ></i>
                ) : (
                  <i
                    className="bi bi-moon-stars-fill"
                    style={{ color: "#4b4b96", fontSize: "24px" }}
                  ></i>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    // </header>
  );
}

export default Navbar;
