import { StoreState } from "../../interfaces/StoreState";
import { Movement } from "../../interfaces/Movement";
import { useStore } from "./useStore";
import { useAuth } from "../useAuth";
import useLoading from "./useLoading";

interface UseMovements {
  data: Movement[];
  set: (movement: Movement) => Promise<StoreState>;
  get: () => Promise<void>;
  update: (movement: Movement) => Promise<void>;
  delete: (movement: Movement) => Promise<void>;
}

export default function useMovements(): UseMovements {
  const { sesion } = useAuth();
  const { store, setStore } = useStore();
  const loading = useLoading();

  console.log(sesion);

  // Add a new Movement
  async function setMovements(movement: Movement): Promise<StoreState> {
    // Api post

    // Get id and count of products selled
    const data: { id: string; quantity: number }[] = [];
    movement.items.forEach((item) => {
      const itemSell = data.find((d) => d.id === item.id);
      if (itemSell) itemSell.quantity++;
      else data.push({ id: item.id!, quantity: 1 });
    });

    // Update products quantity
    const newMerc = store.products.map((merc) => {
      const itemSell = data.find((d) => d.id === merc.id);
      if (itemSell) {
        const mercUpdated = {
          ...merc,
          quantity: merc.quantity - itemSell.quantity,
        }; // Update local data
        return mercUpdated;
      } else return merc;
    });

    return {
      ...store,
      products: newMerc,
      history: [...store.history, movement],
      loading: false,
    };
  }

  // Retrieve all Movements
  async function getMovements(): Promise<void> {
    try {
      loading.open();

      // Api get

      setStore({
        ...store,
        history: [],
        loading: false,
      });
    } catch (error) {
      loading.close();
      console.error("Error fetching Movements: ", error);
    }
  }

  // Update a Movement
  async function updateMovements(movement: Movement): Promise<void> {
    try {
      loading.open();

      // Api update

      setStore({
        ...store,
        history: store.history.map((data) =>
          data.id === movement.id ? movement : data
        ),
        loading: false,
      });
    } catch (error) {
      loading.close();
      console.error("Error updating Movement: ", error);
    }
  }

  // Delete a Movement
  async function deleteMovements(movement: Movement): Promise<void> {
    try {
      loading.open();

      // Api delete

      setStore({
        ...store,
        history: store.history.filter((data) => data.id !== movement.id),
        loading: false,
      });
    } catch (error) {
      loading.close();
      console.error("Error deleting Movement: ", error);
    }
  }

  return {
    data: store.history,
    set: setMovements,
    get: getMovements,
    update: updateMovements,
    delete: deleteMovements,
  };
}
