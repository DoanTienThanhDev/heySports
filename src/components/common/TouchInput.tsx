import { FlatList, Modal, StyleSheet } from 'react-native'
import React, { useCallback, useState } from 'react'

import { RNIcon, RNText, RNView, RNPressable, RNInput, RNButton } from 'components/core'

import { COLORS, FONTS, SCREENS } from 'themes'
import { translate } from 'translate';
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
      color={COLORS.border}
      pHoz={10}
      borderRadius={6}
      isBorder
      borderColor={COLORS.primary}
    >
      <RNText fontWeight='600'>
        {item.name}
      </RNText>
    </RNPressable>
  ), [])

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
        borderColor={value ? COLORS.primary : COLORS.border}
        onPress={onVisible(true)}
        hozCenter
      >
        <RNView fill>
          {!!value && !!title &&
            <RNText size={14} color={COLORS.primaryText} fontWeight="600">{title}</RNText>
          }
          <RNText color={value ? COLORS.primaryText : COLORS.secondText}>{value || placeholder}</RNText>
        </RNView>
        <RNIcon name={'angle-down'} size={20} />
        <RNView w={5} />
      </RNPressable>
      {
        !!errorMessage && isTouch && <RNText mTop={4} fontWeight='400' color={COLORS.error} size={FONTS.s13}>
          {`${errorMessage}`}
        </RNText>
      }
      <Modal
        animationType="slide"
        visible={visible} style={styles.model}
        statusBarTranslucent={true}
        hardwareAccelerated={false}
      >
        <RNView fill color={COLORS.bgLoading} style={styles.modelContent}>
          <RNView color={COLORS.bgPage} style={styles.showData} pHoz={24} pTop={FONTS.s16} pBottom={FONTS.s32}>
            <RNText size={FONTS.s16} fontWeight="bold" textAlign='center'>{title}</RNText>
            {isSearch &&
              <RNInput title=''
                placeholder={translate('COMMON.search')}
                h={40} isLeftIcon icon='search' value={search} onChangeText={onChangeTextSearch} />}
            <FlatList
              showsVerticalScrollIndicator={false}
              style={styles.flatList}
              data={items}
              renderItem={renderItem}
              keyExtractor={(item: IItemTouch, index: number) => `index${index} ${item.id}`}
              ItemSeparatorComponent={() => <RNView h={10} />}
            />
            <RNButton title="Cancel" onPress={onVisible(false)} />
          </RNView>
        </RNView>
      </Modal>
    </>
  )
}

export default TouchInput

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