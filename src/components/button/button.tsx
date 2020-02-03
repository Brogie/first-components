import {Component, Element, h, Prop, State} from '@stencil/core';

@Component({
  tag: 'k-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {
  /**The button format to display can be basic, raised, outline or flat*/
  @Prop() type: 'basic' | 'raised' | 'outline' | 'flat' = 'basic';
  /**The colour of button to display can be plain, primary or danger*/
  @Prop() color: 'plain' | 'primary' | 'danger' = 'plain';

  @State() ripples: JSX.Element[] = [];

  @Element() buttonEl: HTMLElement;

  handleClick = (event) => {
    let { offsetLeft, offsetTop, offsetWidth, offsetHeight } = this.buttonEl;

    let rippleSize;
    if (offsetWidth > offsetHeight) {
      rippleSize = offsetWidth;
    } else {
      rippleSize = offsetHeight;
    }

    const rippleX = event.pageX - offsetLeft - rippleSize / 2;
    const rippleY = event.pageY - offsetTop - rippleSize / 2;

    const rippleStyles = {
      width: rippleSize + 'px',
      height: rippleSize + 'px',
      top: rippleY + 'px',
      left: rippleX + 'px'
    };

    this.ripples = [...this.ripples, (<span class="ripple" style={rippleStyles} />)]
  };

  render() {
    return (
      <button class={`${this.type} ${this.color}`} onMouseDown={this.handleClick}>
        {...this.ripples}
        <slot />
      </button>
    )
  }

}
