import { DocumentData, collection, getDocs, doc, addDoc, DocumentReference } from 'firebase/firestore';
import { db } from '../config/firebase';
import type { IFormData } from '../../types';

export const saveFormData = async(
  full_name: string,
  email: string,
  birth_date: string,
  country_of_origin: string,
  terms_and_conditions: boolean
  ): Promise<boolean> => {
  const collectionRef = collection(db, 'forms');
  const formData: IFormData = {
    full_name,
    birth_date,
    country_of_origin,
    email,
    terms_and_conditions
  };

  try {
    await addDoc(collectionRef, formData);
    return true
  } catch (error) {
    console.error(error)
    return false
  }
};

export const getCollectionElements = async <T extends DocumentData>(collectionRef: string = "forms"): Promise<
  { value: T; id: string }[]
> => {
  const querySnapshot = await getDocs(collection(db, collectionRef));
  const documents: { value: T; id: string }[] = [];
  querySnapshot.forEach((doc) => {
    documents.push({
      value: doc.data() as T,
      id: doc.id
    });
  });
  return documents;
};
