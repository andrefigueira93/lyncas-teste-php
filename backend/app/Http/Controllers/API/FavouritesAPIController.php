<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Favourite;
use Illuminate\Http\Request;

class FavouritesAPIController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $favoritos = Favourite::all();

        return response()->json($favoritos);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $user = $request->json('userId');
        $book = $request->json('bookId');
        $volumeInfo = $request->json('volumeInfo');

        $alreadyFavourite = Favourite::where('userId', $user)
            ->where('bookId', $book)
            ->first();

        if ($alreadyFavourite)
            return response()->json(['error' => 'Whoops! Este livro faz parte dos seus favoritos!'], 400);

        $novoFavorito = Favourite::create([
            'userId' => $user,
            'bookId' => $book,
            'volumeInfo' => $volumeInfo
        ]);
        return response()->json($novoFavorito);
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $favoritos = Favourite::where('userId', $id)->get();

        return response()->json($favoritos);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  string  $bookId
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Request $request, $bookId)
    {
        $user = $request->get('userId');

        $book = Favourite::where('userId', $user)
            ->where('bookId', $bookId)
            ->first();

        if (!$book)
            return response()->json(['error' => 'Whoops! Não encontramos esse livro nos seus favoritos'], 400);

        $book->delete();
        return response()->json(['success' => 'Livro removido dos seus favoritos com sucesso!']);

    }
}
