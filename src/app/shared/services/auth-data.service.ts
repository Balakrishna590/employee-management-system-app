import { catchError, map, Observable } from "rxjs"
import { HttpService } from "./HttpService"
import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Title } from "@angular/platform-browser";
import { securityLoginUrl } from "../../configs/web-properties.config";

@Injectable({
    providedIn: 'root'
})
export class AuthDataService extends HttpService {

    constructor(
        private http: HttpClient,
        protected title: Title
    ) {
        super(title);
    }

    userSecurityLogin(req: any): Observable<any> {
        return this.http.post(securityLoginUrl, this.addRequestBodyHeader(req), {
            observe: "response",
            headers: this.addRequestHttpHeader(),
        }).pipe(map(this.extractData), catchError(this.handleError))
    }
}
