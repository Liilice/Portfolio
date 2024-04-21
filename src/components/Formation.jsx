import SmallDiv from "./SmallDiv";
import styles from "./Profil.module.scss";

function Formation(json) {
  return (
    <div className={`${styles.timelineColumn}`}>
      <h2>Formation</h2>
      <p
        style={{
          color: "white",
          paddingBottom: "2rem",
        }}
      >
        Apprendre, c'est se donner à fond pour évoluer, c'est avoir une soif
        insatiable de connaissances et de nouvelles expériences.
      </p>
      <div className={`${styles.timelineBox}`}>
        <div className={`${styles.timelineContent}`}>
          <SmallDiv info={json.info.formations} />
        </div>
        <div className={`${styles.timelineContent}`}>
          <SmallDiv info={json.info.diplomes} />
        </div>
      </div>
    </div>
  );
}

export default Formation;
