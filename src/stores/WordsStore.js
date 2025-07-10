import { makeAutoObservable, runInAction } from "mobx";
import { createContext } from "react";

class WordsStore {
  words = [];
  loading = true;
  error = null;
  baseUrl = "https://itgirlschool.justmakeit.ru";
  initialValues = {
    english: '',
    transcription: '',
    russian: '',
  };
  constructor() {
    makeAutoObservable(this);
  }

  getWords = async () => {
    this.loading = true;
    
    try {
      const response = await fetch(`${this.baseUrl}/api/words`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      runInAction(() => {
        this.words = data;
        this.loading = false; // ✅ Завершаем загрузку в `runInAction`
      });
    } catch (error) {
      runInAction(() => {
          this.error = error.message;
          this.loading = false;
        });
    } finally {
      runInAction(() => {
        this.loading = false; // ✅ Даже при ошибке обновляем `loading`
      });
    }
  };

  addWord = async (newWord) => {
    try {
      if (!newWord.english || !newWord.transcription || !newWord.russian) {
        throw new Error("Все поля должны быть заполнены!")
      }
      const response = await fetch(`${this.baseUrl}/api/words/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWord),
      });
      const data = await response.json();

      runInAction(() => {
        this.words.unshift(data);
        this.error = null;
      });
    } catch (error) {
      runInAction(() => {
        this.error = error.message;
      });
    }
  };

  updateWord = async (updatedWord) => {
  try {
    if (!updatedWord.english || !updatedWord.transcription || !updatedWord.russian) {
      throw new Error("Все поля должны быть заполнены!");
    }
    
    const response = await fetch(`${this.baseUrl}/api/words/${updatedWord.id}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedWord),
    });

    const data = await response.json();

    runInAction(() => {
      this.words = this.words.map((word) =>
        word.id === updatedWord.id ? data : word
      );
      this.error = null;
    });
  } catch (error) {
    runInAction(() => {
      this.error = error.message;
    });
    console.error("Ошибка при обновлении слова:", error.message);
  }
  }

  deleteWord = async (id) => {
    try {
      await fetch(`${this.baseUrl}/api/words/${id}/delete`, {
      method: "POST",
      });
      runInAction(() => {
        this.words = this.words.filter((word) => word.id !== id);
      });
    } catch (error) {
      runInAction(() => {
        this.error = error.message;
      });
    }
  };
}

const wordsStore = new WordsStore();

export default wordsStore;
export const WordsStoreContext = createContext(wordsStore);