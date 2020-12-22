import React from 'react';
import Resultado from '../../components/Busca/Resultado';
import { useFavorito } from '../../hooks/favorito';

const MeusFavoritos: React.FC = () => {
    const { favoritos } = useFavorito();

    return (
        <div className="mx-auto max-w-2xl mt-4">
            <div className="font-semibold text-center text-gray-600 mb-4">
                <h1 className="font-semibold text-3xl text-center text-gray-600">
                    Intermediário do Google Books
                </h1>
                <p className="mt-2">Aqui estão os livros que você favoritou!</p>
            </div>

            <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
                {favoritos.map((favorito) => (
                    <div key={favorito.bookId}>
                        <Resultado id={favorito.bookId} volumeInfo={favorito.volumeInfo} />
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default MeusFavoritos;