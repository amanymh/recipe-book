import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Response} from '@angular/http';
import { DtataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selectedfeature = new EventEmitter<string>();
   
  constructor(private dataStorage:DtataStorageService,
  private authService:AuthService){ }

  ngOnInit() {
  }

  onSave(){
  this.dataStorage.AddRecipeToServer()
  .subscribe(
    (response : Response) => {
      console.log(response)
    }
  );
  }

  onFetchDtata(){
    this.dataStorage.getRecipesFromServer();
  }

  onLogOut(){
    this.authService.logout()
  }

}
