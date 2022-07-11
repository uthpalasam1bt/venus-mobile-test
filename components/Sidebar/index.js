import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View, ScrollView } from "react-native";

const Sidebar = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
     <ScrollView>
     <Text>sdsdsd</Text>
    <Text>sdsdsd</Text>

    <Text>sdsdsd</Text>

    <Text>sdsdsd</Text>

    <Text>sdsdsd</Text>

    <Text>sdsdsd</Text>
     </ScrollView>
  

      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <>
    
       
     
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <View  style={styles.drawer_button}>
    <Button
         
          title=">"
          onPress={() => drawer.current.openDrawer()}
        />
    </View>
    </DrawerLayoutAndroid>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  },
  drawer_button:{
    position:'absolute',
    width:30,
    top: 0,
    left: 0,
    paddingTop:60,
  }
});

export default Sidebar;