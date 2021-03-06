import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CreatePage } from '../pages/create/create';
import { ProfilePage } from '../pages/profile/profile';
import { VoteCommentsPage } from '../pages/vote-comments/vote-comments';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    CreatePage,
    ProfilePage,
    VoteCommentsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    CreatePage,
    ProfilePage,
    VoteCommentsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
