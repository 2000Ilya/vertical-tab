import { Component, OnInit } from '@angular/core';

export interface Tab {
  tab_name: string;
  tab_info: string;
  is_clicked: boolean;
}

@Component({
  selector: 'app-vertical-tab',
  templateUrl: './vertical-tab.component.html',
  styleUrls: ['./vertical-tab.component.css']
})
export class VerticalTabComponent implements OnInit {
  lorem_texts = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas atque nostrum minima ducimus rem deleniti sed, aperiam quaerat, dignissimos illo, dolorem sunt consectetur? Laudantium possimus, sint facilis consequuntur temporibus minus aliquid quas a perspiciatis labore, qui et nulla. Corporis ullam quibusdam eaque tenetur, deserunt, odio accusamus dolorum eius sed quasi deleniti voluptate, iste cupiditate veniam. Totam sapiente cumque eaque.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit esse vel libero molestiae autem nam eius animi porro debitis laudantium totam obcaecati dignissimos aspernatur quae quam qui nisi facere, beatae hic architecto, repudiandae saepe labore rem! Laudantium totam vel autem cupiditate, perferendis repellat odio magnam dicta atque quam! Accusantium possimus inventore incidunt. Maiores excepturi laudantium ea a ex totam nisi.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aperiam atque earum sapiente cupiditate enim eligendi aliquid itaque architecto et alias labore consectetur ratione fugiat nam cumque debitis suscipit. Amet laborum, officia tempora porro earum cumque fuga non laudantium voluptates autem, perspiciatis natus exercitationem sit! Distinctio nisi quis dolor quia inventore laudantium ipsam dignissimos! Quas reprehenderit quo amet illum praesentium?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptates. Accusamus vel natus, dicta earum ullam repellat, eum ut aliquam illo, quasi nam est non deleniti amet consequuntur ducimus dignissimos repudiandae explicabo. Aperiam illum libero cupiditate, aliquid unde voluptate nemo quas aliquam officia sint doloremque veniam, ratione possimus voluptatibus officiis numquam. Nemo harum similique odio officiis perferendis possimus aut minima.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid repellendus cupiditate illum asperiores aspernatur, voluptatibus neque iusto animi eius dolorem nisi vitae quo, laboriosam, obcaecati adipisci illo consequatur. Rerum temporibus quod nulla dolorem perferendis illum voluptatem nostrum quos. Sed earum perspiciatis perferendis. Obcaecati explicabo, deserunt in iusto, esse quos consequatur harum est maxime eos eum illum quidem commodi cum consectetur.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni molestiae maiores, quos ipsam, libero quasi veniam magnam culpa explicabo suscipit maxime sapiente odit quia alias odio nesciunt nobis sit ullam cupiditate facere voluptatum iure voluptates obcaecati? Assumenda facere recusandae, quod, illo soluta non possimus itaque earum voluptatem beatae quae aspernatur atque impedit, molestiae eaque sint autem repudiandae corrupti. Vero!",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum voluptatibus officia autem doloremque. Ipsum iure aperiam soluta illo consectetur mollitia alias rerum. Voluptatibus excepturi cumque quis similique! Fuga dolore, cum quisquam doloribus atque dolorum quaerat laborum. Ex, mollitia dolores nam nesciunt repudiandae vero optio odit harum nulla obcaecati tempora fugiat rerum. Reprehenderit dolorum, iusto magni ducimus pariatur recusandae ipsam et.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur fugiat ullam dignissimos expedita nostrum, ad earum quaerat beatae laborum distinctio reiciendis magnam at. Dolorem, a quos enim perspiciatis atque facere officiis ea excepturi eum laborum autem nemo vitae illo nostrum voluptatibus optio quo maiores in expedita aperiam, tempora fuga, veniam dolores quibusdam. Suscipit quasi molestias nobis amet, illum corporis et.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatibus iure officia nisi labore fugiat, dignissimos rem. Doloribus illo ipsam facere molestias aliquam quisquam nisi tenetur rem sapiente eaque quod nulla perspiciatis saepe molestiae, quas, eveniet ut. Nulla at quam ducimus dolore explicabo nihil doloremque! Beatae dolorem magnam reprehenderit ipsam voluptatibus! Perferendis sapiente voluptates magni est iste velit vero beatae.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quo veritatis nesciunt repellat non aut eligendi tempore harum fugit aperiam. Obcaecati vitae repellat quibusdam voluptatum deleniti, tempore illo autem sunt, necessitatibus nihil inventore! Delectus illum, repellat sunt officiis quo ab asperiores minima hic sequi qui veritatis enim blanditiis, eaque ullam accusamus tempore obcaecati assumenda aliquid consequatur laudantium? Ducimus, facilis minus.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quam eos atque veniam ipsam soluta. Alias obcaecati nulla officiis consectetur porro eaque ad! Corporis cupiditate maiores amet corrupti commodi quam iusto fuga expedita odit quae cum laboriosam praesentium animi sequi optio qui porro quia iure delectus, alias sunt ad dolores aliquid dolore. Architecto aut enim quas eos eius nemo optio.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illum beatae amet cumque eveniet! Ullam iste ab repellendus necessitatibus. Exercitationem facere aspernatur quod ipsum earum maiores officiis illo delectus culpa sit! Voluptas eos minus nesciunt incidunt vitae neque alias eius voluptatum numquam id amet temporibus necessitatibus veritatis illo optio ipsum vero non ab, natus iure quae, magni distinctio. Nesciunt, maxime!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In unde iste quod maiores, dignissimos inventore ipsa velit magni commodi debitis, esse quasi, quos fuga praesentium necessitatibus ab. Deleniti, ex accusamus? Animi consectetur voluptatibus rerum, suscipit unde laudantium soluta incidunt magni distinctio, sit optio id aperiam maiores, voluptatem illo nulla! Blanditiis, eaque repellat? Quae placeat assumenda nisi consequatur sint ea sed?",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel rem officiis illo deserunt ipsam minima quos expedita eos! Quidem quod nobis optio tenetur esse blanditiis quaerat doloribus quo sunt suscipit nam nihil amet quae officiis, impedit facilis assumenda. Laudantium harum libero distinctio reiciendis illum tempore quibusdam doloremque dignissimos eveniet neque qui, labore voluptas nisi quam ut repudiandae minima corporis sed?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolor hic sapiente quidem quam eligendi ipsum eaque rem id, tempora beatae. Vero quibusdam molestiae reiciendis optio pariatur minima saepe asperiores, natus facere omnis? Molestias iste tempora, ratione aliquid, repellat dolore voluptatibus rem placeat quasi doloribus ex? Earum, iure ipsum. Sunt provident dicta at voluptatem doloremque natus fugiat amet, officia odit.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, perspiciatis distinctio ad rem odit officia deleniti excepturi facilis cumque est quae voluptate non suscipit, perferendis cum ab unde consequatur dolor iste eum ducimus. Modi fugiat aut rerum distinctio illum, repellat impedit sunt aliquam, hic nemo quaerat numquam tempore laborum aspernatur quas in reiciendis vero repudiandae nisi. Consequatur, et. Aspernatur, dolorem."
  ];

  addTab() {
    this.tabs.push({
      tab_name: `Заметка ${this.tabs.length + 1}`,
      tab_info: this.lorem_texts[Math.floor(Math.random() * this.lorem_texts.length)],
      is_clicked: false
    })
  }

  clicked_tab = "tab-info 0";

  toggleTabs(tab) {
    this.clicked_tab = "tab-info " + this.tabs.indexOf(tab);
    for (let i = 0; i < this.tabs.length; i++) {
      if (i != this.tabs.indexOf(tab)) {
        this.tabs[i].is_clicked = false;
      } else {
        this.tabs[i].is_clicked = true;
      }
    }
  }

  ngOnInit() {

  }

  tabs: Tab[] = [
    {
      tab_name: "Заметка 1",
      tab_info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima impedit dolore voluptate incidunt deserunt dolor, fugit voluptates facere. Aperiam, omnis impedit. Sit cumque ut incidunt.",
      is_clicked: true
    },
    {
      tab_name: "Заметка 2",
      tab_info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ex. Labore ratione numquam eius maiores.",
      is_clicked: false
    },
    {
      tab_name: "Заметка 3",
      tab_info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iure laboriosam sapiente libero accusantium voluptas ab optio. Pariatur provident nam aspernatur, molestiae ex repellendus quia corporis officia, numquam eaque sunt sint? Minus maxime cupiditate voluptates similique ipsam, quidem laborum doloribus.",
      is_clicked: false
    }
  ]
}
