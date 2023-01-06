import { DocumentData, collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

export const saveFormData = async (
  full_name: string,
  email: string,
  birth_date: string,
  country_of_origin: string,
  collectionRef: string = "forms",
  documentName: string = full_name,
  terms_and_conditions: boolean = false
) => {
  await setDoc(doc(db, collectionRef, documentName), {
    full_name,
    email,
    birth_date,
    country_of_origin,
    terms_and_conditions
  });
};

export const getCollectionElements = async <T extends DocumentData>(): Promise<
  { value: T; id: string }[]
> => {
  const querySnapshot = await getDocs(collection(db, 'hola'));
  const documents: { value: T; id: string }[] = [];
  querySnapshot.forEach((doc) => {
    documents.push({
      value: doc.data() as T,
      id: doc.id
    });
  });
  return documents;
};
