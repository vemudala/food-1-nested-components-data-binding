import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
    // styleUrls:'header.component.css'
})
export class HeaderComponent{
  @Output()  loadedFeature= new EventEmitter<string>() //we want type string is the feature which selected
//listn2outcmp  property         class         object instantiating***************now loadedfetre becomes event
   
  // property   = evtemtr holds value see in below method
  //we are making loadedFeature property as an event //AND add parenthasis to instantiate this event //to create
//   object based on the eventemiter class
    onSelected(feature: string){ 
this.loadedFeature.emit(feature);
// property   = evtemtr holds value // here v making loadedftre event to hold value
    }

}