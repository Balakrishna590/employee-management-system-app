import { catchError, map, Observable } from "rxjs"
import { HttpService } from "./HttpService"
import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Title } from "@angular/platform-browser";
import { fetchAllAssociatedEmployeesUrl, 
        getDashboardStatistics 
} from "../../configs/web-properties.config";

@Injectable({
    providedIn: 'root'
})
export class HrDataService extends HttpService {

    constructor(
        private http: HttpClient,
        protected title: Title
    ) {
        super(title);
    }

    getAllAssociatedEmployees(hrId: any): Observable<any> {
        let paramMap = new Map<string, string>();
        paramMap.set("hrId", hrId);
        return this.http.get(fetchAllAssociatedEmployeesUrl, {
            observe: "response",
            headers: this.addRequestHttpHeader(),
            params: this.addRequestHttpParams(paramMap),
        }).pipe(map(this.extractData), catchError(this.handleError))
    }

    getDashboardStatistics(): Observable<any> {
        return this.http.get(getDashboardStatistics, {
            observe: "response",
            headers: this.addRequestHttpHeader(),
        }).pipe(map(this.extractData), catchError(this.handleError))
    }
}
