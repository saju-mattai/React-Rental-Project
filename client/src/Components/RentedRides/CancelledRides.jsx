import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Figure } from "react-bootstrap";
import { Button } from "@mui/material";

function CancelledRides({ data }) {
  console.log(data);
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          height: 600,
        }}
      >
        <Table
          sx={{
            height: "max-content",
          }}
          aria-label="simple table"
        >
          <TableHead
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              backgroundColor: "#fff",
            }}
          >
            <TableRow>
              <TableCell>Sl.No</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Bike Name</TableCell>
              <TableCell align="center">Starting Time</TableCell>
              <TableCell align="center">Ending Time</TableCell>
              <TableCell align="center">Total Hours</TableCell>
              <TableCell align="center">Total Amount</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.length > 0 ? (
              data.map((row, i) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {i + 1}
                  </TableCell>
                  <TableCell align="center">
                    <Figure>
                      <Figure.Image
                        width={171}
                        height={180}
                        alt="llll"
                        src={row?.BikePhoto}
                      />
                      <Figure.Caption></Figure.Caption>
                    </Figure>
                  </TableCell>
                  <TableCell align="center">{row.BikeName}</TableCell>
                  <TableCell align="center">{row.startdate}</TableCell>
                  <TableCell align="center">{row.enddate}</TableCell>
                  <TableCell align="center">{row.totalHour}</TableCell>
                  <TableCell align="center">Rs.{row.totalAmount}</TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={10} align="center">
                  No data
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>                                                                                                
      </TableContainer>
    </>
  );
}

export default CancelledRides;
