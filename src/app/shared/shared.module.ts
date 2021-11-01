import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImgPipe } from './pipes/img.pipe';
import { RouterModule } from '@angular/router';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { CardProductoComponent } from './card-producto/card-producto.component';



@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        CardProductoComponent,
        ImgPipe,
        TruncateTextPipe
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        CardProductoComponent,
        ImgPipe,
        TruncateTextPipe
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
