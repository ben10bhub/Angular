import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
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
  deleteMovie(MovieId: number) {
    if(confirm("Are you sure to delete ")) {
      console.log("Implement delete functionality here");
      console.log(MovieId);
    this.service.deleteMovie(MovieId).subscribe((response) => {
      this.moviesList = [],
        this.getAllMovies(),
          console.log(response)

    });
    }
   
  }
  
  deleteActor(PersonId: number) {
    if(confirm("Are you sure to delete ")) {
      console.log("Implement delete functionality here");
    console.log(PersonId);
    this.service.deleteActor(PersonId).subscribe((response) => {
      this.actorsList = [],
        this.getAllPeople(),
        console.log(response)
    });
  }
}


  editMovieSelect(MovieId: number) {
     this.service.movieSelected = MovieId;
  }
  editActorSelect(PersonId: string) {
    this.service.actorSelected = PersonId;
  }
}
