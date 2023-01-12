import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type User = {
  id?: number;
  name?: string;
  accessLevel?: string;
  timestamp?: string;
};

@Injectable({
  providedIn: 'root',
})
export class DemoStoreUserService {
  private subject: BehaviorSubject<User> = new BehaviorSubject({});

  public storeUser(params: User): void {
    /**
     * Next is to store values into subject
     * Ideally this is executed when storing data from cookies or secured local storage
     */
    this.subject.next(params);
  }

  public getStoredUser(): BehaviorSubject<User> {
    /**
     * Returns subject containing User Model
     * This can be access to all other components
     */
    return this.subject;
  }
}
