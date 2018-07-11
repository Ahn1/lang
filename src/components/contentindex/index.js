import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { Table, Container } from "semantic-ui-react";

import * as content from "../../data/content";

class Contentindex extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.load();
  }

  async load() {
    const data = await content.getLectionsByLanguage("latin");
    this.setState({ data });
  }

  render() {
    return (
      <Container>
        <Table border="1" style={{ borderSpacing: "0" }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Titel</Table.HeaderCell>
              <Table.HeaderCell>Beschreibung</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.state.data.map(d => (
              <Table.Row key={d}>
                <Table.Cell>
                  <Link to={`/lection/${d.id}`}>{d.title}</Link>
                </Table.Cell>
                <Table.Cell>{d.description}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

export default Contentindex;
