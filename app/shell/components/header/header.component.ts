import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ShellService } from '../../services/shell.service';
import { NotificationService } from '../../../modules/notifications/services/notification.service';
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from '../../services/authentication..service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
  ) {

  }

  ngOnInit(): void {

  }

}
