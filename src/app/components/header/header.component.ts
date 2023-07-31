import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    private isFulScreen: boolean = false;

    public toggleFullScreen() {
        this.isFulScreen = !this.isFulScreen;
        const el = document.documentElement;

        if (this.isFulScreen) {
            if (el.requestFullscreen) el.requestFullscreen();
            // else if (el.webkikRequestFullscreen) el.webkikRequestFullscreen();
            // else if (el.msRequestFullscreen) el.msRequestFullscreen();
        } else {
            if (document.exitFullscreen) document.exitFullscreen();
            // else if (document.webkitExitFullscreen) document.webkitExitFullscreen(); //safari
        }
    }
}
