import usePagination from "../../../hooks/Dashboard/usePagination";

import Pagination from "./Pagination/Pagination";

import styles from "./Table.module.css";

interface Column {
  header: string;
  key: string;
}

interface Action<T> {
  label?: string;
  icon?: string;
  onClick: (row: T) => void;
}

interface Signal {
  label: string;
  function: (data: unknown) => number;
}

interface Props<T> {
  columns: Column[];
  data: Array<T>;
  actions?: Action<T>[];
  signals?: Signal[];
}

export default function Table<T>({
  columns,
  data,
  actions,
  signals,
}: Props<T>) {
  const pagination = usePagination(data);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            {/* DATA */}
            {columns.map((col, index) => (
              <th key={index}>{col.header}</th>
            ))}

            {/* SIGNALS */}
            {signals?.map((signal) => (
              <th>{signal.label}</th>
            ))}

            {/* ACTIONS */}
            {actions &&
              actions.length > 0 &&
              actions.map((action) => (
                <th className={styles.actions}>
                  <span>{action.label}</span>
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {/* Add data */}
                {columns.map((column, colIndex) => (
                  <td key={colIndex}>
                    {row[column.key as keyof typeof data.keys]}
                  </td>
                ))}

                {/* Alert signal */}
                {signals?.map((signal) => {
                  const state = signal.function(row);
                  return (
                    <td className={styles.signalCell}>
                      <div
                        className={`${styles.signal} ${
                          state === 1
                            ? styles.state1
                            : state === 2
                            ? styles.state2
                            : state === 3
                            ? styles.state3
                            : ""
                        }`}
                      ></div>
                    </td>
                  );
                })}

                {/* Add dinamic buttons */}
                {actions &&
                  actions.length > 0 &&
                  actions.map((action, actionIndex) => (
                    <td className={styles.actions} style={{ width: "20px" }}>
                      <button
                        className="btn btn-outline-primary"
                        key={actionIndex}
                        onClick={() => action.onClick(row)}
                      >
                        {action.icon ? (
                          <img src={action.icon} alt="file" />
                        ) : (
                          action.label
                        )}
                      </button>
                    </td>
                  ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={10} className={styles.empty}>
                No hay datos
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination page={pagination.page} setPage={pagination.setPage} />
    </div>
  );
}
