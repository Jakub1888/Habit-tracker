import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User, UserInfo } from 'firebase/auth';
import { EMPTY, from, Observable, of, Subject, throwError, catchError, switchMap, tap, map } from 'rxjs';
import firebase from 'firebase/compat/app';

interface AppUser {
	email: string;
	displayName: string;
	metaData: User['metadata'] | undefined;
}

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private clearFormSource = new Subject<boolean>();
	clearForm$ = this.clearFormSource.asObservable();

	constructor(private fireAuth: AngularFireAuth, private fireStore: AngularFirestore) {}

	registerWithEmailAndPassword(email: string, password: string, username: string): Observable<void> {
		return from(this.fireAuth.createUserWithEmailAndPassword(email, password)).pipe(
			switchMap((userCredential) => {
				const user = userCredential.user;
				const userRef: AngularFirestoreDocument<AppUser> = this.fireStore
					.collection('users')
					.doc<AppUser>(user?.uid);
				const appUser: AppUser = {
					email: user?.email as string,
					displayName: username,
					metaData: user?.metadata
				};

				return from(userRef.set(appUser));
			}),
			catchError((error) => throwError(() => new Error(error)))
		);
	}

	loginWithEmailAndPassword(email: string, password: string) {
		return from(this.fireAuth.signInWithEmailAndPassword(email, password)).pipe(
			map((userCredentials) => userCredentials.user),
			catchError((error) => throwError(() => new Error(error)))
		);
	}

	initializeFirebase() {
		this.fireAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
	}

	clearForm() {
		this.clearFormSource.next(true);
	}
}
