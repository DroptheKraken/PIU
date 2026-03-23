import { styles } from "../styles/appStyles";

export const HomePage = () => {
  return (
    <div>
      <h2 style={styles.pageTitle}>Bine ai venit!</h2>
      <p style={styles.text}>
        Aceasta este o aplicație simplă pentru gestionarea unei colecții de cărți.
        Folosește meniul de sus pentru a naviga între pagini.
      </p>
      <div style={styles.card}>
        <h3 style={{ margin: "0 0 8px 0" }}>Ce poți face:</h3>
        <p style={styles.text}>• Vezi lista de cărți din colecție</p>
        <p style={styles.text}>• Adaugă cărți noi prin formular</p>
        <p style={styles.text}>• Navighează între pagini</p>
      </div>
    </div>
  );
}
