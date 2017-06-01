import React from 'react';
import { Image, View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import moment from 'moment';

import { px2dp, SCREEN_WIDTH } from '../../utils';

// var zh = require('moment/locale/zh-cn');
// moment.updateLocale('zh-cn', zh);
// <View style={styles.label}><Text>{this.props.language}</Text></View>

export default class NewsCard extends React.PureComponent {
  render() {
    // <Text>@{this.props.author.username}</Text>
    return (
      <TouchableNativeFeedback onPress={this.props.onPress}>
        <View style={styles.row}>
          <View style={styles.cover}>
            <Image style={styles.coverImage} source={require('../../img/default-cover.png')} />
            <Image style={styles.coverImage} source={{ uri: `http://www.gitbook.com${this.props.cover.small}` }} />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>{this.props.title}</Text>

            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.desc}>
              {this.props.description === '' ? 'No description for now' : this.props.description}
            </Text>

            <Text>Last updated {moment(this.props.dates.build).fromNow()}</Text>

            <View style={styles.infoWrapper}>
              <View style={styles.label}><Text>★ {this.props.counts.stars}</Text></View>
              <View style={styles.label}><Text>{this.props.language}</Text></View>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    height: px2dp(320),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    padding: 10,
  },

  cover: {
    width: px2dp(200),
    height: px2dp(300),
    marginRight: 10,
  },

  coverImage: {
    width: px2dp(200),
    height: px2dp(262),
    borderWidth: 2,
    borderColor: '#eee',
    position: 'absolute',
    left: 0,
    top: 0,
  },

  content: {
    flex: 1,
    height: px2dp(262),
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // paddingTop: 10,
    // paddingBottom: 10,
  },

  title: {
    fontSize: px2dp(46),
    color: '#000',
  },

  desc: {
    fontSize: px2dp(34),
  },

  time: {
    fontSize: px2dp(38),
    color: '#8e8e8e',
  },

  infoWrapper: {
    position: 'absolute',
    right: -10,
    bottom: 0,
    flexDirection: 'row',
  },

  label: {
    height: px2dp(50),
    borderWidth: 1,
    borderColor: '#eee',
    padding: 5,
    backgroundColor: '#fff',
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});