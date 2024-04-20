import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Formulaire from "./Formulaire.jsx";
import cv from "../assets/cv/Alice_CV.pdf";
import styles from "./ContactDiv.module.scss";
function ContactDiv(info) {
  const coordonnées = info.dataPersonnel.info.coordonnées;
  return (
    <div className={`${styles.container}`} id="contact">
      <div>
        <h2>CONTACT</h2>
        <div className="underline"></div>
        <ul>
          <li>
            <PhoneIcon
              sx={{
                fontSize: 30,
                color: "rgb(150, 122, 236)",
                paddingRight: "1rem",
              }}
            />
            {coordonnées.phone}
          </li>
          <li>
            <EmailIcon
              sx={{
                fontSize: 30,
                color: "rgb(150, 122, 236)",
                paddingRight: "1rem",
              }}
            />
            {coordonnées.Email}
          </li>
          <li>
            <LocationOnIcon
              sx={{
                fontSize: 30,
                color: "rgb(150, 122, 236)",
                paddingRight: "1rem",
              }}
            />
            {coordonnées.Postal}
          </li>
          <li>
            <a
              href={cv}
              target="_blank"
              rel="noreferrer"
              download
              style={{
                maxWidth: "max-content",
              }}
            >
              <button>Mon CV</button>
            </a>
          </li>
        </ul>
      </div>
      <Formulaire />
    </div>
  );
}
export default ContactDiv;
