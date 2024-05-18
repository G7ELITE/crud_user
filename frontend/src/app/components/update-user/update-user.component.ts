import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/app.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  user?: any
  data: any

  constructor(private service: UserService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getUser(id).subscribe(data => {
      this.user = data
      console.log(this.user)
    })
  }

  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    data_nasc: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    altura: new FormControl('', Validators.required),
    peso: new FormControl('', Validators.required)
  })

  submit(){
    this.data = this.form.value
    this.user.nome = this.data.nome
    this.user.data_nasc = this.data.data_nasc
    this.user.gender = this.data.gender
    this.user.altura = this.data.altura
    this.user.peso = this.data.user


    console.log(this.data)
    this.service.updateUser(this.user?.id, this.user).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }

}
