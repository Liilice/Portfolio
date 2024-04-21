import SmallDiv from "./SmallDiv";
import styles from "./Profil.module.scss";

function Experience(json) {
  return (
    <div className={`${styles.timelineColumn}`}>
      <h2>Expérience professionnelle</h2>
      <p style={{ color: "white", paddingBottom: "2rem" }}>
        Avoir une expérience pro, c'est connaître les exigences des missions à
        réaliser, respecter les modalités du monde du travail et... grandir au
        contact des clients !
      </p>
      <div className={`${styles.timelineBox}`}>
        <div className={`${styles.timelineContent}`}>
          <SmallDiv info={json.info.expériencesProfessionnelles} />
        </div>
      </div>
    </div>
  );
}
export default Experience;
