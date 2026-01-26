import { Injectable } from "@angular/core";
import { MessageService, ToastMessageOptions } from 'primeng/api';

export interface ToastMessage extends ToastMessageOptions {

}

@Injectable({
    providedIn: "root"
})
export class ToastMessageService {

    constructor(private messageService: MessageService) { }

    showSuccess() {
        this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Employee saved successfully'
        });
    }

    showError() {
        this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Something went wrong'
        });
    }

}