import { initMovement, Movement } from "../../interfaces/Movement";
import { useStore } from "./useStore";
import { Product } from "../../interfaces/Product";
import { useAuth } from "../Auth/useAuth";
import useLoading from "./useLoading";
import useMovements from "./useMovements";
import Swal from "sweetalert2";

interface UseCarrito {
  data: Movement;
  addItem: (products: Product) => void;
  setItems: (products: Product[]) => void;
  getItems: () => Product[];
  deleteItem: (index: number) => void;
  submit: () => Promise<void>;
  clear: () => void;
}

export default function useCarrito(): UseCarrito {
  const loading = useLoading();
  const movement = useMovements();
  const { store, setStore } = useStore();
  const auth = useAuth();

  console.log(auth);

  function addItem(products: Product): void {
    if (products.totalStock > 1) {
      // Add item
      const updatedItems = [...store.cart.items, products];

      // Update store
      setStore({
        ...store,
        cart: {
          ...store.cart,
          items: updatedItems,
        },
      });
    }
  }

  function setItems(mercancia: Product[]): void {
    setStore({
      ...store,
      cart: {
        ...store.cart,
        items: mercancia,
      },
    });
  }

  function getItems(): Product[] {
    return store.cart.items;
  }

  const deleteItem = (index: number) => {
    const filteredItems = store.cart.items.filter(
      (_: Product, i: number) => i !== index
    );
    setItems(filteredItems);
  };

  async function submitCarrito(): Promise<void> {
    try {
      loading.open();
      // Realizamos el movimiento de los items
      const newStore = await movement.set({
        ...store.cart,
        date: new Date(),
      });

      // Limpiamos el cart
      setStore({
        ...newStore,
        cart: initMovement(),
        loading: false,
      });

      Swal.fire("Guardado", "Venta registrada con éxito", "success");
    } catch (error) {
      loading.close();
      console.log(error);
      Swal.fire("Guardado", "No se pudo registrar la venta", "error");
    }
  }

  function clearCarrito() {
    if (store.cart.items.length > 0) {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "Se eliminarán todos los productos del cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, limpiar cart",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          setStore({
            ...store,
            cart: initMovement(),
          });
        }
      });
    }
  }

  return {
    data: store.cart,

    addItem,
    setItems,
    getItems,
    deleteItem,
    submit: submitCarrito,
    clear: clearCarrito,
  };
}
