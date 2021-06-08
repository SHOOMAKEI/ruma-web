<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Repository\SettingsRepository;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use Jenssegers\Agent\Agent;
use Laravel\Fortify\Rules\Password;

class SettingsController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth','auth:sanctum']);
    }

    public function index(Request $request): Response
    {
        $user = User::find(auth()->user()->id);

        return Inertia::render('Profile/Index', [
            'settings' =>[
            'qrcode_svg' => ($user->two_factor_recovery_codes != null)?$user->twoFactorQrCodeSvg(): null,
            'two_factor_recovery_codes' => ($user->two_factor_recovery_codes != null)? collect(json_decode(decrypt($user->two_factor_recovery_codes), true))
                ->map(function ($code) {
                    $data['code'] = $code;
                    return $data;
                })->toArray():null
        ],
            'sessions' => $this->sessions($request)->all()
        ]);
    }

    public function updateAccountInfo(Request $request): RedirectResponse
    {
        $request->validate([
            'email' => ['required', 'string', 'email', 'max:255'],
            'username' => ['required', 'string','max:255']
        ]);

        if (auth()->user()->email != $request['email']) {
            $request->validate([
                'email' => ['unique:users']
            ]);
        }

        if (auth()->user()->username != $request['username']) {
            $request->validate([
                'username' => ['unique:users'],
            ]);
        }

        $user  = User::find(auth()->user()->id);

        $user->forceFill([
            'username' => $request['username'],
            'email' => $request['email']
        ])->save();

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function updatePassword(Request $request): RedirectResponse
    {
        $user = User::find(auth()->user()->id);

        $validator = Validator::make($request->toArray(), [
            'current_password' => ['required', 'string'],
            'password' => ['required', 'string', new Password, 'confirmed', 'regex:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/'],
        ])->after(function ($validator) use ($user, $request) {
            if (! Hash::check($request['current_password'], $user->password)) {
                $validator->errors()->add(
                    'current_password',
                    'The provided password does not match your current password.'
                );
            }
        });

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator);
        }

        $user->forceFill($request->toArray())->save();

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function toggleOTP(SettingsRepository $repository)
    {
        $repository->toggleOTP();

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function toggle2FA(SettingsRepository $repository): RedirectResponse
    {
        if (User::find(auth()->user()->id)->two_factor_recovery_codes != null) {

            $repository->disableTwoFactorAuthentication();

            return redirect()->back()->with(['status' => 'Operation Complete successful']);
        }

        $repository->enableTwoFactorAuthentication();

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function generateRecoveryCodes(): RedirectResponse
    {

        $user = User::find(auth()->user()->id);


        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }


    public function sessionsBrowser(Request $request, StatefulGuard $guard): RedirectResponse
    {
        if (! Hash::check($request->confirm_password, $request->user()->password)) {
            throw ValidationException::withMessages([
                'confirm_password' => [__('This password does not match our records.')],
            ]);
        }

        $guard->logoutOtherDevices($request->confirm_password);

        $this->deleteOtherSessionRecords($request);

        return back(303);
    }

    /**
     * Delete the other browser session records from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return void
     */
    protected function deleteOtherSessionRecords(Request $request)
    {
        if (config('session.driver') !== 'database') {
            return;
        }

        DB::table(config('session.table', 'sessions'))
            ->where('user_id', $request->user()->getAuthIdentifier())
            ->where('id', '!=', $request->session()->getId())
            ->delete();
    }


    /**
     * Get the current sessions.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return Collection
     */
    public function sessions(Request $request): Collection
    {
        if (config('session.driver') !== 'database') {
            return collect();
        }

        return collect(
            DB::table(config('session.table', 'sessions'))
                ->where('user_id', $request->user()->getAuthIdentifier())
                ->orderBy('last_activity', 'desc')
                ->get()
        )->map(function ($session) use ($request) {
            $agent = $this->createAgent($session);

            return (object) [
                'agent' => [
                    'is_desktop' => $agent->isDesktop(),
                    'platform' => $agent->platform(),
                    'browser' => $agent->browser(),
                ],
                'ip_address' => $session->ip_address,
                'is_current_device' => $session->id === $request->session()->getId(),
                'last_active' => Carbon::createFromTimestamp($session->last_activity)->diffForHumans(),
            ];
        });
    }

    /**
     * Create a new agent instance from the given session.
     *
     * @param  mixed  $session
     * @return \Jenssegers\Agent\Agent
     */
    protected function createAgent($session): Agent
    {
        return tap(new Agent, function ($agent) use ($session) {
            $agent->setUserAgent($session->user_agent);
        });
    }
}
