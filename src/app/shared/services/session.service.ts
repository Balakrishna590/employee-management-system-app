import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    private _roles: string[] = [];

    get roles(): any[] {
        return this._roles ?? [];
    }

    set roles(value: any[]) {
        this._roles = Array.isArray(value) ? value : [];
    }

}