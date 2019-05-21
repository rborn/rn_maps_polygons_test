/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Polygon, Circle } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

const polygon = [
    {
        latitude: LATITUDE + SPACE,
        longitude: LONGITUDE + SPACE
    },
    {
        latitude: LATITUDE - SPACE,
        longitude: LONGITUDE - SPACE
    },
    {
        latitude: LATITUDE - SPACE,
        longitude: LONGITUDE + SPACE
    }
];

const circle = {
    center: {
        latitude: LATITUDE + SPACE,
        longitude: LONGITUDE + SPACE
    },
    radius: 700
};

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                // other props
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            >
                <Polygon
                    coordinates={polygon}
                    fillColor="rgba(0, 200, 0, 0.5)"
                    strokeColor="rgba(0,0,0,0.5)"
                    strokeWidth={2}
                />
                <Circle
                    center={circle.center}
                    radius={circle.radius}
                    fillColor="rgba(255, 255, 255, 1)"
                    strokeColor="rgba(0,0,0,0.5)"
                    zIndex={2}
                    strokeWidth={2}
                />
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject
    }
});
