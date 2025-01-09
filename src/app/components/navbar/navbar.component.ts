import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from "../../pages/principal/principal.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    imports: [RouterModule, PrincipalComponent]
})
export class NavbarComponent {
    constructor() {}
}
