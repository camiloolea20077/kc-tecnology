import { Injectable } from "@angular/core";
import emailjs,{ EmailJSResponseStatus } from "@emailjs/browser";

@Injectable({
    providedIn: 'root',
})

export class EmailService {
    private serviceId = 'service_7hf5cpb'
    private templateId = 'template_cmdabnn'
    private userId = 'mMmAgx5kOkxWXwk0Z';

    sendEmail(formData: any): Promise<EmailJSResponseStatus> {
    return emailjs.send(this.serviceId, this.templateId, formData, this.userId)
    }
}