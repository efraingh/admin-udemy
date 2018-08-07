import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header/header.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { FooterComponent } from "./footer/footer.component";
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";
import { SidebarComponent } from "./sidebar/sidebar.component";


@NgModule({
    declarations: [
        HeaderComponent,
        BreadcrumbsComponent,
        FooterComponent,
        NopagefoundComponent,
        SidebarComponent
    ],
    exports: [
        HeaderComponent,
        BreadcrumbsComponent,
        FooterComponent,
        NopagefoundComponent,
        SidebarComponent
    ]
})
export class SharedModule{}