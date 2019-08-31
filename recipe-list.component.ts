import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model'; 
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
 @Output() RecipeWasSelected = new EventEmitter<Recipe>();
recipes:Recipe[]=[
  new Recipe(
    'Biryani','This is special one', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg',
    ),
    new Recipe(
      'Chocolate','This is strawberry flavor', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg',
      )
];
  constructor() { }

  ngOnInit() {
  }
  selectingRecipe(recipe:Recipe){
    this.RecipeWasSelected.emit(recipe);
  }
}
