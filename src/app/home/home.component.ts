import { style } from '@angular/animations';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @ViewChildren('card0, card1, card2 ,card3,card4,card5,card6,card7')
  cards!: QueryList<ElementRef>;
  ngAfterViewInit() {
    this.setActiveCard(0);
  }
  setActiveCard(index: number) {
    this.cards.forEach((cardEl, i) => {
      const joinUsContent =
        cardEl.nativeElement.querySelector('.join_us_content');
      const arrow = cardEl.nativeElement.querySelector('.arrow_rotate');

      const description = cardEl.nativeElement.querySelector(
        '.joinus_description'
      );

      if (i === index) {
        cardEl.nativeElement.classList.add('active');

        if (joinUsContent) {
          joinUsContent.style.transform = 'rotate(0deg)';
          joinUsContent.style.display = 'flex';
        }
        if (arrow) {
          arrow.style.transform = 'rotate(0deg)';
          arrow.style.display = 'flex';
        }
      } else {
        cardEl.nativeElement.classList.remove('active');

        if (joinUsContent) {
          joinUsContent.style.transform = 'rotate(-90deg)';
          joinUsContent.style.display = 'none';
        }
        if (arrow) {
          arrow.style.transform = 'rotate(0deg)';
          arrow.style.display = 'none';
        }
        if (description) {
          description.style.whiteSpace = 'nowrap';
          description.style.overflow = 'hidden';
          description.style.textOverflow = 'ellipsis';
        }
      }
    });
  }
}
