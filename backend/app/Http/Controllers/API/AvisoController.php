<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\aviso;
Use Log;

class AvisoController extends Controller
{
    // https://carbon.now.sh/
    public function getAll(){
      $data = aviso::get();
      return response()->json($data, 200);
    }

    public function create(Request $request){
      $data['titulo'] = $request['titulo'];
      $data['nota'] = $request['nota'];
      $data['estado'] = $request['estado'];
      aviso::create($data);
      return response()->json([
          'message' => "Successfully created",
          'success' => true
      ], 200);
    }

    public function delete($id){
      $res = aviso::find($id)->delete();
      return response()->json([
          'message' => "Successfully deleted",
          'success' => true
      ], 200);
    }

    public function get($id){
      $data = aviso::find($id);
      return response()->json($data, 200);
    }

    public function update(Request $request,$id){
        $data['titulo'] = $request['titulo'];
        $data['nota'] = $request['nota'];
        $data['estado'] = $request['estado'];
      aviso::find($id)->update($data);
      return response()->json([
          'message' => "Successfully updated",
          'success' => true
      ], 200);
    }
}
