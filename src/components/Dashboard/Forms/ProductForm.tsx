import { initProduct, Product, ProductType } from "../../../interfaces/Product";
import { useEffect, useState } from "react";

import Input from "../Inputs/Input";
import SelectInput from "../Inputs/SelectInput";

interface Props {
  title: string;
  data?: Product;
  onClose: () => void;
  onSubmit: (data: Product) => Promise<void>;
}

export default function ProductForm({ title, data, onClose, onSubmit }: Props) {
  const [formData, setFormData] = useState<Product>(initProduct());
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (data) setFormData(data);
  }, []);

  function handleClose() {
    onClose();
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file })); // Assuming `image` is a part of `Product` interface
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (handleValidations()) {
      onSubmit(formData!);
    }
  }

  function handleValidations(): boolean {
    return true; // Add your validation logic here
  }

  return (
    <div className="fixed inset-0 z-40 flex justify-center items-center p-5 w-full h-full bg-[#0003]">
      <form
        className="flex flex-col gap-5 max-w-[600px] w-full p-5 rounded-sm border bg-white"
        onSubmit={handleSubmit}
      >
        <header className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            className="p-2 text-gray-500 hover:text-red-500 bg-transparent"
            onClick={handleClose}
            type="button"
          >
            X
          </button>
        </header>

        <div className="flex gap-6">
          {/* Lado Izquierdo */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 border border-gray-300 rounded-md overflow-hidden">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Vista previa"
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-gray-400 flex justify-center items-center h-full">
                  Sin Imagen
                </span>
              )}
            </div>
            <label className="btn-secondary cursor-pointer">
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
              Cargar Imagen
            </label>
          </div>

          {/* Lado Derecho */}
          <div className="grow flex flex-col gap-5 w-full md:w-1/2">
            <Input
              name="name"
              label="Nombre del Producto"
              value={formData.name || ""}
              onChange={handleChange}
            />
            <SelectInput
              label="Tipo de producto"
              name="type"
              list={Object.values(ProductType).filter((type) => type)}
              value={formData.type || ""}
              onChange={handleChange}
            />
          </div>
          
        </div>
        <div className="flex justify-end gap-2 pt-2 border-t-[1px] border-[#ccc]">
          <button className="btn-primary" type="submit">
            {data ? "Actualizar" : "Agregar"}
          </button>
          <button className="btn-secondary" type="button" onClick={handleClose}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
