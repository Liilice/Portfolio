import Battelship from "../assets/images/Battelship.png";
import Mycinema from "../assets/images/mycinema.png";
import Puissance_4 from "../assets/images/Puissance 4.png";
import Mymeetic from "../assets/images/mymeeticAccueil.png";
import Twitter from "../assets/images/twitterAccueil.png";
import Spotify from "../assets/images/spotifyAccueil.png";
import styles from "./ProjectList.module.scss";

function DetailsProject(info) {
  function srcImage(name) {
    let output;
    switch (name) {
      case "Battelship":
        output = Battelship;
        break;
      case "Mycinema":
        output = Mycinema;
        break;
      case "Puissance_4":
        output = Puissance_4;
        break;
      case "Mymeetic":
        output = Mymeetic;
        break;
      case "Twitter":
        output = Twitter;
        break;
      case "Spotify":
        output = Spotify;
        break;
      default:
        break;
    }
    return output;
  }
  return (
    <li className={`${styles.project}`}>
      <section className={`${styles.inner_carte}`}>
        <div className={`${styles.front_carte}`}>
          <h4>{info.json[1].name}</h4>
          <img src={srcImage(info.json[1].name)} alt={info.json[1].name} />
          <button>Détails</button>
        </div>
        <div className={`${styles.back_carte}`}>
          <h4>Présentation</h4>
          <p>{info.json[1].description}</p>
          <h4 className="mt-10">Compétences acquis</h4>
          <ul>
            {info.json[1].language.map((elem) => (
              <li>-{elem}</li>
            ))}
          </ul>
        </div>
      </section>
    </li>
  );
}
export default DetailsProject;
