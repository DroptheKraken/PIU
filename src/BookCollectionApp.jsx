import { useEffect, useState } from "react";
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import { styles } from "./styles/appStyles";
import { HomePage } from "./pages/HomePage";
import { BooksPage } from "./pages/BooksPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "books"),
      (snapshot) => {
        setBooks(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      },
      (error) => {
        console.error("Firestore read error:", error.message);
      }
    );
    return unsub;
  }, []);

  const addBook = async (newBook) => {
    await addDoc(collection(db, "books"), newBook);
  };

  const menuItems = [
    { key: "home", label: "Acasă" },
    { key: "books", label: "Cărți" },
    { key: "about", label: "Despre" },
    { key: "contact", label: "Contact" },
  ];

  const pages = {
    books: <BooksPage books={books} onAddBook={addBook} />,
    about: <AboutPage />,
    contact: <ContactPage />,
  };

  const renderPage = () => pages[currentPage] ?? <HomePage />;

  return (
    <div style={styles.app}>
      <nav style={styles.nav}>
        <span style={styles.logo}>Colecția Mea</span>
        <div style={styles.navLinks}>
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setCurrentPage(item.key)}
              style={{
                ...styles.navLink,
                ...(currentPage === item.key ? styles.navLinkActive : {}),
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <main style={styles.main}>{renderPage()}</main>
    </div>
  );
};

export default App;
