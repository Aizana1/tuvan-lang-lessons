import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AudioService {
  playingId = signal<string | null>(null);
  private audio: HTMLAudioElement | null = null;

  play(id: string, src: string) {
    if (this.playingId() === id) {
      this.audio?.pause();
      this.playingId.set(null);
      return;
    }
    this.audio?.pause();
    if (!src) {
      this.playingId.set(null);
      return;
    }
    this.audio = new Audio(src);
    this.audio.play().catch(() => this.playingId.set(null));
    this.playingId.set(id);
    this.audio.onended = () => this.playingId.set(null);
    this.audio.onerror = () => this.playingId.set(null);
  }
}
