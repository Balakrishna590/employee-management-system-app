import { catchError, map, Observable } from "rxjs"
import { HttpService } from "./HttpService"
import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Title } from "@angular/platform-browser";
import { fetchAllManagerEmployeesUrl } from "../../configs/web-properties.config";

@Injectable({
    providedIn: 'root'
})
export class ManagerDataService extends HttpService {

    constructor(
        private http: HttpClient,
        protected title: Title
    ) {
        super(title);
    }

    getAllManagerEmployees(managerId: any): Observable<any> {
        let paramMap = new Map<string, string>();
        paramMap.set("managerId", managerId);
        return this.http.get(fetchAllManagerEmployeesUrl, {
            observe: "response",
            headers: this.addRequestHttpHeader(),
            params: this.addRequestHttpParams(paramMap),
        }).pipe(map(this.extractData), catchError(this.handleError))
    }
}
