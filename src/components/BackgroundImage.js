import React, {Component} from 'react';
import {Image} from 'react-native';

class BackgroundImage extends Component {
    render() {
      const styles = {
          backgroundImage: {
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover'
          }
      }

        return (
          <Image  source={{url: '../images/bgImg4.jpeg'}} style={styles.backgroundImage}>
          </Image>
        )
    }
}

export default BackgroundImage;
