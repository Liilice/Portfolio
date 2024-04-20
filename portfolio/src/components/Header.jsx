import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import styles from "./Header.module.scss";
import HeaderContenu from "./HeaderContenu.jsx";
import logo from "../assets/images/Logo.png";

function Header(json) {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />
        {/* <NightlightOutlinedIcon sx={{ fontSize: 35 }} /> */}
      </nav>
      <HeaderContenu info={json.dataPersonnel} />
    </header>
  );
}

export default Header;
