import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SnackService {
  constructor(private router: Router, private snackBar: MatSnackBar) {}

  authError() {
    // Display the error message when the user is not logged in
    this.snackBar.open('You must be logged in', 'OK', {
      duration: 5000,
    });

    // Redirect the user to the login page
    return this.snackBar._openedSnackBarRef!
      .onAction()
      .pipe(
        tap((_) => this.router.navigate(['/login']))
      )
      .subscribe();
  }
}
