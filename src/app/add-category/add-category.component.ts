import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../services/data-access.service';
import { CategoryDetails } from '../models/categoryDetails'
declare var $: any;

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})

export class AddCategoryComponent implements OnInit {

  constructor(public dataAccess: DataAccessService) { }

  dateAdded = new Date().toLocaleDateString();
  categoryName = ""

  categoryList: CategoryDetails[] = [
    { id: "C-101", categoryName: "Utensils", dateAdded: "3/28/2021", productList: ["Plastic Plate Small", "Plastic Plate Medium", "Plastic Plate Large"] },
    { id: "C-102", categoryName: "Dairy", dateAdded: "3/28/2021", productList: ["Milk", "Yogart"] }
  ]
  ngOnInit(): void {
  }

  clearAll() {
    this.dateAdded = new Date().toLocaleDateString();
    this.categoryName = "";
  }

  submit() {
    this.dataAccess.setModal("Error", "danger");
    $("#info-model").modal("toggle");
  }
}
