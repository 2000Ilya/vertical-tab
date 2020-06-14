import { Component, OnInit } from '@angular/core';

export interface Tab {
  tab_name: string;
  tab_info: string;
}

@Component({
  selector: 'app-vertical-tab',
  templateUrl: './vertical-tab.component.html',
  styleUrls: ['./vertical-tab.component.css']
})
export class VerticalTabComponent implements OnInit {
  is_clicked = false;

  clicked_tab = "tab-info 0";

  toggleTabs(tab) {
    this.clicked_tab = "tab-info " + this.tabs.indexOf(tab);
    this.is_clicked = !this.is_clicked;
  }

  ngOnInit() {

  }

  tabs: Tab[] = [
    {
      tab_name: "Заметка 1",
      tab_info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima impedit dolore voluptate incidunt deserunt dolor, fugit voluptates facere. Aperiam, omnis impedit. Sit cumque ut incidunt."
    },
    {
      tab_name: "Заметка 2",
      tab_info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ex. Labore ratione numquam eius maiores."
    },
    {
      tab_name: "Заметка 3",
      tab_info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iure laboriosam sapiente libero accusantium voluptas ab optio. Pariatur provident nam aspernatur, molestiae ex repellendus quia corporis officia, numquam eaque sunt sint? Minus maxime cupiditate voluptates similique ipsam, quidem laborum doloribus."
    }
  ]
}
