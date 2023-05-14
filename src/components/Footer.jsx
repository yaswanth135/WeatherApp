import { useContext } from "react";
import AppContext from "../provider/AppContext";

function Footer() {
  const {
    app: { isDark },
  } = useContext(AppContext);
  const anchorStyle = {
    color: "#C6C6C6",
  };
  return (
    <>
      <footer className="footer">
        <a
          href="https://www.instagram.com/p/CfoixJ0vM_P/"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-brands fa-instagram"></i> <span>Instagram</span>
        </a>
      </footer>
    </>
  );
}

export default Footer;
