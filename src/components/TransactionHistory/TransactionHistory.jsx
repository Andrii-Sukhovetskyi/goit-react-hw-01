import clsx from "clsx";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.tableHeader}>
        <tr>
          <th className={styles.headerCell}>Type</th>
          <th className={styles.headerCell}>Amount</th>
          <th className={styles.headerCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr className={styles.bodyRow} key={id}>
              <td className={clsx([styles.bodyCell], [styles.typeCell])}>{type}</td>
              <td className={clsx([styles.bodyCell], [styles.amountCell])}>{amount}</td>
              <td className={clsx([styles.bodyCell], [styles.currencyCell])}>
                {currency}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;