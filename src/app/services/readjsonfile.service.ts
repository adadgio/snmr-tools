import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReadJsonFileService {

    constructor(
        private http: Http
    ) {}

    getJsonData(filename: string) {
        return this.http.get(filename).map((res: any) => res.json()).toPromise();
    }
}
