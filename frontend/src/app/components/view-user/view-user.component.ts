import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/User';
import { UserService } from '../../app.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  searchTerm: string = '';
  isSearched: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      this.filteredUsers = data; // Inicializa filteredUsers com todos os usuários
      console.log(data);
    });
  }

  filterUsers(): void {
    const searchTermLower = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.nome.toLowerCase().includes(searchTermLower)
    );
    this.isSearched = true;
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(data => {
      console.log(data);
      // Atualiza a lista de usuários e a lista filtrada após a exclusão
      this.userService.getUsers().subscribe(updatedData => {
        this.users = updatedData;
        this.filterUsers(); // Aplica o filtro após a exclusão
      });
    });
  }

  calcularPesoIdeal(userId: number): void {
    this.userService.calcularPesoIdeal(userId).subscribe(data => {
      console.log(data); // Aqui você pode lidar com a resposta da sua rota calcular-peso-ideal
      // Por exemplo, você pode exibir o peso ideal em um popup
      alert('O peso ideal é: ' + data.peso_ideal);
    });
  }
}