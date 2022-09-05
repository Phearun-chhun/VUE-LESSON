<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\todo;
class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       return Todo::all();
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
         $data = new Todo();
        $data->title = $request->title;
        $data->content = $request->content;
        $data -> status = $request->status;
        $data -> save();
        return response()->json(['message' => 'todo create already']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
 
    public function show($id)
    {
        //
        $data = Todo::find($id);
         if(!empty($data)){
            return $data;
        }
        return response()->json(['message'=>'data not found']);
        
    }
    public function markAsImportant( $id)
    {
        $data = Todo::findOrFail($id);
        $data->status=1;
        $data-> save();
        return response()->json(['message' => 'mark as important already update']);
    }
    public function markAsNotImportant(Request $request, $id)
    {
        $data = Todo::findOrFail($id);
        $data->status = 0;
        $data-> save();
        return response()->json(['message' => 'mark as not important already update']);
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
        $data = Todo::find($id);
        $data->title = $request->title;
        $data->content = $request->content;
        $data-> status = $request->status;
        $data-> save();
        return response()->json(['message' => 'todo update already']);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
          $data = Todo::where('id',$id);
        if(!empty($data)){
            $data->delete();
            return response()->json(['sms'=>'todo delete']);
        }
        return response->json(['sms'=>'todo cannot delete']);
    }
}