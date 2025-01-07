import { Component } from "@angular/core";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: "app-principal",
    standalone: true,
    templateUrl: "./principal.component.html",
    styleUrls: ["./principal.component.scss"],
    imports: [NavbarComponent, FooterComponent],
})
export class PrincipalComponent {
    constructor() {}
}