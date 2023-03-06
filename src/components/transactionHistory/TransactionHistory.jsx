import css from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

export const TransactionHistory = ({data})=>{
    return(
    <table className={css.transactionTable}>
  <thead className={css.transactionTable__head}>
    <tr>
      <th className={css.transactionTable__th}>Type</th>
      <th className={css.transactionTable__th}>Amount</th>
      <th className={css.transactionTable__th}>Currency</th>
    </tr>
  </thead>

  <tbody>
  {data.map(item=>(
    <tr key={item.id} className={css.transactionTable__tr}>
      <td className={css.transactionTable__td}>{item.type}</td>
      <td className={css.transactionTable__td}>{item.amount}</td>
      <td className={css.transactionTable__td}>{item.currency}</td>
    </tr>))}
  </tbody>
</table>)
}
TransactionHistory.propTypes={
    data:PropTypes.array,
};