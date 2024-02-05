import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class bookCounterService{
    private countSource = new BehaviorSubject<number>(0);
    count$ = this.countSource.asObservable();

    incrementCounter(){
        const newCounter = this.countSource.value + 1;
        this.countSource.next(newCounter);
    }

    decrementCounter(){
        const newCounter = Math.max(0, this.countSource.value - 1);
        this.countSource.next(newCounter);
    }
}