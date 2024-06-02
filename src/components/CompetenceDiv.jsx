import styles from "./CompetenceDiv.module.scss";
import front from "../assets/images/front.png";
import back from "../assets/images/back.png";
import git from "../assets/images/git.png";
import bdd from "../assets/images/BDD.png";
import framework from "../assets/images/framwork.png";
import mern from "../assets/images/mern.png";

function CompetenceDiv(info) {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.resize}`}>
        {info.info.FrontEnd ? <img src={front} alt="Front-End" /> : ""}
        {info.info.BackEnd ? <img src={back} alt="Back-End" /> : ""}
        {info.info.Framework ? <img src={framework} alt="Framework" /> : ""}
        {info.info.MernStack ? <img src={mern} alt="MernStack" /> : ""}
        {info.info.BaseDonnées ? <img src={bdd} alt="Base de données" /> : ""}
        {info.info.Autres ? <img src={git} alt="Autres outils" /> : ""}
      </div>
      {info.info.FrontEnd ? <h3>FRONT-END</h3> : ""}
      {info.info.BackEnd ? <h3>BACK-END</h3> : ""}
      {info.info.Framework ? <h3>Framework</h3> : ""}
      {info.info.MernStack ? <h3>MernStack</h3> : ""}
      {info.info.BaseDonnées ? <h3>Base de données</h3> : ""}
      {info.info.Autres ? <h3>AUTRES OUTILS</h3> : ""}
      <ul>
        {info.info.BackEnd
          ? info.info.BackEnd.map((elem) => <li>{elem}</li>)
          : ""}
        {info.info.FrontEnd
          ? info.info.FrontEnd.map((elem) => <li>{elem}</li>)
          : ""}
        {info.info.MernStack
          ? info.info.MernStack.map((elem) => <li>{elem}</li>)
          : ""}
        {info.info.Framework
          ? info.info.Framework.map((elem) => <li>{elem}</li>)
          : ""}
        {info.info.BaseDonnées
          ? info.info.BaseDonnées.map((elem) => <li>{elem}</li>)
          : ""}
        {info.info.Autres
          ? info.info.Autres.map((elem) => <li>{elem}</li>)
          : ""}
      </ul>
    </div>
  );
}
export default CompetenceDiv;
