import styles from "./SmallDiv.module.scss";

const SmallDiv = ({ info }) => {
  return (
    <div className={`${styles.container}`}>
      <h4>
        {info.année} : {info.ecole}
      </h4>
      <ul>
        <li style={{ marginBottom: "1rem" }}>
          {info.diplome ? info.diplome : ""}
        </li>
        {info.description
          ? info.description.map((elem) => (
              <li className={`${styles.descriptions}`}>- {elem}</li>
            ))
          : ""}
        {info.competenceAcquises ? (
          <li style={{ margin: "1rem 1rem" }}>
            Compétences acquises :
            <ul>
              {info.competenceAcquises.map((elem) => (
                <li style={{ margin: "0rem 2rem" }}>- {elem}</li>
              ))}
            </ul>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};
export default SmallDiv;
