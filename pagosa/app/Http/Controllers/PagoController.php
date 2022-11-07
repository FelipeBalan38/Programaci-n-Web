<?php

namespace App\Http\Controllers;
use App\Models\Pagos;
use Illuminate\Http\Request;

class PagoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pagos = Pagos::latest()->paginate(10);
        return [
            "status" => 1,
            "data" => $pagos
        ];
    }
 
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }
 
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'question' => 'required',
        ]);
 
        $pago = Pagos::create($request->all());
        return [
            "status" => 1,
            "data" => $pago
        ];
    }
 
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pagos  $pago
     * @return \Illuminate\Http\Response
     */
    public function show(Pagos $pago)
    {
        return [
            "status" => 1,
            "data" =>$pago
        ];
    }
 
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pagos  $pago
     * @return \Illuminate\Http\Response
     */
    public function edit(Pagos $pago)
    {
        //
    }
 
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pagos  $pago
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pagos $pago)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'question' => 'required',
        ]);
 
        $pago->update($request->all());
 
        return [
            "status" => 1,
            "data" => $pago,
            "msg" => "Pago updated successfully"
        ];
    }
 
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pagos  $pago
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pagos $pago)
    {
        $pagos->delete();
        return [
            "status" => 1,
            "data" => $pago,
            "msg" => "Pago deleted successfully"
        ];
    }
}
