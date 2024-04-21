import styles from "./Profil.module.scss";
import AboutMe from "./AboutMe.jsx";
import Formation from "./Formation.jsx";
import Experience from "./Experience.jsx";

function Profil(json) {
  return (
    <div id="profil" className={`${styles.container} `}>
      <AboutMe info={json.dataPersonnel.info} />
      <section className={`${styles.timeline}`}>
        <div className={`${styles.timelineRow}`}>
          <Formation info={json.dataPersonnel.info} />
          {/* <Experience info={json.dataPersonnel.info} /> */}
        </div>
      </section>
    </div>
  );
}

export default Profil;
