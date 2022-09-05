<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Book::orderBy('id' ,'DESC')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $book=new Book();
        $book->title= $request->title;
        $book->author= $request->author;
        $book->save();
        return response()->json(["sms"=>"book created"]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $book=Book::find($id);
        if(!empty($book)){
            
            return  $book;
        }else{
            return response()->json(["sms"=>"book not found"]);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $book=Book::find($id);
        $book->title= $request->title;
        $book->author= $request->author;
        $book->save();
        return response()->json(["sms"=>"book updated"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $book=Book::where("id", $id);
        if(!empty($book)){
            $book->delete();
            return response()->json(["sms"=>"book deleted"]);
        }      
    }
}