import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

interface Tasks {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  tasks: Tasks[] = [];

  constructor(
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async openAlert() {
    const alert = await this.alertController.create({
      header: 'Crear nueva tarea',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Digite la tarea'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: (data) => {
            const title = data.title;
            this.tasks.push({
              title,
              completed: false
            });
          }
        }
      ]
    });

    await alert.present();
  }

}
