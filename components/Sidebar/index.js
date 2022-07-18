import {WhiteSpace, Steps, WingBlank} from '@ant-design/react-native';
import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
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
  const {navigation} = props;
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.closeDrawer}>
        <MatIcon
          name="backburger"
          color="white"
          size={20}
          onPress={() => {
            navigation.closeDrawer();
          }}
        />
      </View>
      <View style={styles.container}>
        <Collapse>
          <CollapseHeader>
            <Text style={{color: 'black', fontSize: 14}}>Master Workflow</Text>
          </CollapseHeader>

          <CollapseBody>
            <View style={styles.divider} />
            <Steps>
              <Step
                renderIcon={({starting, waiting, error}) => (
                  <View style={styles.icon}>
                    <Icon name="clockcircleo" color="white" />
                  </View>
                )}
                title={
                  <View>
                    <Text style={styles.steptext}>Activate Classification</Text>
                  </View>
                }
                status="process"
              />

              <Step
                renderIcon={({starting, waiting, error}) => (
                  <View style={styles.icon}>
                    <Icon name="clockcircleo" color="white" />
                  </View>
                )}
                title={
                  <View>
                    <Text style={styles.steptext}>Activate Classification</Text>
                  </View>
                }
                status="process"
              />
              <Step
                renderIcon={({starting, waiting, error}) => (
                  <View style={styles.icon}>
                    <Icon name="clockcircleo" color="white" />
                  </View>
                )}
                title={
                  <View>
                    <Text style={styles.steptext}>Activate Classification</Text>
                  </View>
                }
                status="process"
              />
            </Steps>
          </CollapseBody>
        </Collapse>
        <Collapse>
          <CollapseHeader>
            <Text style={{color: 'black', fontSize: 14}}>
              Registrarion Workflow
            </Text>
          </CollapseHeader>

          <CollapseBody>
            <View style={styles.divider} />
            <Steps>
              <Step
                renderIcon={({starting, waiting, error}) => (
                  <View style={styles.icon}>
                    <Icon name="clockcircleo" color="white" />
                  </View>
                )}
                title={
                  <View>
                    <Text style={styles.steptext}>Activate Classification</Text>
                  </View>
                }
                status="process"
              />

              <Step
                renderIcon={({starting, waiting, error}) => (
                  <View style={styles.icon}>
                    <Icon name="clockcircleo" color="white" />
                  </View>
                )}
                title={
                  <View>
                    <Text style={styles.steptext}>Activate Classification</Text>
                  </View>
                }
                status="process"
              />
              <Step
                renderIcon={({starting, waiting, error}) => (
                  <View style={styles.icon}>
                    <Icon name="clockcircleo" color="white" />
                  </View>
                )}
                title={
                  <View>
                    <Text style={styles.steptext}>Activate Classification</Text>
                  </View>
                }
                status="process"
              />
            </Steps>
          </CollapseBody>
        </Collapse>
      </View>
    </DrawerContentScrollView>
  );
}
const Sidebar = () => {
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
    marginTop: 60,
    marginHorizontal: 20,
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
    fontSize: 13,
    color: 'black',
  },
  icon: {
    backgroundColor: '#FFD400',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeDrawer: {
    backgroundColor: '#00AA55',
    height: 40,
    width: 59,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    borderBottomEndRadius: 5,
  },
  divider: {
    borderBottomColor: '#9B9FA3',
    borderBottomWidth: 0.5,
    marginBottom: 25,
  },
});

export default Sidebar;
