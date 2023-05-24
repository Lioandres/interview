import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsComponent } from './components/gifs/gifs.component';
import { SharedModule } from "../shared/shared.module";
import { HomePageComponent } from './page/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
    declarations: [
        GifsComponent,
        HomePageComponent,
        SearchBoxComponent,
        CardListComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
    
        HomePageComponent
    ]
})
export class GifsModule { }
