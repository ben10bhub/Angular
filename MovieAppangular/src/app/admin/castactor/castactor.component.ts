import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-castactor',
  templateUrl: './castactor.component.html',
  styleUrls: ['./castactor.component.css']
})


export class CastactorComponent implements OnInit {
selectedmoviename:string;
selectedactorname:string;

  moviesList: any = [];
  actorsList: any = [];
  constructor(private service: AdminService) { }

  ngOnInit(): void {
    this.getAllMovies();
    this.getAllPeople();
  }

  getAllPeople() {
    this.service.getAllPeople().subscribe((response) => {
      //this.moviesList = []
      this.actorsList.push(response)
    });
    console.log(this.actorsList);
  }

  getAllMovies() {
    this.service.getAllMovies().subscribe((response) => {
      //this.moviesList = []
      this.moviesList.push(response)
    });
    console.log(this.moviesList);
  }

  movieSelect(movie) {
    this.service.movieSelected = movie.id;
this.selectedmoviename=movie.title;
console.log(this.selectedmoviename=movie.title);
console.log(this.service.movieSelected = movie.id);
    //console.log(this.service.movieSelected);
    //console.log(this.service.actorSelected);
  }
  actorSelect(name) {
    this.service.actorSelected = name;
    this.selectedactorname = name.name;
    //this.selectedactorname=People.name;
  
    console.log(   this.service.actorSelected = name);
    console.log(this.selectedactorname= name.name);
    //console.log(this.service.actorSelected);
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    console.log(form);
    this.service.postMoviesActor(form.value).subscribe(res => {
      console.log(res);
      /*      this.resetForm(form);*/
      /*      this.service.refreshList();*/
    });
  }

}
