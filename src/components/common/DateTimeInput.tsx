import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { RNIcon, RNText, RNView, RNPressable } from 'components/core'

import { COLORS, FONTS, SCREENS } from 'themes'

interface IDateTimeInput {
  title: string,
  date?: string | Date,
  mode?: ITimeMode,
  placeholder?: string,
  w?: number,
  h?: number,
  margin?: number,
  mTop?: number,
  mLeft?: number,
  mRight?: number,
  mBottom?: number,
  lines?: number,
  errorMessage?: string,
  isTouch?: boolean,
  onSelectDateTime: (time: Date) => void,
}

const DateTimeInput = ({
  date,
  title,
  w,
  h,
  mTop,
  mBottom,
  mLeft,
  mRight,
  errorMessage,
  placeholder,
  onSelectDateTime,
  mode,
  isTouch
}: IDateTimeInput) => {
  const [visible, setVisible] = useState<boolean>(false)
  let newDate = new Date(date || new Date())

  const onVisible = (state: boolean) => () => {
    setVisible(state)
  }

  const onConfirm = (date: Date) => {
    setVisible(false)
    onSelectDateTime && onSelectDateTime(date)
  }

  return (
    < >
      <RNPressable
        borderRadius={FONTS.primaryRadius}
        isBorder
        h={h || FONTS.height}
        w={w}
        mTop={mTop || FONTS.s16}
        mLeft={mLeft}
        mRight={mRight}
        mBottom={mBottom}
        pVer={FONTS.s4}
        pHoz={FONTS.s6}
        isRow
        borderColor={date ? COLORS.primary : COLORS.border}
        onPress={onVisible(true)}
        hozCenter
      >
        <RNIcon name={'calendar'} size={20} color={COLORS.gray} />
        <RNView fill mLeft={6}>
          {!!date && !!title &&
            <RNText size={14} color={COLORS.primaryText} fontWeight="600">{title}</RNText>
          }
          <RNText color={date ? COLORS.primaryText : COLORS.secondText}>{`${date || placeholder}`}</RNText>
        </RNView>
      </RNPressable>
      {
        !!errorMessage && isTouch && <RNText mTop={4} fontWeight='400' color={COLORS.error} size={FONTS.s13}>
          {errorMessage}
        </RNText>
      }
      <DateTimePickerModal
        isVisible={visible}
        mode={mode}
        date={newDate}
        display="spinner"
        onCancel={() => onVisible(false)}
        onConfirm={onConfirm} />
    </>
  )
}

export default DateTimeInput

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: FONTS.s14,
    fontWeight: "400",
  },
  btnRight: {
    paddingHorizontal: 5
  },
  model: {
    height: SCREENS.height / 2
  },
  modelContent: {
    justifyContent: 'flex-end'
  },
  showData: {
    borderTopLeftRadius: FONTS.s32,
    borderTopRightRadius: FONTS.s32,
    maxHeight: SCREENS.height - 100
  },
  flatList: {
    marginTop: 10
  }
})