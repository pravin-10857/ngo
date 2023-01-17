import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-apage',
  templateUrl: './apage.component.html',
  styleUrls: ['./apage.component.css']
})
export class ApageComponent {
  public donatorinfo=[];

  constructor(private router:Router ,private http: HttpClient){

  }
  onDestroy(){
    localStorage.clear();
    this.router.navigate(['admin']);
  }
  ngOnInit(): void {
    this.http.get('http://localhost:3500/donators').subscribe((res:any) => {
      this.donatorinfo=res;
    });
  }

}
