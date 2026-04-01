import { Component, Input } from '@angular/core';
import { AudioService } from '../../core/services/audio.service';

@Component({
  selector: 'app-audio-btn',
  standalone: true,
  templateUrl: './audio-btn.component.html'
})
export class AudioBtnComponent {
  @Input() btnId  = '';
  @Input() src    = '';
  @Input() label  = 'Слушать';
  constructor(public audioSvc: AudioService) {}
}