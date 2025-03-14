import { Component } from 'inferno';

/**
 * Example Custom Component
 * 
 * This is an example of a custom component for Lemmy UI.
 * You can use this as a template for your own components.
 */
export class CustomComponentExample extends Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);
  }

  render() {
    return (
      <div className="custom-component-example">
        <h3>Custom Component Example</h3>
        <p>This is a custom component for Lemmy UI. You can modify it or create new components to customize the UI.</p>
        {this.props.children}
      </div>
    );
  }
}