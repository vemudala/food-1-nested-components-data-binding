import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import {Recipe } from '../../recipe.model'
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe

  @Output() selectedRecipe = new EventEmitter<void>();
    constructor() { }
   
  ngOnInit() {
  }
  OnselectedItem(){
    this.selectedRecipe.emit();

  }
}
