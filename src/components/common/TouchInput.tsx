import { FlatList, Modal, StyleSheet } from 'react-native'
import React, { useCallback, useState } from 'react'

import { RNIcon, RNText, RNView, RNPressable, RNInput, RNButton } from 'components/core'

import { SCREEN_SIZE, EColors, EFontSize, EFontWeight, ETextAlign, ESPacing } from 'themes'
import { translate } from 'translate';
import { EIcons } from 'utils';
interface ITouchInput {
  isSearch?: boolean,
  title: string,
  value?: string,
  isPassword?: boolean,
  icon?: string,
  placeholder?: string,
  w?: number,
  h?: number,
  margin?: number,
  mTop?: number,
  mLeft?: number,
  mRight?: number,
  mBottom?: number,
  lines?: number,
  isTouch?: boolean,
  errorMessage?: string,
  onClickItem?: (item: IItemTouch) => void,
  onSearch?: (value: string) => void,
  items: IItemTouch[]
}

const TouchInput = ({
  value,
  title,
  w,
  h,
  mTop,
  mBottom,
  mLeft,
  mRight,
  errorMessage,
  placeholder,
  isSearch = true,
  isTouch,
  items,
  onClickItem,
  onSearch
}: ITouchInput) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  const onVisible = (state: boolean) => () => {
    setVisible(state)
  }

  const onPressItem = (item: IItemTouch) => () => {
    setVisible(false);
    onClickItem && onClickItem(item)
  }

  const onChangeTextSearch = (text: string) => {
    setSearch(text)
    onSearch && onSearch(text)
  }

  const renderItem = useCallback(({ item }: { item: IItemTouch }) => (
    <RNPressable
      h={40}
      center
      onPress={onPressItem(item)}
      color={EColors.border}
      pHoz={10}
      borderRadius={6}
      isBorder
      borderColor={EColors.primary}
    >
      <RNText fontWeight={EFontWeight.medium}>
        {item.name}
      </RNText>
    </RNPressable>
  ), [])

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
        borderColor={value ? EColors.primary : EColors.border}
        onPress={onVisible(true)}
        hozCenter
      >
        <RNView fill>
          {!!value && !!title &&
            <RNText size={14} color={EColors.primaryText} fontWeight={EFontWeight.medium}>{title}</RNText>
          }
          <RNText color={value ? EColors.primaryText : EColors.secondText}>{value || placeholder}</RNText>
        </RNView>
        <RNIcon name={EIcons.angle_down} size={20} />
        <RNView w={5} />
      </RNPressable>
      {
        !!errorMessage && isTouch && <RNText mTop={4} fontWeight={EFontWeight.normal} color={EColors.error} size={EFontSize.size_13}>
          {`${errorMessage}`}
        </RNText>
      }
      <Modal
        animationType="slide"
        visible={visible} style={styles.model}
        statusBarTranslucent={true}
        hardwareAccelerated={false}
      >
        <RNView fill color={EColors.bgLoading} style={styles.modelContent}>
          <RNView color={EColors.bgPage} style={styles.showData} pHoz={24} pTop={ESPacing.space_16} pBottom={ESPacing.space_32}>
            <RNText size={EFontSize.size_16} fontWeight={EFontWeight.bold} textAlign={ETextAlign.center}>{title}</RNText>
            {isSearch &&
              <RNInput title=''
                placeholder={translate('COMMON.search')}
                h={40} isLeftIcon icon={EIcons.search} value={search} onChangeText={onChangeTextSearch} />}
            <FlatList
              showsVerticalScrollIndicator={false}
              style={styles.flatList}
              data={items}
              renderItem={renderItem}
              keyExtractor={(item: IItemTouch, index: number) => `index${index} ${item.id}`}
              ItemSeparatorComponent={() => <RNView h={10} />}
            />
            <RNButton title={translate('COMMON.cancel')} onPress={onVisible(false)} />
          </RNView>
        </RNView>
      </Modal>
    </>
  )
}

export default TouchInput

const styles = StyleSheet.create({
  container: {
    flex: ESPacing.space_1,
    fontSize: EFontSize.primary,
    fontWeight: EFontWeight.normal,
  },
  btnRight: {
    paddingHorizontal: ESPacing.space_5
  },
  model: {
    height: SCREEN_SIZE.height / ESPacing.space_2
  },
  modelContent: {
    justifyContent: 'flex-end'
  },
  showData: {
    borderTopLeftRadius: ESPacing.space_32,
    borderTopRightRadius: ESPacing.space_32,
    maxHeight: SCREEN_SIZE.height - ESPacing.space_100
  },
  flatList: {
    marginTop: ESPacing.space_10
  }
})