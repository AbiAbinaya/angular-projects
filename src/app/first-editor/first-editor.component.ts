import { Component, OnInit } from '@angular/core';
import { FirstEditor } from './first-editor';
import { FIRSTEDITORMOCK } from '../mock-first-editor';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-first-editor',
  templateUrl: './first-editor.component.html',
  styleUrls: ['./first-editor.component.css']
})
export class FirstEditorComponent implements OnInit {
  /** #region declarations */
  // firstEditor: FirstEditor = {
  //   id: 1,
  //   name: 'Abinaya'
  // }
  firstEditor= FIRSTEDITORMOCK;
  selectedHero:FirstEditor;

  title = 'windstorm';
  /** #endregion declarations */

  constructor() { }

  ngOnInit() { }

  OnSelect(paramhero:FirstEditor):void
  {
    this.selectedHero = paramhero;
  }

}
