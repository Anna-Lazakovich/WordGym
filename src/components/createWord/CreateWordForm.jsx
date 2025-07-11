import { Button } from "@mui/material";
import styles from "./CreateWordForm.module.css";
import { v1 } from "uuid";
import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react";
import { WordsStoreContext } from "../../stores/WordsStore";
import { useContext } from "react";

const CreateWordForm = observer(({ inputWord, setWord, error, setError }) => {
  const store = useContext(WordsStoreContext);
  const ref = useRef();

  useEffect(() => ref.current.focus(), [inputWord.english]);

  const handleChange = (e) => {
    setWord({
      ...inputWord,
      [e.target.name]: e.target.value,
    });
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isInputsNotEmpty =
      inputWord.english.trim() !== "" &&
      inputWord.transcription.trim() !== "" &&
      inputWord.russian.trim() !== "";

    if (isInputsNotEmpty) {
      const newWord = {
        id: v1(),
        ...inputWord,
        transcription: `[${inputWord.transcription}]`,
        tags: "",
        tags_json: "",
      };
      store.addWord(newWord);
      setWord(store.initialValues);
      setError(null);
    } else {
      setError("Fields are required");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        name="english"
        placeholder="English"
        required
        value={inputWord.english}
        onChange={handleChange}
        ref={ref}
        className={error ? styles.error : ""}
      />

      <input
        name="transcription"
        placeholder="Transcription"
        required
        value={inputWord.transcription}
        onChange={handleChange}
        className={error ? styles.error : ""}
      />

      <input
        name="russian"
        placeholder="Russian"
        required
        value={inputWord.russian}
        onChange={handleChange}
        className={error ? styles.error : ""}
      />

      <Button className={styles.button} type="submit" variant={"outlined"}>
        +
      </Button>
    </form>
  );
});

export default CreateWordForm;
