import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent {
  addForm: FormGroup;
dataSouce=[]
  form:any
  constructor(
    private data:DataService,
    public fb: FormBuilder,
    private router: Router
    ){

      this.addForm = this.fb.group({
      color:[,]
   
      });
      this.getForm()
    }
  

  
  ngOnInit(): void {
   
    
  
  }
add(){
 // console.log(this.addForm.value);
  this.dataSouce.push(this.addForm.value)
}
   getForm(){
 

    this.data.getform('/2-create-form/form-settings.json').subscribe((x)=>{
      this.form=x

    this.form?.fields.forEach(e => {
    //  console.log(x);
      
      this.addForm.addControl(e.field, new FormControl('',Validators.required));
    });
   // console.log(this.addForm);
    
    });
  }
  pushData(){
    this.data.cards.unshift({
      id: 1,
      img:  "./../../../assets/Screenshot 2023-10-15 081136.png",
      subtitle  :  this.addForm.value.title,
      title :  this.addForm.value.desc,
      url  :   "/survey/how-many-car-you-have-in-your-family"    })

      this.router.navigate(['/']);
  }

}
