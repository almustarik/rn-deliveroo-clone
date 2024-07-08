import { View, Text } from 'react-native';
import React, { forwardRef, useMemo } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ['50%'], []);
  return (
    <BottomSheetModal snapPoints={snapPoints} ref={ref}>
      <View>
        <Text>Bottom Sheet</Text>
      </View>
    </BottomSheetModal>
  );
});

export default BottomSheet;
