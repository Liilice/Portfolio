import styles from "./CompetenceDiv.module.scss";
import front from "../assets/images/front.png";
import back from "../assets/images/back.png";
import git from "../assets/images/git.png";

function CompetenceDiv(info) {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.resize}`}>
        {info.info.FrontEnd ? <img src={front} alt="Front-End" /> : ""}
        {info.info.BackEnd ? <img src={back} alt="Back-End" /> : ""}
        {info.info.Autres ? <img src={git} alt="Autres outils" /> : ""}
      </div>
      {info.info.FrontEnd ? <h3>FRONT-END</h3> : ""}
      {info.info.BackEnd ? <h3>BACK-END</h3> : ""}
      {info.info.Autres ? <h3>AUTRES OUTILS</h3> : ""}
      <ul>
        {info.info.BackEnd
          ? info.info.BackEnd.map((elem) => <li>-{elem}</li>)
          : ""}
        {info.info.FrontEnd
          ? info.info.FrontEnd.map((elem) => <li>-{elem}</li>)
          : ""}
        {info.info.Autres
          ? info.info.Autres.map((elem) => <li>-{elem}</li>)
          : ""}
      </ul>
    </div>
  );
}
export default CompetenceDiv;
