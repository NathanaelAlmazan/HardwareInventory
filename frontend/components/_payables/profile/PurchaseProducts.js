import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import dynamic from "next/dynamic";

const Scrollbar = dynamic(() => import("../../Scrollbar"));

function numberWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

export default function PointOfSale(props) {
    const { orderProducts, orderInfo } = props;
    const { amount_due, totalPrice } = orderInfo;
   
    return (
            <Scrollbar>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                    <TableCell align="center" colSpan={3}>
                        Details
                    </TableCell>
                    <TableCell align="right">Price</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell sx={{ width: "50%" }}>Product Name</TableCell>
                    <TableCell align="right">Supplier Price</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Sum</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orderProducts.map(prod => {
                    const { product, quantity, total_price } = prod;

                    return (
                    <TableRow key={product.id}>
                        <TableCell sx={{ width: "40%" }}>{product.name}</TableCell>
                        <TableCell align="right">{product.init_price.toFixed(2)}</TableCell>
                        <TableCell align="right">
                            {quantity}
                        </TableCell>
                        <TableCell align="right">{"₱ " + numberWithCommas(total_price.toFixed(2))}</TableCell>
                    </TableRow>
                    )}
                    )}

                    {orderProducts.length === 0 ?  (
                    <TableRow>
                        <TableCell colSpan={4}>No products selected.</TableCell>
                    </TableRow>
                    ) : (
                    <>
                        <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell align="right">{"₱ " + numberWithCommas(totalPrice.toFixed(2))}</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell colSpan={2}>Amount Due</TableCell>
                        <TableCell align="right">
                            {"₱ " + numberWithCommas(amount_due.toFixed(2))}
                        </TableCell>
                        </TableRow>
                    </>
                    )}

                    
                </TableBody>
                </Table>
            </Scrollbar>
    )
}