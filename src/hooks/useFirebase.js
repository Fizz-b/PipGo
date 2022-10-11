import React, { useState, useEffect, Dispatch } from "react";
import { db } from "../config/firebase";

import { setDoc } from "@firebase/firestore";



const useFirebase = (
  collection,
  condition,
  pagination,

) => {
  const [documents, setDocuments] = useState([]);

      useEffect(() => {
    let collectionRef = db
      .collection(collection)
      .orderBy("createdAt", pagination.type)
      .limit(pagination.size);

   

    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        // reset documents data
        setDocuments([]);
        return;
      }

      collectionRef = collectionRef.where(
        condition.fieldName,
        condition.operator,
        condition.compareValue,
      );

    
    }
  
    const unsubscribe = collectionRef.onSnapshot((snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      /*
     loadMore ? setDocuments( (prevState) => [...prevState,documents] )
     : setDocuments(documents); */
      setDocuments(documents);
    });
  
    return unsubscribe;
  
  }, [collection,condition]);

  return documents;
};
export default useFirebase;
