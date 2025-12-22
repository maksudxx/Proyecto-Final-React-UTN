import { options } from "../../data/DataMenu";
import styles from "./MenuAside.module.css";

export const MenuAside = () => {
  return (
    <aside className={styles.menuContainer}>
      {options?.map(({ name, data }) => (
        <div key={name}>
          <p className={styles.title}>{name}</p>
          {data?.map(({ name, icon: Icon }) => (
            <div key={name} className={styles.item}>
              <p className={styles.option}>
                <span>
                  <Icon />
                </span>{" "}
                {name}
              </p>
            </div>
          ))}
        </div>
      ))}
    </aside>
  );
};
