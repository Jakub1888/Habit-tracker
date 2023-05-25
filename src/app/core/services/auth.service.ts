import { Injectable } from '@angular/core';
import { User, UserCredential } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { EMPTY, Observable, catchError, from, of, switchMap, throwError } from 'rxjs';
import firebase from 'firebase/compat/app';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	user$!: Observable<undefined>;

	constructor(private fireAuth: AngularFireAuth, private firestore: AngularFirestore) {}

	registerWithEmail(email: string, password: string, username: string): Observable<any> {
		return from(this.fireAuth.createUserWithEmailAndPassword(email, password)).pipe(
			catchError((error) => throwError(() => new Error(error))),
			switchMap((userCredential) => {
				const user = userCredential.user;
				return from(
					this.firestore.collection('users').doc(user?.uid).set({
						email: user?.email,
						username: username
					})
				);
			})
		);
	}

	loginWithEmail(email: string, password: string): Observable<any> {
		return from(this.fireAuth.signInWithEmailAndPassword(email, password)).pipe(
			catchError((error) => throwError(() => new Error(error)))
		);
	}

	loginWithGoogle(): Observable<any> {
		const provider = new firebase.auth.GoogleAuthProvider();
		return from(this.fireAuth.signInWithPopup(provider)).pipe(
			catchError((error) => throwError(() => new Error(error)))
		)
	}
}
