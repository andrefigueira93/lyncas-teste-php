import React, { useEffect, useState } from 'react'
import { useApi } from '../../hooks/useApi';
import Resultado from './Resultado';
import Skeleton from 'react-loading-skeleton';
import BookDTO from '../../dtos/BookDTO';

const Busca: React.FC = () => {

  const [termo, setTermo] = useState('');
  const [resultados, setResultados] = useState<BookDTO[]>([]);
  const [buscando, setBuscando] = useState(false);

  const { data } = useApi(
    `google-books?termos=${termo}`,
  );

  function handlePesquisar(text: string): void {
    setTermo(text);
    text.length > 0 ? setBuscando(true) : setBuscando(false)
  }

  useEffect(() => {
    data && setResultados(data.items) && setBuscando(false);
  }, [data]);

  return (
    <div>
      <label className="sr-only">Pesquise aqui pelo o livro desejado</label>
      <input
        id="Busca"
        type="text"
        onChange={(e) => handlePesquisar(e.target.value)}
        className="shadow-sm focus:ring-blue-400 focus:border-blue-400 block w-full sm:text-sm border-gray-300 rounded-md mt-4"
        placeholder="Pesquise seu livro do GoogleBooks =D"
      />
      <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 lg:gap-x-8 lg:space-y-0">
        {
          buscando && !resultados
            ? (
              <div className="w-full">
                <Skeleton height="10rem" count={5} />
              </div>
            )
            : resultados && resultados.map((e) => <Resultado key={e.id} id={e.id} volumeInfo={e.volumeInfo} />)
        }
      </ul>
    </div>
  )

}

export default Busca;