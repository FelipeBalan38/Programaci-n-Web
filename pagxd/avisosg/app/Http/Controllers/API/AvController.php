<?php

namespace App\Http\Controllers\API;
Use App\Models\aviso;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AvController extends Controller
{
    // https://carbon.now.sh/
    public function getAll(){
      $data = aviso::get();
      return response()->json($data, 200);
    }

    public function create(Request $request){
      $data['titulo'] = $request['titulo'];
      $data['nota'] = $request['nota'];
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
      aviso::find($id)->update($data);
      return response()->json([
          'message' => "Successfully updated",
          'success' => true
      ], 200);
    }
}
