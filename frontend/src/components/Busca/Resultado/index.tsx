import React from 'react';
import { FiExternalLink, FiHeart } from 'react-icons/fi';
import { VolumeInfoDTO } from '../../../dtos/BookDTO';
import { useFavorito } from '../../../hooks/favorito';

interface IResultadoItem {
    id: string;
    volumeInfo: VolumeInfoDTO
}

const Resultado: React.FC<IResultadoItem> = ({id,volumeInfo }) => {
    const item = {
        id,
        volumeInfo
    }
    const { favoritos, delFavorito, addFavorito } = useFavorito();

    return (
        <li className="sm:py-8">
            <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
              <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                <img className="object-cover shadow-lg rounded-lg" src={volumeInfo?.imageLinks?.thumbnail} alt={volumeInfo.title} />
              </div>
              <div className="sm:col-span-2">
                <div className="space-y-4">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>{volumeInfo.title} {volumeInfo.pageCount && <i className="font-normal text-gray-400">
                        - {volumeInfo.pageCount} Páginas</i>}
                    </h3>
                    <p className="text-indigo-600">{volumeInfo.publisher}</p>
                  </div>
                  <div className="text-lg">
                    <p className="text-gray-500 text-left text-sm font-normal overflow-hidden overflow-clip h-64">
                        {volumeInfo.description ? volumeInfo.description : <i>Este livro não possui descrição</i>}
                    </p>
                  </div>
                  <ul className="flex space-x-5 list-none place-content-center">
                    <li>
                    {favoritos.find((e) => e.bookId === id)
                            ? (
                                <button type="button" className="outline-none focus:outline-none" onClick={() => delFavorito(id)}>
                                    <FiHeart
                                        size={32}
                                        className="text-red-500 transition fill-current hover:animate-ping" />
                                </button>
                            )
                            : (
                                <button type="button" className="outline-none focus:outline-none" onClick={() => addFavorito(item)}>
                                    <FiHeart
                                        size={32}
                                        className="hover:text-red-500 transition" />
                                </button>
                            )}
                    </li>
                    <li>
                      <a
                      href={volumeInfo.previewLink}
                      target="_blank"
                      rel="noopener norefeffer"
                      className="shadow flex place-items-center bg-white font-semibold py-1 ml-4 px-4 rounded-lg text-gray-600 hover:bg-gray-100 transition">
                          Visualizar
                          <FiExternalLink size={18} className="ml-2" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
    )
}

export default Resultado;