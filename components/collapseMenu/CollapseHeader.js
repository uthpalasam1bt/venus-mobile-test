import React from 'react';
import {View, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();
const CollapseHeader = React.forwardRef(
  (
    {
      children,
      showArrow,
      show,
      arrowSize,
      arrowColor,
      arrowStyle,
      customArrowUp,
      customArrowDown,
      ...restProps
    },
    ref,
  ) => {
    const opacity =  1;
    return (
      <View ref={ref} {...restProps} style={{paddingBottom: 20}}>
        <View style={[styles.arrow]}>
          {children}
          <View style={[arrowStyle, {opacity}]}>
            {show
              ? customArrowUp(arrowSize, arrowColor)
              : customArrowDown(arrowSize, arrowColor)}
          </View>
        </View>
      </View>
    );
  },
);

CollapseHeader.defaultProps = {
  arrowStyle: {},
  arrowColor: '#000',
  showArrow: true,
  arrowSize: 15,
  customArrowUp: (size, color) => (
    <Feather name="chevron-up" size={size} color={color} />
  ),
  customArrowDown: (size, color) => (
    <Feather name="chevron-down" size={size} color={color} />
  ),
};

const styles = StyleSheet.create({
  arrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});

export default CollapseHeader;
