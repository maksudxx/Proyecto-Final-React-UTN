import { useState } from "react";
import { options } from "../../data/DataMenu";
import styles from "./MenuAside.module.css";

export const MenuAside = () => {
  const [click, setClick] = useState(false);
  return (
    <aside className={styles.menuContainer}>
      {options?.map(({ name, data }) => (
        <div>
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

// export const MenuAside = () => {
//   return (
//     <aside className={styles.menuContainer}>
//       {options?.map(({ name, data }) => (
//         <Accordion className={styles.accordion}>
//           <AccordionSummary
//             expandIcon={data ? <ArrowDropDownIcon /> : undefined}
//             className={styles.accordionSummary}
//           >
//             <Typography component="span">{name}</Typography>
//           </AccordionSummary>
//           {data?.map((d) => (
//             <AccordionDetails>
//               <Typography>{d}</Typography>
//             </AccordionDetails>
//           ))}
//         </Accordion>
//       ))}
//     </aside>
//   );
// };
