"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var shelf_service_1 = require("./shelf.service");
var app_component_1 = require("./app.component");
var shelf_detail_component_1 = require("./shelf-detail.component");
var shelves_component_1 = require("./shelves.component");
var shipping_component_1 = require("./shipping.component");
var contact_component_1 = require("./contact.component");
var size_form_component_1 = require("./size-form.component");
var title_component_1 = require("./title.component");
var footer_component_1 = require("./footer.component");
var imprint_component_1 = require("./imprint.component");
var privacy_info_component_1 = require("./privacy-info.component");
var mail_component_1 = require("./mail.component");
var gallery_component_1 = require("./gallery.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_1.routing,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService, { passThruUnknownUrl: true })
        ],
        declarations: [
            app_component_1.AppComponent,
            shelf_detail_component_1.ShelfDetailComponent,
            shelves_component_1.ShelvesComponent,
            shipping_component_1.ShippingComponent,
            contact_component_1.ContactComponent,
            size_form_component_1.SizeFormComponent,
            title_component_1.TitleComponent,
            footer_component_1.FooterComponent,
            imprint_component_1.ImprintComponent,
            privacy_info_component_1.PrivacyInformationComponent,
            mail_component_1.MailComponent,
            gallery_component_1.GalleryComponent
        ],
        providers: [shelf_service_1.ShelfService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map