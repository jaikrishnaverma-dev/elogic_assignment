
export function toTitleCase(str) {
    return str.split('_').map(el=>{
     return el.replace(/\b\w/g, function (match) {
        return match.toUpperCase();
      });
    }).join(' ')
  }
  const lightColors = [
    '#FFF9C4', // Light yellow
    '#D7FFFE', // Light cyan
    '#FFE4E1', // Light pink
    '#D9F7BE', // Light green
    '#E2E2F9'  // Light blue
   ];
 export function getColorById(id) {
      return lightColors[parseInt(id%4)];

  }
export const columns = [
    { field: "id", headerName: "ID", width: 70, flex: true },
    {
      field: "userName",
      headerName: "User Name",
      width: 130,
      flex: true,
      valueGetter: (value, row) => "#" + row.userName,
    },
    { field: "firstName", headerName: "First name", width: 130, flex: true },
    { field: "lastName", headerName: "Last name", width: 130, flex: true },
    {
      field: "role",
      headerName: "Role",
      width: 100,
      flex: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      flex: true,
    },

  ];