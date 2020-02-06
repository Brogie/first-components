import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'k-greeting',
  styleUrl: 'greeting.css',
  shadow: true
})
export class Greeting {
  @Prop() name: string;

  render() {
    return (
      <div>
        <header>
          <div class="overlay">
            <p class="user">Hello {this.name}!</p>
            <h1>This is a header</h1>
            <h3>Be glad it isn't purple</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam
              debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam
              consequatur ab.</p>
          </div>
        </header>
      </div>
    );
  }

}
