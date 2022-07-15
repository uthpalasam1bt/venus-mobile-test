import {NavigationContainer} from '@react-navigation/native';
import {WhiteSpace, Steps, WingBlank} from '@ant-design/react-native';
import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Collapse, CollapseBody, CollapseHeader} from '../collapseMenu';

const Step = Steps.Step;
const Drawer = createDrawerNavigator();
function Feed() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Article Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  const _renderView = () => {
    return (
      <View>
        <Text>wwew</Text>
      </View>
    );
  };
  const _renderCollapseView = () => {
    return (
      <View>
        <Steps>
          <Step title="sd" />
        </Steps>
      </View>
    );
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={{margin: 20}}>
        <Collapse>
          <CollapseHeader>
            <Text style={{color: 'black', fontSize: 18}}>Master Workflow</Text>
          </CollapseHeader>

          <CollapseBody>
            <View>
              <Steps>
                <Step
                  renderIcon={({starting, waiting, error}) => (
                    <View style={styles.icon}>
                      <Icon name="check" color="white" />
                    </View>
                  )}
                  title={
                    <View>
                      <Text style={styles.steptext}>
                        Activate Classification
                      </Text>
                    </View>
                  }
                  status="finish"></Step>

                <Step
                  renderIcon={({starting, waiting, error}) => (
                    <View style={styles.icon}>
                      <Icon name="check" color="white" />
                    </View>
                  )}
                  title={
                    <View>
                      <Text style={styles.steptext}>
                        Activate Classification
                      </Text>
                    </View>
                  }
                  status="finish"></Step>
                <Step
                  renderIcon={({starting, waiting, error}) => (
                    <View style={styles.icon}>
                      <Icon name="close" color="white" />
                    </View>
                  )}
                  title={
                    <View>
                      <Text style={styles.steptext}>
                        Activate Classification
                      </Text>
                    </View>
                  }
                  status="error"></Step>
                <Step
                  renderIcon={({starting, waiting, error}) => (
                    <View style={styles.icon}>
                      <Icon name="check" color="white" />
                    </View>
                  )}
                  title={
                    <View>
                      <Text style={styles.steptext}>
                        Activate Classification
                      </Text>
                    </View>
                  }
                  status="progress"></Step>
                <Step
                  renderIcon={({starting, waiting, error}) => (
                    <View style={styles.icon}>
                      <Icon name="check" color="white" />
                    </View>
                  )}
                  title={
                    <View>
                      <Text style={styles.steptext}>
                        Activate Classification
                      </Text>
                    </View>
                  }
                  status="wait"></Step>
              </Steps>
            </View>
          </CollapseBody>
        </Collapse>
      </View>
    </DrawerContentScrollView>
  );
}
const Sidebar = () => {
  let drawer;

  const onOpenChange = isOpen => {
    /* tslint:disable: no-console */
    console.log('是否打开了 Drawer', isOpen.toString());
  };

  return (
    <>
      <Drawer.Navigator
        useLegacyImplementation
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Article" component={Article} />
      </Drawer.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  drawer_button: {
    position: 'absolute',
    width: 30,
    top: 0,
    left: 0,
    paddingTop: 60,
  },
  steptext: {
    fontSize: 15,
    color: 'black',
  },
  icon: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});

export default Sidebar;
