import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import styles from "./Navigation.module.scss";

function Navigation() {
  return (
    <div className={`${styles.position}`}>
      <ul className={`${styles.container} `}>
        <li>
          <a href="#">
            <HomeOutlinedIcon className={`${styles.icone}`} />
          </a>
        </li>
        <li>
          <a href="#profil">
            <PermIdentityOutlinedIcon className={`${styles.icone}`} />
          </a>
        </li>
        <li>
          <a href="#competences">
            <PsychologyIcon className={`${styles.icone}`} />
          </a>
        </li>
        <li>
          <a href="#project">
            <WorkOutlineIcon className={`${styles.icone}`} />
          </a>
        </li>
        <li>
          <a href="#contact">
            <ContactMailIcon className={`${styles.icone}`} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
