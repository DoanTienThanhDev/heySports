import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { RNIcon, RNText, RNView, RNPressable } from 'components/core'

import { EColors, EFontSize, EFontWeight, ESPacing } from 'themes'
import { EIcons } from 'utils';

interface IDateTimeInput {
  title: string,
  date?: string | Date,
  mode?: ITimeMode,
  errorMessage?: string,
  placeholder?: string,
  w?: ESPacing,
  h?: ESPacing,
  margin?: ESPacing,
  mTop?: ESPacing,
  mLeft?: ESPacing,
  mRight?: ESPacing,
  mBottom?: ESPacing,
  lines?: ESPacing,
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
        borderRadius={ESPacing.space_radius}
        isBorder
        h={h || ESPacing.space_height}
        w={w}
        mTop={mTop || ESPacing.space_16}
        mLeft={mLeft}
        mRight={mRight}
        mBottom={mBottom}
        pVer={ESPacing.space_4}
        pHoz={ESPacing.space_6}
        isRow
        borderColor={date ? EColors.primary : EColors.border}
        onPress={onVisible(true)}
        hozCenter
      >
        <RNIcon name={EIcons.calendar} size={EFontSize.size_20} color={EColors.gray} />
        <RNView fill mLeft={ESPacing.space_6}>
          {!!date && !!title &&
            <RNText size={EFontSize.primary} color={EColors.primaryText} fontWeight={EFontWeight.medium}>{title}</RNText>
          }
          <RNText color={date ? EColors.primaryText : EColors.secondText}>{`${date || placeholder}`}</RNText>
        </RNView>
      </RNPressable>
      {
        !!errorMessage && isTouch && <RNText mTop={4} fontWeight={EFontWeight.normal} color={EColors.error} size={EFontSize.size_13}>
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