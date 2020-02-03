import {Component, Prop, State, h, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'k-rating',
  styleUrl: 'rating.css',
  shadow: true
})
export class Rating {
  /** The amount of stars */
  @Prop() maxValue: number = 5;
  /** The current rating of the stars */
  @Prop() value: number = 0;

  @State() starList: Array<object> = [];
  /** Event triggers whenever the amount of stars is changed */
  @Event() ratingUpdated: EventEmitter;

  componentWillLoad() {
    this.createStarList(this.value);
  }

  setValue(newValue) {
    this.value = newValue;
    this.createStarList(this.value);
    this.ratingUpdated.emit({value: this.value})
  }

  createStarList(numberOfStars: number) {
    let starList = [];

    for (let i = 1; i <= this.maxValue; i++) {
      if (i <= numberOfStars) {
        starList.push(<span class="rating" onMouseOver={() => this.createStarList(i)} onMouseOut={() => this.createStarList(this.value)} onClick={() => this.setValue(i)}>&#x2605;</span>);
      } else {
        starList.push(<span class="rating" onMouseOver={() => this.createStarList(i)} onMouseOut={() => this.createStarList(this.value)} onClick={() => this.setValue(i)}>&#x2606;</span>);
      }
    }

    this.starList = starList;
  }

  render() {
    return  (
      <div>
        {this.starList}
      </div>
    );
  }
}
