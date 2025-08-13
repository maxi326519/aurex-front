import { useEffect, useState } from "react";


import styles from "./UserForm.module.css";
import Input from "../../Inputs/Input";
import { initUser, User, UserRol } from "../../../../interfaces/Users";
import SelectInput from "../../Inputs/SelectInput";

interface Props {
  title: string;
  data?: User;
  onClose: () => void;
  onSubmit: (data: User) => Promise<void>;
}

export default function UserForm({ title, data, onClose, onSubmit }: Props) {
  const [formData, setFormData] = useState<User>(initUser());

  useEffect(() => {
    if (data) setFormData(data);
  }, []);

  function handleClose() {
    onClose();
    // handleReset();
  }

  // function handleReset() {
  //   setFormData();
  // }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    // Get values
    const { name, value } = event.target;

    // Update data
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (handleValidations()) {
      onSubmit(formData!);
    }
  }

  function handleValidations(): boolean {
    const value = true;
    return value;
  }

  return (
    <div className={styles.background}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <header className={styles.header}>
          <h3>{title}</h3>
          <button onClick={handleClose}>X</button>
        </header>
        <div className={styles.content}>
          <Input
            name="name"
            label="Nombre"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            name="email"
            label="Correo"
            value={formData.email}
            onChange={handleChange}
          />
          <SelectInput
            name="rol"
            label="Rol"
            value={formData.rol}
            list={Object.values(UserRol)}
            onChange={handleChange}
          />
        </div>
        <div className={styles.btnContainer}>
          <button className="btn-primary" type="submit">
            {data ? "Actualizar" : "Agregar"}
          </button>
          <button className="btn-primary" type="button">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
