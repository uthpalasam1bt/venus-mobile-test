/**
 * @flow
 */

 import React, {useState, useEffect} from 'react';
 import {View, TouchableOpacity} from 'react-native';
 import CollapseHeader from './CollapseHeader';
 import CollapseBody from './CollapseBody';
 
 const Collapse = React.forwardRef(
   (
     {
       isExpanded = false,
       disabled = false,
       onToggle = () => undefined,
       handleLongPress = () => undefined,
       touchableOpacityProps = {},
       children,
       ...restProps
     },
     ref,
   ) => {
     const [show, setShow] = useState(isExpanded);
     useEffect(() => {
       setShow(isExpanded);
     }, [isExpanded]);
     let header = null;
     let body = null;
     React.Children.forEach(children, child => {
       if (React.isValidElement(child) && child.type === CollapseHeader) {
        header =React.cloneElement(child, { show });
       
       } else if (child.type === CollapseBody) {
         body = child;
       }
     });
     if (header === null) {
       console.warn(
         "header wasn't found to be rendered. Please make sure you have wrapped an CollapseHeader in the Collapse Component.",
       );
       return null;
     } else {
       return (
         <View ref={ref} {...restProps}>
           <TouchableOpacity
             {...touchableOpacityProps}
             disabled={disabled}
             onPress={() => {
               onToggle(!show);
               setShow(!show);
             }}
             onLongPress={handleLongPress}>
                {header}
           </TouchableOpacity>
           {show && body}
         </View>
       );
     }
     // eslint-disable-next-line prettier/prettier
   }
 );
 
 export default Collapse;
 