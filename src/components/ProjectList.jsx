import styles from "./ProjectList.module.scss";
import DetailsProject from "./DetailsProject.jsx";
import gitQRCode from "../assets/images/GitQRCode.png";

// <li onMouseEnter={() => printPic(item[0])}>
function ProjectList(info) {
  const arr = Object.entries(info.dataProjet);
  return (
    <div className={`${styles.container}`}>
      <h2 id="project">PORTFOLIO</h2>
      <div className={`${styles.qrcodeContainer}`}>
        <p className={`${styles.description}`}>
          Ci-dessous, quelques exemples de réalisations effectuées durant la
          formation :
        </p>
        <img src={gitQRCode} alt="github QR Code" />
      </div>
      <a href="https://github.com/Liilice" target="_blank" rel="noreferrer">
        Github
      </a>
      <ul className={`${styles.projetContainer}`}>
        {arr.map((elem) => (
          <DetailsProject json={elem} />
        ))}
      </ul>
    </div>
  );
}
export default ProjectList;
