import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Formulaire.module.scss";

function Formulaire() {
  const [object, setObject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const serviceID = "service_o4y6die";
    const templateID = "template_0nvxtui";
    const publicKey = "3VL-dlv_qFcwzWUtX";

    const templateParams = {
      to_name: "Alice Zheng",
      from_name: email,
      for_object: object,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("ok ", response);
        setEmail("");
        setObject("");
        setMessage("");
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };

  return (
    <form onSubmit={submit}>
      <h2>Contactez-moi</h2>
      <label className={`${styles.supperposition}`} htmlFor="email">
        Email
      </label>
      <input
        className={`${styles.test2}`}
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="object" className={`${styles.supperposition}`}>
        Objet
      </label>
      <input
        type="text"
        id="object"
        name="object"
        value={object}
        onChange={(e) => setObject(e.target.value)}
      />
      <label htmlFor="message" className={`${styles.superposTextarea}`}>
        Message
      </label>
      <textarea
        name="message"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <input type="submit" value="Envoyez  !" className={`${styles.submit}`} />
    </form>
  );
}

export default Formulaire;
