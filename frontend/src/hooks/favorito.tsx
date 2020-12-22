import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import BookDTO, {VolumeInfoDTO} from '../dtos/BookDTO';
import api from '../services/api';
import { useToast } from './toast';
import { useApi } from './useApi';

interface IFavorito {
    userId: {
        [name: string]: any;
    };
    bookId: string;
    volumeInfo: VolumeInfoDTO;
}

interface FavoritoContextData {
    loadFavoritos(): IFavorito[];
    addFavorito(book: BookDTO): void;
    delFavorito(book: string): void;
    favoritos: IFavorito[]
}

const FavoritoContext = createContext<FavoritoContextData>({} as FavoritoContextData);

const FavoritoProvider: React.FC = ({ children }) => {
    const [favoritos, setFavoritos] = useState<IFavorito[]>([]);
    const [cookies] = useCookies();
    
    const userId = cookies['lyncas:user'];

    const {addToast} = useToast();

    const loadFavoritos = useCallback(() => {
        return favoritos
    }, [favoritos]);

    const { data } = useApi(`http://127.0.0.1:8000/api/favourite-books/${userId}`)

    useEffect(() => {
        data && setFavoritos(data);
    }, [data])

    const addFavorito = useCallback(
        (book: BookDTO) => {
            const favorito = {
                bookId: book.id,
                userId,
                volumeInfo: book.volumeInfo
            };
            setFavoritos((favoritos) => [...favoritos, favorito]);

            api.post('http://127.0.0.1:8000/api/favourite-books', favorito)

            addToast({
                title: `O livro ${book.volumeInfo.title} foi adicionado aos seus favoritos!`,
                type: 'success'
            })
        },
        [userId, addToast],
    );

    const delFavorito = useCallback((id: string) => {
        const livro = favoritos.find((e) => e.bookId === id);
        setFavoritos((state) => state.filter((favorito) => favorito.bookId !== id))
        api.delete(`http://127.0.0.1:8000/api/favourite-books/${id}?userId=${userId}`)
        .then(() => {
            addToast({
                title: `O livro ${livro?.volumeInfo.title} foi removido dos seus favoritos!`,
                type: 'success'
            })
        })
        .catch((err) => {
            addToast({
                title: err,
                type: 'error'
            })
        });
    }, [addToast, favoritos, userId]);

    return (
        <FavoritoContext.Provider value={{ loadFavoritos, addFavorito, delFavorito, favoritos }}>
            {children}
        </FavoritoContext.Provider>
    );
}

function useFavorito(): FavoritoContextData {
    const context = useContext(FavoritoContext);

    if (!context) {
        throw new Error('useFavorito must be used within a FavoritoProvider');
    }

    return context;
}

export { FavoritoProvider, useFavorito } 