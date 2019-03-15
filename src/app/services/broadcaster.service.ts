import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class Broadcaster {
    private eventBus$: Subject<any> = new Subject();

    on(key: string, next, error = () => { }, complete = () => { }): Subscription {
        return this.eventBus$.filter(e => e.key === key).map(e => e.data).subscribe(next, error, complete)
    }

    emit(key: any, data?: any) {
        this.eventBus$.next({ key, data });
    }
}
