import format from 'pg-format'
import db from '../database/db_connect.js'

export const findAll = ({ limits = 10, order_by: orderBy = 'stock_ASC', page = 1 }) => {
  const query = 'SELECT * FROM inventario'
  console.log(query)
  const [column, sort] = orderBy.split('_')
  const offset = Math.abs(+page !== 0 ? page - 1 : 0) * limits
  const formattedQuery = format(`${query} ORDER BY %s %s LIMIT %s OFFSET %s;`, column, sort, limits, offset)
  return db(formattedQuery)
}
