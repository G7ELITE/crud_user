import { Component, OnInit } from '@angular/core';
import { UserService } from '../../app.service';
import { User } from '../../User';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';
  isSearched: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      this.filteredUsers = data;
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
    this.userService.deleteUser(id).subscribe(() => {
      this.userService.getUsers().subscribe(updatedData => {
        this.users = updatedData;
        this.filterUsers();
      });
    });
  }

  calcularPesoIdeal(id: number): void {
    this.userService.getUserPesoIdeal(id).subscribe(response => {
      alert(`O peso ideal para o usuário é ${response.pesoIdeal.toFixed(2)} kg.`);
    }, error => {
      alert('Erro ao calcular o peso ideal.');
      console.error(error);
    });
  }
}
