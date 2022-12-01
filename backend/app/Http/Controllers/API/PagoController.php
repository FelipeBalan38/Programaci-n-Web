<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Pago;
Use Log;

class PagoController extends Controller
{
    // https://carbon.now.sh/
    public function getAll(){
        $data = Pago::get();
        return response()->json($data, 200);
      }
  
      public function create(Request $request){
        $data['nombre'] = $request['nombre'];
        $data['nombre1'] = $request['nombre1'];
        $data['apellido'] = $request['apellido'];
        $data['apellido1'] = $request['apellido1'];
        $data['email'] = $request['email'];
        $data['periodo'] = $request['periodo'];
        $data['telefono'] = $request['telefono'];
        $data['password'] = $request['password'];
        $data['plan'] = $request['plan'];
        $data['activador'] = $request['activador'];
        Pago::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
  
      public function delete($id){
        $res = Pago::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        $data = Pago::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['nombre'] = $request['nombre'];
        $data['nombre1'] = $request['nombre1'];
        $data['apellido'] = $request['apellido'];
        $data['apellido1'] = $request['apellido1'];
        $data['email'] = $request['email'];
        $data['periodo'] = $request['periodo'];
        $data['telefono'] = $request['telefono'];
        $data['password'] = $request['password'];
        $data['plan'] = $request['plan'];
        $data['activador'] = $request['activador'];
        Pago::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}
