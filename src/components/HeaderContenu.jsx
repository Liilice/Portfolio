import styles from "./HeaderContenu.module.scss";
import profil from "../assets/images/profil.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
const HeaderContenu = ({ info }) => {
  return (
    <div className={`${styles.container}`} id="resume">
      <div className={`${styles.infoContainer}`}>
        <h3>Bonjour, je suis {info.info.name}</h3>
        <br />
        <p>
          Développeuse web fullstack en formation à la Web@cademie d'Epitech
          PARIS
          <br /> <br />
          Niveau technique en Anglais, Bilingue en chinois
          <br /> <br />
          RECHERCHE ALTERNANCE Septembre 2024 14 mois
          <br />
          (3 semaines en entreprise / 1 semaine en formation)
          <br /> <br />
          Mon métier : {info.info.accroche}
        </p>
        <br />
        <ul className="d-flex">
          <li>
            <a
              href="https://www.linkedin.com/in/alicezhenglilice/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className={`${styles.icone}`} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Liilice"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className={`${styles.icone}`} />
            </a>
          </li>
        </ul>
        <br />

        <ul className={`${styles.buttonContainer}`}>
          <li>
            <a
              href="#profil"
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <button>
                Profil <PermIdentityOutlinedIcon className={`${styles.icon}`} />
              </button>
            </a>
          </li>
          <li>
            <a
              href="#competences"
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <button>
                Compétences <PsychologyIcon className={`${styles.icon}`} />
              </button>
            </a>
          </li>
          <li>
            <a
              href="#project"
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <button>
                Portfolio <WorkOutlineIcon className={`${styles.icon}`} />
              </button>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <button>
                Contact <ContactMailIcon className={`${styles.icon}`} />
              </button>
            </a>
          </li>
        </ul>
      </div>
      <img src={profil} alt="profil" />
    </div>
  );
};

export default HeaderContenu;
