<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response|\Inertia\Response|\Inertia\ResponseFactory
     */
    public function index()
    {
        return  inertia('Company/Index', [
            'companies' => Company::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response|\Inertia\Response|\Inertia\ResponseFactory
     */
    public function create()
    {
        return inertia('Company/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return RedirectResponse
     */
    public function store(Request $request)
    {
        if(!is_null($this->validateInput($request->toArray())))
        {
            return $this->validateInput($request->toArray());
        }

        $company = Company::create($this->getModelAttribute($request->toArray()));

        if(!empty($request['logo'])){
            uploadBase64Image($company, 'company-logo', $request['logo'], true);
        }

        return redirect()->route('companies.index')->with(['status' => 'Operation Complete successful']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Company $company
     * @return \Inertia\Response
     */
    public function edit(Company $company): \Inertia\Response
    {
        return inertia('Company/Edit', ['company' => $company]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Company $company
     * @return RedirectResponse
     */
    public function update(Request $request, Company $company): RedirectResponse
    {
        if(!is_null($this->validateInput($request->toArray())))
        {
            return $this->validateInput($request->toArray());
        }

        $company->update($this->getModelAttribute($request->toArray()));

        if(!empty($request['logo'])){
            uploadBase64Image($company, 'company-logo', $request['logo'], true);
        }

        return redirect()->route('companies.index')->with(['status' => 'Operation Complete successful']);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Company $company
     * @return RedirectResponse
     */
    public function destroy(Company $company): RedirectResponse
    {
        if(!is_null($company)) {
            $company->delete();
        }

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function validateInput(array $args)
    {
        $validator =  Validator::make($args,[
            'email' => ['required', 'email', 'string', 'max:255'],
            'name' => ['required','string', 'max:255'],
            'code_name' => ['required','string', 'max:255', 'unique:companies,code_name'],
            'phone' => ['required','string', 'max:255'],
            'currency' => ['required','string', 'max:3'],
            'tax_number' => ['required', 'string', 'max:255'],
            'address' => ['required', 'string', 'max:255'],
            'is_active' => ['required', 'bool'],
        ]);

        if(!is_null($args['logo']))
        {
            $validator =  Validator::make($args,[
                'logo' => ['sometimes', 'base64image'],
            ]);


            if($validator->fails()) {
                return redirect()->back()->withErrors($validator);
            }
        }

        if($validator->fails()) {
            return redirect()->back()->withErrors($validator);
        }
    }

    public function getModelAttribute(array $args): array
    {
        return [
            'email' => $args['email'],
            'name' => $args['name'],
            'code_name' => $args['code_name'],
            'phone' => $args['phone'],
            'currency' => $args['currency'],
            'tax_number' => $args['tax_number'],
            'address' => $args['address'],
            'is_active' => $args['is_active'],
        ];
    }

    public function defaultCompany(Company $company)
    {
        if(!is_null($company)) {
           $user = User::find(auth()->user()->id);
            $user->forceFill([
                'current_company_id' => $company->id
            ])->save();
        }

        return inertia('Dashboard');
    }
}
