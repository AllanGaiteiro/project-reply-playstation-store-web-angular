import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BannerGameComponent } from './components/banner-game/banner-game.component';
import { FooterComponent } from './components/footer/footer.component';
import { GameCarrocelBestTenComponent } from './components/game-carrocel-best-ten/game-carrocel-best-ten.component';
import { GameCarrocelDemostrationComponent } from './components/game-carrocel-demostration/game-carrocel-demostration.component';
import { GameCarrocelNewComponent } from './components/game-carrocel-new/game-carrocel-new.component';
import { GameCarrocelShortlyComponent } from './components/game-carrocel-shortly/game-carrocel-shortly.component';
import { HeaderPlaystoreComponent } from './components/header-playstore/header-playstore.component';
import { HeaderSonyComponent } from './components/header-sony/header-sony.component';
import { LogoSonyComponent } from './components/logo-sony/logo-sony.component';
import { PlaystationPlusMoreAboutComponent } from './components/playstation-plus-more-about/playstation-plus-more-about.component';
import { PlaystationStarsMoreAboutComponent } from './components/playstation-stars-more-about/playstation-stars-more-about.component';
import { SectionDestaquesComponent } from './components/section-destaques/section-destaques.component';
import { SectionMoreAboutComponent } from './components/section-more-about/section-more-about.component';
import { SonyMoreAboutComponent } from './components/sony-more-about/sony-more-about.component';
import { PageLatestComponent } from './pages/page-latest/page-latest.component';
import { ButtonSectionComponent } from './shared/button-section/button-section.component';
import { CardGameComponent } from './shared/card-game/card-game.component';
import { CarrouselGameComponent } from './shared/carrousel-game/carrousel-game.component';
import { MoreAboutSectionComponent } from './shared/more-about-section/more-about-section.component';
import { NavigationPlaystationStoreComponent } from './shared/navigation-playstation-store/navigation-playstation-store.component';
import { NavigationSonyComponent } from './shared/navigation-sony/navigation-sony.component';
import { CardGameBoldComponent } from './shared/card-game-bold/card-game-bold.component';
import { GridSectionComponent } from './shared/grid-section/grid-section.component';

const routes: Routes = [

  { path: 'latest', component: PageLatestComponent },
  { path: '**', redirectTo: '/latest' }
];

@NgModule({
  declarations: [
    AppComponent,
    LogoSonyComponent,
    HeaderPlaystoreComponent,
    BannerGameComponent,
    SectionDestaquesComponent,
    GameCarrocelNewComponent,
    GameCarrocelBestTenComponent,
    GameCarrocelShortlyComponent,
    GameCarrocelDemostrationComponent,
    PlaystationPlusMoreAboutComponent,
    PlaystationStarsMoreAboutComponent,
    SonyMoreAboutComponent,
    FooterComponent,
    HeaderSonyComponent,
    ButtonSectionComponent,
    NavigationSonyComponent,
    NavigationPlaystationStoreComponent,
    CardGameComponent,
    MoreAboutSectionComponent,
    CarrouselGameComponent,
    SectionMoreAboutComponent,
    PageLatestComponent,
    CardGameBoldComponent,
    GridSectionComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ], exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
