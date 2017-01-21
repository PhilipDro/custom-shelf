"use strict";
var router_1 = require("@angular/router");
var shipping_component_1 = require("./shipping.component");
var shelves_component_1 = require("./shelves.component");
var contact_component_1 = require("./contact.component");
var shelf_detail_component_1 = require("./shelf-detail.component");
var imprint_component_1 = require("./imprint.component");
var privacy_info_component_1 = require("./privacy-info.component");
var appRoutes = [
    //initial redirect
    {
        path: '',
        redirectTo: '/regale',
        pathMatch: 'full',
        data: {
            title: 'Home'
        }
    },
    //navigation links
    {
        path: 'versand',
        component: shipping_component_1.ShippingComponent,
        data: {
            title: 'Shipping'
        }
    },
    {
        path: 'regale',
        component: shelves_component_1.ShelvesComponent,
        data: {
            title: 'Home'
        }
    },
    {
        path: 'kontakt',
        component: contact_component_1.ContactComponent,
        data: {
            title: 'Contact'
        }
    },
    {
        path: 'regal/:id',
        component: shelf_detail_component_1.ShelfDetailComponent,
        data: {
            title: 'Shelf'
        }
    },
    //footer navigation
    {
        path: 'impressum',
        component: imprint_component_1.ImprintComponent,
        data: {
            title: 'Imprint'
        }
    },
    {
        path: 'datenschutz',
        component: privacy_info_component_1.PrivacyInformationComponent,
        data: {
            title: 'Privacy'
        }
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map