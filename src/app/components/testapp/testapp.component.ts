import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 

@Component({
  selector: 'app-testapp',
  templateUrl: './testapp.component.html',
  styleUrls: ['./testapp.component.css']
})
export class TestappComponent implements OnInit {

  constructor(
      public _uw:UserWService,
  private dataApi: DataApiService
     ) { }
  public tixs:TixInterface;
   loadAPI = null;  
   // url="assets/assetsfruit/js/jquery.parallax-scroll.js";
   // url2 = "assets/assetsfruit/js/scripts.js";
    getAllTixs(){
    this.dataApi
    .getAllTixs()
    .subscribe((tixs: TixInterface) => (this.tixs=tixs));
  }
  ngOnInit() {
        this.getAllTixs();
    // this._uw.tixPreview.quantity=1;
 // if (this._uw.loaded==true){
 //          this.loadAPI = new Promise(resolve => {
 //            // this.loadScript();
 //            // this.loadScript2();
 //          });
 //        }
 //        this._uw.loaded=true;
  }
    //   public loadScript() {
    //   let node = document.createElement("script");
    //   node.src = this.url;
    //   node.type = "text/javascript";
    //   node.async = true;
    //   node.charset = "utf-8";
    //   document.getElementsByTagName("head")[0].appendChild(node);
    // }
    //     public loadScript2() {
    //   let node = document.createElement("script");
    //   node.src = this.url2;
    //   node.type = "text/javascript";
    //   node.async = true;
    //   node.charset = "utf-8";
    //   document.getElementsByTagName("head")[0].appendChild(node);
    // }

}
