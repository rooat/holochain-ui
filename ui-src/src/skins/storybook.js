import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Iframe from 'react-iframe'
import withRoot from '../withRoot';

const styles = theme => ({
    root: {
      flexGrow: 1,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
    }
  }
);

class StorybookSkin extends React.Component {

  render() {
    const { classes, theme } = this.props;

    return (
      <Iframe url="http://localhost:9009"
        width="100%"
        height="800"
        id="storybook"
        display="initial"
        position="relative"
        allowFullScreen/>
      );
    }
  }

StorybookSkin.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles, { withTheme: true })(StorybookSkin));
