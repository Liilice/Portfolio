import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import data from "./assets/json/data_personnel.json";
import dataProjet from "./assets/json/data_project.json";
import Profil from "./components/Profil.jsx";
import ContactDiv from "./components/ContactDiv.jsx";
import ProjectList from "./components/ProjectList.jsx";
import Competence from "./components/Competence.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <>
      <Header dataPersonnel={data} />
      <Profil dataPersonnel={data} />
      <Competence dataPersonnel={data} />
      <ProjectList dataProjet={dataProjet} />
      <ContactDiv dataPersonnel={data} />
      <Navigation />
    </>
  );
}

export default App;
