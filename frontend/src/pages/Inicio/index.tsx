import React from 'react';
import Busca from '../../components/Busca';

const Inicio: React.FC = () => (
    <div className="mx-auto max-w-2xl mt-4">
        <div className="font-semibold text-center text-gray-600">
            <h1 className="font-semibold text-3xl text-center text-gray-600">Intermediário do Google Books</h1>
            <p className="mt-2">Pesquise seus livros e favorite-os aqui!</p>
            <Busca />
        </div>
    </div>
)

export default Inicio;