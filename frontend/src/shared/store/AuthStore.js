import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(persist((set) => ({
    token: null,
    refreshToken: null,
    isLoggedIn: false,
    userId: null,
    nickname: null,
    email: null,


    setToken: (token) => set({ token }),
    setRefreshToken: (refreshToken) => set({ refreshToken }),
    setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),

    setUserId: (userId) => set({ userId }),
    setNickname: (nickname) => set({ nickname }),
    setEmail: (email) => set({ email }),
    logout: () => set({ token: null, refreshToken: null, isLoggedIn: false, userId: null, nickname: null, email: null }),
}), {
    name: 'auth_store',
}));

export default useAuthStore;