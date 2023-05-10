import { Component } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent {
 constructor(
   private testService: TestService
 ){
  console.log("test");
  
  (async()=> {
    await this.testService.createTest("effefwfew");
  })();
 }
}
