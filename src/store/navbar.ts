import create from 'zustand'

interface NavTab {
  tab: string | null
  toggle: (tab: string) => void
}

const useNavTab = create<NavTab>((set) => ({
  tab: null,
  toggle: (tab: string) =>
    set((state) => {
      if (state.tab === tab) return { tab: null }
      return { tab }
    }),
}))

export default useNavTab
