import React, { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';


interface UserContextType {
  userId: string | null;
  setUserId: (userId: string | null) => void;
  listId: string | null;
  listIdStatus: 'idle' | 'loading' | 'found' | 'not_found';
  setListId: (id: string | null) => void;
  setListIdStatus: (status: 'idle' | 'loading' | 'found' | 'not_found') => void;
  resetUser: () => void;
}

export const UserContext = createContext<UserContextType>({
  userId: null,
  setUserId: () => {},
  listId: null,
  listIdStatus: 'idle',
  setListId: () => {},
  setListIdStatus: () => {},
  resetUser: () => {}
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [listId, setListId] = useState<string | null>(null);
  const [listIdStatus, setListIdStatus] = useState<'idle' | 'loading' | 'found' | 'not_found'>('idle');

  const resetUser = () => {
    setUserId(null);
    setListId(null);
    setListIdStatus('idle');
  };

  useEffect(() => {
    const fetchLists = async () => {
      setListIdStatus('loading');
      const listas = await getDocs(collection(db, "listas"));

      const listaUsuario = listas.docs.find((doc: any) => {
        const participantes = doc.data().participantes;
        return participantes && participantes.find((participanteId: string) => participanteId === userId);
      });

      if (listaUsuario) {
        setListId(listaUsuario.id);
        setListIdStatus('found');
      } else {
        setListId(null);
        setListIdStatus('not_found');
      }
    };

    if (userId && listIdStatus === 'idle') {
      fetchLists();
    }
  }, [userId, listIdStatus]);

  return (
    <UserContext.Provider value={{ userId, setUserId, listId, listIdStatus, setListId, setListIdStatus, resetUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};