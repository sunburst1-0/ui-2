import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// import Sunburst from 'sunburst-chart';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Directive } from "@angular/core";
import { Pipe, PipeTransform } from "@angular/core";
import { SunburstComponent } from "./component/sunburst/sunburst.component";
import Sunburst from "sunburst-chart";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatMenuModule } from "@angular/material/menu";
import { AcConfigureComponent } from "./component/ac-configure/ac-configure.component";
import { HomeComponent } from "./component/home/home.component";
import { MobileUserComponent } from "./component/mobile-user/mobile-user.component";
import { MapEditorComponent } from "./component/map-editor/map-editor.component";

import { ChatModule } from "@progress/kendo-angular-conversational-ui";
import { NgChatModule } from "ng-chat";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { MenuModule } from "primeng/menu";
import { InputTextModule } from "primeng/inputtext";
import { ReactiveFormsModule } from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";
import { AdminComponent } from "./component/admin/admin.component";
import { AlertModule } from "ngx-bootstrap";
import { LightConfigureComponent } from "./component/light-configure/light-configure.component";
import { WarnningGeneralComponent } from "./component/warnning-general/warnning-general.component";
import { WarnningAcComponent } from "./component/warnning-ac/warnning-ac.component";
import { WarnningLightComponent } from "./component/warnning-light/warnning-light.component";
import { ScrollPanelModule } from 'primeng/scrollpanel';
@NgModule({
  declarations: [
    AppComponent,
    SunburstComponent,
    DashboardComponent,
    AcConfigureComponent,
    HomeComponent,
    MobileUserComponent,
    MapEditorComponent,
    AdminComponent,
    LightConfigureComponent,
    WarnningGeneralComponent,
    WarnningAcComponent,
    WarnningLightComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    NgChatModule,
    ChatModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    MenuModule,
    InputTextModule,
    ReactiveFormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    MatExpansionModule,
    MatTooltipModule,
    MatMenuModule,
    ScrollPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
