import { Component, OnInit, Input } from '@angular/core';

type Course = {
  cardIndex: number;
  description: string;
};

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() course: Course;
  constructor() {}

  ngOnInit() {}

  onTitleChanged(newTitle: string) {
    this.course.description = newTitle;
  }
}
