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
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AuthModule } from './core/auth';
import { NavigationModule } from './shared/components/navigation/navigation.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './core/state';
import { UserEffects } from './core/state/user/effects/user.effects';
import { ToastrModule } from 'ngx-toastr';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		AuthModule,
		NavigationModule,
		StoreModule.forRoot(reducers, {
			metaReducers
		}),
		EffectsModule.forRoot([UserEffects]),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production
		}),
		ToastrModule.forRoot(),
		MatProgressSpinnerModule,
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideFirestore(() => getFirestore()),
		provideAnalytics(() => getAnalytics()),
		provideAuth(() => getAuth())
	],
	bootstrap: [AppComponent],
	providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }]
})
export class AppModule {}
