import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { Chip, IconButton } from "@mui/material";
import { toTitleCase } from "../../utils/tools";
import FaceIcon from "@mui/icons-material/Face";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const columns = [
  { field: "id", headerName: "ID", width: 70,    flex:true, },
  { field: "userName", headerName: "User Name", width: 130,    flex:true,    valueGetter: (value, row) => '#'+row.userName},
  { field: "firstName", headerName: "First name", width: 130,    flex:true, },
  { field: "lastName", headerName: "Last name", width: 130,    flex:true, },
  {
    field: "role",
    headerName: "Role",
    width: 100,
    flex:true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
    flex: true,
  },
  {
    field: "group",
    headerName: "Groups",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: "auto",
    flex: true,
    // maxWidth: 200,
    renderCell: (value, row) =>
      value.value.map((el) => (
        <Chip
          sx={{ marginRight: 1 }}
          icon={<FaceIcon />}
          size="small"
          label={toTitleCase(el)}
        />
      )),
  },
];

export default function UserTable() {
  const { users } = useSelector((data) => data.mainSlice);
  return (
    <div style={{maxHeight:"80vh",height:"75vh",maxWidth: "calc(100% - 10px)" }}>
      <DataGrid
        rows={users}
        columns={[
          ...columns,
          {
            type: "actions",
            headerName: "Actions",
            sortable: false,
            filterable: false,
            width: 120,
            renderCell: (value, row) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  gap: "10px",
                }}
              >
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <EditIcon color="primary" />
                </IconButton>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              </div>
            ),
          },
        ]}
        
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10,25,50,100]}
        checkboxSelection
      />
    </div>
  );
}
