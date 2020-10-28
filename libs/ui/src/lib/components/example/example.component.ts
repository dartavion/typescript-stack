import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from '../../services/message.service';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Post } from '@prisma/client';

@Component({
  selector: 'typescript-stack-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  form: FormGroup;
  messages$: Observable<Post[]> = this.messageService.get();
  filteredMessages$: Observable<Post[]>;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: '',
      content: '',
      authorEmail: 'sweets@sweet.com'
    })
  }

  submit() {

    this.messageService.post(this.form.value)
      .pipe(
        mergeMap(() => this.messages$ = this.messageService.get())
      )
      .subscribe();
  }

  filter(value: string) {
    this.filteredMessages$ = this.messageService.filter(value);
  }
}
