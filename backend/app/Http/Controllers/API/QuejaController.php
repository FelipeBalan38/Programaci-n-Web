<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Queja;
Use Log;

class QuejaController extends Controller
{
    //
    public function getAll(){
        $data = Queja::get();
        return response()->json($data, 200);
      }
  
      public function create(Request $request){
        $data['telf'] = $request['telf'];
        $data['mensage'] = $request['mensage'];
        $data['posprobl'] = $request['posprobl'];
        $data['estado'] = $request['estado'];

        Queja::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
      
      public function update(Request $request,$id){
        $data['telf'] = $request['telf'];
        $data['mensage'] = $request['mensage'];
        $data['posprobl'] = $request['posprobl'];
        $data['estado'] = $request['estado'];

        Queja::find($id)->update($data);
      return response()->json([
          'message' => "Successfully updated",
          'success' => true
      ], 200);
    }

      public function delete($id){
        $res = Queja::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
}
