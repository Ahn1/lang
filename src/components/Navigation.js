import React, { PureComponent } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Navigation extends PureComponent {
  render() {
    return (
      <Segment inverted>
        <Menu inverted>
          <Menu.Item>
            <Link to="/">Verzeichnis</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/translator">Übersetzer</Link>
          </Menu.Item>
        </Menu>
      </Segment>
    );
  }
}

export default Navigation;
