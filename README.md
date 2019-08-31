# food-1-nested-components-data-binding
nested components data binding https://github.com/vemudala/food-1-nested-components-data-binding/blob/master/fold-str-child-to-parent.PNG this is we are sending data from headercomp to appcomp //  click event performing in this comp n access in appcomp
 
on clickon selected menuitm show particular menu data and remaining should hide for this we are doing this
step 1: header component.html has 2 menu items  recipe and shopping list u can see in picture
        add click event onSelected('recipe') and onSelected('Shopping') //see 37 38 lines
EXAMPLE :pictures :
b4 https://github.com/vemudala/food-1-nested-components-data-binding/blob/master/before-adding-click-events.PNG
after https://github.com/vemudala/food-1-nested-components-data-binding/blob/master/onclick-menu-shown-data1.PNG
after https://github.com/vemudala/food-1-nested-components-data-binding/blob/master/onclick-menu-shown-data2.PNG



step 2: header component.ts write above click event method
            @Output()  loadedFeature= new EventEmitter<string>() //we want type string is the feature which selected
            //listn2outcmp  property         class         object instantiating***************now loadedfetre becomes event

              // property   = evtemtr holds value see in below method
              //we are making loadedFeature property as an event //AND add parenthasis to instantiate this event //to create
            //   object based on the eventemiter class
                onSelected(feature: string){ 
            this.loadedFeature.emit(feature);
            // property   = evtemtr holds value // here v making loadedftre event to hold value
                }
 ************NOTE Above loadedFeature property can be used in outside of this component where ever headercomp selector is used ***********

   step 3  in appcomp.html
             <app-header (loadedFeature)="displayfeature($event)"></app-header>
             
  step 4: export class AppComponent {
            feature="recipe";
            displayfeature(feature:string){
             this.feature=feature; 
            }
          }  
          
   step 5: appcomp.html
         <app-header (loadedFeature)="displayfeature($event)"></app-header>
      <div class="container">
        <div class="row">
          <div class="col-md-12"> 
            <app-recipes *ngIf="feature==='recipe'"></app-recipes>
            <app-shopping-list  *ngIf="feature!=='recipe'"></app-shopping-list>
          </div>
        </div>
      </div>
**********  completed showing data as per particular clik ******** 
******NEXT OPEN RECIPESCOMP.html ************



      
             
             
             
             
