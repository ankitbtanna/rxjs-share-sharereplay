import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { UsersRespose } from "./app.model";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(private http: HttpClient) { }

    getUsers(): Observable<UsersRespose> {
        return this.http.get<{record: UsersRespose}>('https://api.jsonbin.io/v3/b/64cef151b89b1e2299cc09a2').pipe(
            map((response) => response.record)
        );
    }
}