import create from "zustand";

const StudentStore = create((set) => ({
    name: null,
    age: null,
    address: null,
    gender: null,
    data: [],
    datasearch: null,
    isModal: false,
    setIsModal: (value) => set({ isModal: value }),
    setData: (value) => set({ data: value }),
    setsearch: (value) => set({ datasearch: value }),
    setName: (value) => set({ name: value }),
    setAge: (value) => set({ age: value }),
    setAddress: (value) => set({ address: value }),
    setGender: (value) => set({ gender: value }),
}));

export default StudentStore;