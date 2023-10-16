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
  id:number=1;
  addForm: FormGroup;
dataSouce=[]
  form:any
  isEdit: boolean=false;
  constructor(
    private data:DataService,
    public fb: FormBuilder,
    private router: Router
    ){

      this.addForm = this.fb.group({
      id:[this.id,],
      color:[,Validators.required]
   
      });
      this.getForm()
    }
  

  
  ngOnInit(): void {
   
    
  
  }
add(){
 console.log(this.isEdit,this.addForm.value.id);
 
if (this.isEdit==true) {
  console.log(this.addForm.value.id);
  this.dataSouce =this.dataSouce.filter(x=>x.id!=this.addForm.value.id);
}
 
  this.dataSouce.push(this.addForm.value)
  this.addForm.reset();
  this.id++
  this.addForm.get('id').setValue(this.id)
  this.isEdit=false

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
      img:  "./assets/Screenshot 2023-10-15 081136.png",
      subtitle  :  this.addForm.value.title,
      title :  this.addForm.value.desc,
      url  :   "/survey/how-many-car-you-have-in-your-family"    })

      this.router.navigate(['/']);
  }
delete(id){
  console.log(id);
  
  this.dataSouce =this.dataSouce.filter(x=>x.id!=id);

}
edit(id){
  this.isEdit=true;
  let data =this.dataSouce.find(x=>x.id==id);
this.addForm.get('color').setValue(data.color)
this.addForm.get('title').setValue(data.title)
this.addForm.get('select2').setValue(data.select2)
this.addForm.get('select1').setValue(data.select1)
this.addForm.get('desc').setValue(data.desc)
this.addForm.get('answers').setValue(data.answers)
this.addForm.get('id').setValue(data.id)

}
}
