import {
  getDownloadURL,
  uploadBytes,
  ref,
  deleteObject,
} from "firebase/storage"
import { projectStorage } from "../firebase/config"

const useStorage = () => {
  const uploadFile = async (file, fileName) => {
    try {
      const folder = file.type.split("/")[0] === "image" ? "covers" : "songs"
      const storageRef = ref(projectStorage, `${folder}/${fileName}`)

      const response = await uploadBytes(storageRef, file)
      const fullPathUrl = await getDownloadURL(response.ref)
      return fullPathUrl
    } catch (error) {
      console.log(error.message)
    }
  }

  const deleteFile = async (filePath) => {
    try {
      await deleteObject(ref(projectStorage, filePath))
    } catch (error) {
      console.log(error.message)
    }
  }

  return { uploadFile, deleteFile }
}

export default useStorage
