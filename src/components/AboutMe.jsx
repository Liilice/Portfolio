import profil from "../assets/images/profil.png";
import styles from "./Profil.module.scss";

function AboutMe(json) {
  return (
    <>
      <h2>PROFIL</h2>
      <div className="d-flex mb-30">
        <img src={profil} alt="profil" />
        <div className="d-flex flex-column">
          <h2>A propos de moi</h2>
          <ul className={`${styles.containerDescription}`}>
            {json.info.présentation.map((elem) => (
              <li>{elem}</li>
            ))}
          </ul>
          <a href="#contact">
            <button>Contactez-moi</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
