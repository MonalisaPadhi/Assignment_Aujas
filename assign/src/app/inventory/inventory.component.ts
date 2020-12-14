import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  ProductForm: FormGroup;
  constructor() { }

  ngOnInit() {

    this.ProductForm = new FormGroup({
      Category : new FormControl('',
      [
        // Validators.minLength(3),
          // Validators.maxLength(8),
          // Validators.required
      ]),
      Quantity : new FormControl(),
      PurchasePrice: new FormControl(),
      SellPrice :  new FormControl (),
      ProductName : new FormArray([
        new FormControl(),
        new FormControl()
      ])
    });
  }
addProduct(){
  (this.ProductForm.get('ProductName') as FormArray).push(new FormControl());
}

removeProduct(i: number) {
  (this.ProductForm.get('ProductName') as FormArray).removeAt(i);
}

submitForm(){
  console.log(this.ProductForm.value);
  this.ProductForm.reset();
}
}
