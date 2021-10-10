import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';
import { collection, orderBy, onSnapshot, query } from "firebase/firestore";

const useCollection = (collectionName) => {

  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => { 
    // register the firestore collection reference
    let collectionRef = query(collection(projectFirestore, collectionName), orderBy('createdAt'));

    const unsub = onSnapshot(collectionRef, (snap) => {
      let results = [];
      snap.forEach(doc => {
        // must wait for the server to create the timestamp & send it back
        doc.data().createdAt && results.push({...doc.data(), id: doc.id});
      });
      
      // update values
      setDocuments(results);
      setError(null);
    }, err => {
      console.log(err.message);
      setDocuments(null);
      setError('could not fetch the data');
    })

    return () => unsub();

    // eslint-disable-next-line
  }, [])

  return { error, documents };
}

export default useCollection;
