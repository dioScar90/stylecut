import { useState, useEffect } from 'react';
import { firestore } from '../lib/firebase'; // Importe a instância do Firestore do Firebase

const useFirestore = () => {
  const [data, setData] = useState(null);

  // Função para adicionar um documento ao Firestore
  const addDocument = async (collection, documentData) => {
    try {
      await firestore.collection(collection).add(documentData);
    } catch (error) {
      console.error('Error adding document:', error.message);
    }
  };

  // Função para obter dados de uma coleção
  const getCollection = async (collection) => {
    try {
      const snapshot = await firestore.collection(collection).get();
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(data);
    } catch (error) {
      console.error('Error getting collection:', error.message);
    }
  };

  useEffect(() => {
    // Exemplo: Carregar dados de uma coleção inicialmente
    getCollection('appointments');
  }, []);

  return {
    data,
    addDocument,
    getCollection,
  };
};

export default useFirestore;
