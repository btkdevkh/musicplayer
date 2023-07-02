import { collection, addDoc, deleteDoc, doc } from "firebase/firestore"
import { projectFirestore } from "../firebase/config"

const useDocument = () => {
  const collectionRef = collection(projectFirestore, "playlists")

  const addDocument = async (data) => {
    await addDoc(collectionRef, data)
  }

  const deleteDocument = async (id) => {
    await deleteDoc(doc(projectFirestore, "playlists", id))
  }

  return { addDocument, deleteDocument }
}

export default useDocument
