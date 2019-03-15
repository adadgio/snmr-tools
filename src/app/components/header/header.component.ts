import { Component, OnInit } from '@angular/core';
import { MobileDetectorSingleton } from '../../services/mobile.detector';
import { Broadcaster } from '../../services/broadcaster.service';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})

export class HeaderComponent implements OnInit {
    
    showBigOn: boolean;
    title: string;

    constructor(private _broadcaster: Broadcaster) { 
        this.showBigOn = true;
    }

    ngOnInit() { 
        this._broadcaster.on('open.score.in.iframe', (data) => {
            this.showBigOn = false;
            this.title = data.title;
        });

        this._broadcaster.on('close.score.iframe', (data) => {
            this.showBigOn = true;
        });
    }

    closeViewer() {
        this._broadcaster.emit('close.score.iframe', {});
    }

    isMobileDevice() {
        return MobileDetectorSingleton.isMobileDevice();
    }
}