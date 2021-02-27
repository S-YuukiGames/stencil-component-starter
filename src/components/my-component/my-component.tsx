import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import arrowIcon from '../../assets/images/icon/close.svg';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div>
      <div>Hello, World! I'm {this.getText()}</div>
      <div class="icon" innerHTML={arrowIcon}></div>
      </div>

    )
  }
}
