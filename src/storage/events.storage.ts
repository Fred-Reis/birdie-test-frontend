import create from "zustand";
import api from "../services/api";
import { EventPropsDTO } from "../types/eventPropsDTO";

interface StoreType {
  events: EventPropsDTO[];
  setEvents: (data: any) => Promise<any>;
}

export const useStore = create<StoreType>((set) => ({
  events: [],
  setEvents: async (page: number) => {
    const eventsData = await api.get(`events/${page || 0}`);

    set({ events: await eventsData.data });
    return eventsData;
  },
}));
