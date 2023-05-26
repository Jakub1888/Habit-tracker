import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';
import { AuthModule } from './core/auth';
import { NavigationModule } from './shared/components/navigation/navigation.module';

import { StoreModule } from '@ngrx/store';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		AuthModule,
		NavigationModule,
		StoreModule.forRoot({}),
		// EffectsModule.forRoot([UserEffects]),
		// StoreDevtoolsModule.instrument({
		// 	maxAge: 25,
		// 	logOnly: environment.production
		// }),
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideFirestore(() => getFirestore()),
		provideAnalytics(() => getAnalytics()),
		provideAuth(() => getAuth())
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
