import { Component, ElementRef, OnInit, Renderer2, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-gratifikasi',
  templateUrl: './video-gratifikasi.component.html',
  styleUrls: ['./video-gratifikasi.component.scss'],
})
export class VideoGratifikasiComponent  implements AfterViewInit {

  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  currentVideoIndex = 0;
  isCurrentVideoComplete = false;

  videoData = [
    {
    title: 'GRATIFIKASI',
    source: '/assets/videos/GRATIFIKASI.mp4',
    },
   ];

  constructor(
    private router: Router,
    private renderer: Renderer2
  ) { }



  // ngOnInit() {}
  ngAfterViewInit() {
    this.videoPlayer.nativeElement.addEventListener('ended', () => {
      this.isCurrentVideoComplete = true;
      console.log('Video selesai');
    });
  }

  playNextVideo() {
    if (this.isCurrentVideoComplete) {
      this.isCurrentVideoComplete = false; // Reset status pemutaran video
      if (this.currentVideoIndex < this.videoData.length - 1) {
        this.currentVideoIndex++;
        this.router.navigateByUrl('/sosialisasi-gcg/video-coc'); // Navigasi ke rute video berikutnya
      } else {
        // Jika ini adalah video terakhir, lakukan sesuatu (misalnya, kembali ke halaman utama)
        this.router.navigateByUrl('/sosialisasi-gcg/video-coc'); // Gantilah dengan rute halaman utama yang sesuai
      }
    } else {
      // Video belum selesai diputar, mungkin tampilkan pesan atau beri tahu pengguna
      // Contoh pesan kesalahan
      console.log('Video belum selesai diputar');
    }
  }

}
