import create from 'zustand'

interface IModalLogin {
  modal: boolean
  toggle: (modal: boolean) => void
}

const useLoginModal = create<IModalLogin>((set) => ({
  modal: false,
  toggle: (modal: boolean) => set(() => ({ modal })),
}))

export default useLoginModal
