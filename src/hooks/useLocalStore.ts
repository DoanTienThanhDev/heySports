import AsyncStorage from '@react-native-async-storage/async-storage';

export const useGetLocalStore = async <T>(key: string): Promise<T | null> => {
  const value = await AsyncStorage.getItem(key)
  if (value !== null) {
    return JSON.parse(value)
  }
  return null
}

export const useSetLocalStore = <T>(key: string, value: T) => {
  AsyncStorage.setItem(key, JSON.stringify(value))
}

export const useRemoveLocalStore = (key: string) => {
  AsyncStorage.removeItem(key)
}