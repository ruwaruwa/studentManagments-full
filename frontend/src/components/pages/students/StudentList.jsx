import { Box, IconButton } from "@mui/material"

import React from "react"
import { DataGrid } from "@mui/x-data-grid";


export default function StudentList({clientData,clientsUpdate,clientDelete}) {


  //console.log(clientData)

  const columns = [
    {field:'studentID', headerName: 'studentID', width: 90 },
    {
      field:'name',
      headerName:'name',
      width: 150,
      editable: true,
    },
    {
      field:'phone',
      headerName:'phone',
      width:150,
      editable: true,
    },
    {
        field:'address',
        headerName:'address',
        width:150,
        editable: true,
      },
      {
        field:'courseID',
        headerName:'courseId',
        width:150,
        editable: true,
      },
      {
        field:'classid',
        headerName:'classId',
        width:150,
        editable: true,
      },

    {
      field:'Actions',
      headerName:'Actions',
      width: 110,
      editable: true,

      renderCell:(params)=>{
return<Box>
{/* {///up.del buto} */}

{/* <IconButton onClick={()=>clientsUpdate(params.row)}>
<DriveFileRenameOutlineIcon sx={{color:'blue'}} ></DriveFileRenameOutlineIcon>

</IconButton>
<IconButton onClick={()=>clientDelete(params.row)}>
<DeleteSweepIcon sx={{color:'red'}}></DeleteSweepIcon>
</IconButton> */}

</Box>

      }
    },
    
  ];
  
  const rows= clientData ? clientData : null
  


{/* {clientslists ,datagridview} */}
return (
<>  

<Box sx={{height: 400, width: '80%' }}>
  <DataGrid
    rows={rows}
    columns={columns}

    getRowId={(row)=>row._id}
    initialState={{
      pagination: {
        paginationModel: {
          pageSize:5,
        },
      },
    }}
    pageSizeOptions={[5]}
   
    disableRowSelectionOnClick
  />
</Box>
</>
)
}