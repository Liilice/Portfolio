import styles from "./CompetenceDiv.module.scss";
import CompetenceDiv from "./CompetenceDiv.jsx";
function Competence(info) {
  return (
    <div id="competences" className={`${styles.competenceContainer}`}>
      <h2>COMPETENCES</h2>
      <div className={`${styles.position}`}>
        <CompetenceDiv info={info.dataPersonnel.info.BackEnd} />
        <CompetenceDiv info={info.dataPersonnel.info.FrontEnd} />
        <CompetenceDiv info={info.dataPersonnel.info.Framework} />
        <CompetenceDiv info={info.dataPersonnel.info.MernStack} />
        <CompetenceDiv info={info.dataPersonnel.info.BaseDonnées} />
        <CompetenceDiv info={info.dataPersonnel.info.Autres} />
      </div>
    </div>
  );
}
export default Competence;
