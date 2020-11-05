import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipments: String[] =["Habitat dome","Drones","Food containers","Oxygen tanks"];

  constructor() { }

  ngOnInit() {
  }
  add(name: String){
    this.equipments.push(name);
  }
  remove(name: String){
    let index = this.equipments.indexOf(name);
    this.equipments.splice(index,1)
  }

}
