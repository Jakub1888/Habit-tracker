import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { from, Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

interface UserData {
	email: string;
	username: string;
}

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private fireAuth: AngularFireAuth, private fireStore: AngularFirestore) {}

	registerWithEmailAndPassword(email: string, password: string, username: string): Observable<void> {
		return from(this.fireAuth.createUserWithEmailAndPassword(email, password)).pipe(
			switchMap((userCredential) => {
				const user = userCredential.user;
				const userRef: AngularFirestoreDocument<UserData> = this.fireStore
					.collection('users')
					.doc<UserData>(user?.uid);
				const userData: UserData = {
					email: user?.email as string,
					username: username
				};

				return from(userRef.set(userData));
			}),
			catchError((error) => throwError(() => new Error(error)))
		);
	}

	loginWithEmailAndPassword(email: string, password: string) {
		return from(this.fireAuth.signInWithEmailAndPassword(email, password)).pipe(
			catchError((error) => throwError(() => new Error(error)))
		);
	}
}
