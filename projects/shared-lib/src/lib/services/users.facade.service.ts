import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { userFeature } from "../state/users/users.state";

@Injectable({providedIn: 'root'})
export class UserFacadeService {
    #store = inject(Store);
    
    get users$() {
        return this.#store.select(userFeature.selectUserState);
    }
}