import { useState, useEffect, useContext } from "react";
import CreateWordForm from "../createWord/CreateWordForm";
import styles from "../mainPage/MainPage.module.css";
import EditableWord from "../editableWord/EditableWord";
import { Box, CircularProgress } from "@mui/material";
import { WordsStoreContext } from "../../stores/WordsStore";
import { observer } from "mobx-react";

const Words = observer(() => {
  const store = useContext(WordsStoreContext);

  const [error, setError] = useState(null);
  const [inputWord, setInputWord] = useState(store.initialValues);

  useEffect(() => {
    store.getWords();
  }, [store]);

  return (
    <>
      <div>
        <CreateWordForm
          inputWord={inputWord}
          setWord={setInputWord}
          error={error}
          setError={setError}
        />
        {error && <div className={styles.errorMessage}>{error}</div>}

        {store.loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <CircularProgress />
          </Box>
        ) : (
          <table className={styles.table}>
            <tbody>
              {store.words.map((word) => (
                <EditableWord key={word.id} word={word} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
});

export default Words;
