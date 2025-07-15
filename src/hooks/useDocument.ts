import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { projectFirestore } from "../firebase/config";
import { Music } from "../types/Music";

const useDocument = () => {
  const collectionRef = collection(projectFirestore, "playlists");

  const addDocument = async (data: Music) => {
    await addDoc(collectionRef, data);
  };

  const deleteDocument = async (id: string) => {
    await deleteDoc(doc(projectFirestore, "playlists", id));
  };

  return { addDocument, deleteDocument };
};

export default useDocument;
