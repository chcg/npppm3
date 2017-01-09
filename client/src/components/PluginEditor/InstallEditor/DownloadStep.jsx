import React, { Component, PropTypes } from 'react';
import { FullRow, Row, Cell } from '../../Grid';
import File from './File';
import styles from './download-step.css'

export default class DownloadStep extends Component {
  constructor(props) {
    super(props);
    this.state = { url: props.step.get('url') };
    this.onUrlChange = this.onUrlChange.bind(this);
  }

  onUrlChange(e) {
    this.setState({
      url: e.target.value
    });

    this.props.onFieldChange('url', e.target.value);
  }

  render() {

    const { url } = this.state;
    const { step } = this.props;
    const filesAvailable = step.get('filesAvailable') || [];
    return (
      <div className={styles.downloadStep}>
      <Row>
        <Cell small="12" large="2">
          URL:
        </Cell>
        <Cell small="12" large="10">
          <input type="text" onChange={this.onUrlChange} value={url} />
        </Cell>
      </Row>
        <FullRow>
          <ul className={styles.filesList}>
            {filesAvailable.map(file => {
              <File file={file} />
            })}
          </ul>
        </FullRow>
      </div>
    );
  }
}
