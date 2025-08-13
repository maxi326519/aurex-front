import { useStore } from "./useStore";

export default function useLoading() {
  const { store, setStore } = useStore();

  function openLoading() {
    setStore({ ...store, loading: true });
  }

  function closeLoading() {
    setStore({ ...store, loading: false });
  }

  return {
    state: store.loading,
    open: openLoading,
    close: closeLoading,
  };
}
