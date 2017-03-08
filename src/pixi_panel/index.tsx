import * as PIXI from 'pixi.js';
import * as React from 'react';

interface PixiPanelProps {
  on_load?:(app:any, pixi:typeof PIXI) => void;
};

interface PixiPanelStates { };

class PixiPanel extends React.Component<PixiPanelProps, PixiPanelStates> {
  private element:Element;
  componentDidMount() {
    const app = new (PIXI as any).Application();
    this.element.appendChild(app.view);
    PIXI.loader.add(
        'Test',
        'https://o44j7l4g3.qnssl.com/FoUnSWbX4hL1zivr3M13173OFAFr')
      .load((loader, resources) => {
        const test = new PIXI.Sprite(resources.Test.texture);
        test.x = app.renderer.width / 2;
        test.y = app.renderer.height / 2;
        app.stage.addChild(test);
      })
    if (this.props.on_load) {
      this.props.on_load(app, PIXI);
    } else {
      console.log('Pixi loaded without any callback.');
    }
  }
  public render():JSX.Element {
    return (
      <div className="pixi_panel"
           ref={(element: Element) => { this.element = element; }}>
      </div>
    );
  }
}
export default PixiPanel;
