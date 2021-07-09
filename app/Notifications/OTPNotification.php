<?php

namespace App\Notifications;

use http\Encoding\Stream\Inflate;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Lang;

class OTPNotification extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @param string $code
     */
    public function __construct(public string $code,public bool $isPasswordResetCode = false)
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail','database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {

        if($this->isPasswordResetCode){
            return (new MailMessage)
                ->subject(Lang::get('Password Resetting Code Notification'))
                ->line('Please use the code below to Reset your Password for RUMA APP account.')
                ->line('')
                ->line('**' . $this->code . '**')
                ->line('')
                ->line('Thank you for using our application!');
        }else {
            return (new MailMessage)
                ->subject(Lang::get('OTP Code Notification'))
                ->line('Please use the code below to login to your RUMA APP account.')
                ->line('')
                ->line('**' . $this->code . '**')
                ->line('')
                ->line('Thank you for using our application!');
        }
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
