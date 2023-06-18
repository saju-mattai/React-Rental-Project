import React from "react";
import MUIDataTable from "mui-datatables";
import moment from "moment";

function MonthlyReport({ salesData }) {
  const columns = [
    {
      name: "bike",
      label: "Bike",
      options: {
        filter: true,
        sort: true,
        customHeadLabelStyle: {
          fontWeight: "bold",
          fontSize: "16px",
          textAlign: "center",
        },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <div style={{ textAlign: "center" }}>{value}</div>;
        },
      },
    },
    {
      name: "image",
      label: "Image",
      options: {
        filter: true,
        sort: true,
        customHeadLabelStyle: {
          fontWeight: "bold",
          fontSize: "16px",
          textAlign: "center",
        },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <img src={value} alt="Bike" style={{ width: "100px" }} />;
        },
      },
    },
    {
      name: "location",
      label: "Location",
      options: {
        filter: true,
        sort: true,
        customHeadLabelStyle: {
          fontWeight: "bold",
          fontSize: "16px",
          textAlign: "center",
        },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <div style={{ textAlign: "center" }}>{value}</div>;
        },
      },
    },
    {
      name: "bookedAt",
      label: "Booked Date",
      options: {
        filter: true,
        sort: false,
        customHeadLabelStyle: {
          fontWeight: "bold",
          fontSize: "16px",
          textAlign: "center",
        },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <div style={{ textAlign: "center" }}>{value}</div>;
        },
      },
    },
    {
      name: "totalHours",
      label: "Total Hours",
      options: {
        filter: true,
        sort: true,
        customHeadLabelStyle: {
          fontWeight: "bold",
          fontSize: "16px",
          textAlign: "center",
        },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <div style={{ textAlign: "center" }}>{value}</div>;
        },
      },
    },
    {
      name: "totalAmount",
      label: "Total Amount (in Rs)",
      options: {
        filter: true,
        sort: true,
        customHeadLabelStyle: {
          fontWeight: "bold",
          fontSize: "16px",
          textAlign: "center",
        },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <div style={{ textAlign: "center" }}>{value}</div>;
        },
      },
    },
    {
      name: "paymentType",
      label: "Payment Type",
      options: {
        filter: true,
        sort: false,
        customHeadLabelStyle: {
          fontWeight: "bold",
          fontSize: "16px",
          textAlign: "center",
        },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <div style={{ textAlign: "center" }}>{value}</div>;
        },
      },
    },
    {
      name: "status",
      label: "Status",
      options: {
        filter: true,
        sort: false,
        customHeadLabelStyle: {
          fontWeight: "bold",
          fontSize: "16px",
          textAlign: "center",
        },
        customBodyRender: (value, tableMeta, updateValue) => {
          return <div style={{ textAlign: "center" }}>{value}</div>;
        },
      },
    },
  ];

  const data = salesData
    .filter((sale) => {
      const bookedAt = moment(sale.startdate, "MMMM Do YYYY, h:mm:ss a");
      const currentTime = moment();
      const daysDiff = currentTime.diff(bookedAt, "days");
      return daysDiff <= 30;
    })
    .map((sale) => ({
      bike: sale.BikeName,
      image: sale.BikePhoto,
      location: sale.Location,
      bookedAt: sale.startdate,
      totalHours: sale.totalHour,
      totalAmount: sale.totalAmount,
      paymentType: sale.paymentMethod,
      status: sale.status,
    }));

  const options = {
    filterType: "checkbox",
    customHeadLabelStyle: {
      fontWeight: "bold",
      fontSize: "16px",
      textAlign: "center",
    },
    customBodyRender: (value, tableMeta, updateValue) => {
      return <div style={{ textAlign: "center" }}>{value}</div>;
    },
  };

  return (
    <div>
      <MUIDataTable
        title={"Sales Data"}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
}

export default MonthlyReport;
