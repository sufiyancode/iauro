import React, { useContext } from "react";
import {
  StudentContext,
  StudentContextType,
} from "../../../../context/StudentContext";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridEventListener,
  GridPreProcessEditCellProps,
  GridRowEditStopReasons,
  GridRowId,
  GridRowModel,
  GridRowModes,
  GridRowModesModel,
} from "@mui/x-data-grid";
import { Box, Button, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import dayjs from "dayjs";
import { DATE_FORMAT } from "../../../../constants";
import {
  validateEmail,
  validateMobile,
  validateRequired,
} from "../../../Add/components/AddStudentFrom/validations";
import { getCities, getStates, states } from "../../../../constants/states";
import { Link } from "react-router-dom";
import { CustomSelect } from "./CustomSelect";
import { colors } from "../../../../colors";

function StudentsTable() {
  // Context
  const { studentData, setStudentData } =
    useContext<StudentContextType>(StudentContext) || {};

  // States
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
    {}
  );

  const hasData = Boolean(studentData?.length);

  // Handlers
  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel((prev) => ({
      ...prev,
      [id]: { mode: GridRowModes.Edit },
    }));
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel((prev) => ({
      ...prev,
      [id]: { mode: GridRowModes.View },
    }));
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    if (setStudentData) {
      setStudentData((prev) => {
        return prev?.filter((row) => row._id !== id);
      });
    }
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel((prev) => ({
      ...prev,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    }));
  };
  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow: any = {
      ...newRow,
      dateOfBirth: dayjs(newRow?.dateOfBirth)?.format(DATE_FORMAT),
    };
    if (setStudentData) {
      setStudentData((prev) => {
        return prev?.map((row) => (row._id === newRow._id ? updatedRow : row));
      });
    }
    return updatedRow;
  };

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const validateCell = (
    params: GridPreProcessEditCellProps<any, any>,
    validateFun: (value: string) => boolean | string
  ) => {
    const hasError = validateFun(params.props.value);
    return { ...params.props, error: Boolean(hasError) };
  };
  const columsWithAction: GridColDef[] = [
    { field: "_id", headerName: "ID", width: 100 },
    {
      field: "firstName",
      headerName: "First Name",
      type: "string",
      width: 100,
      editable: true,
      preProcessEditCellProps: (params) =>
        validateCell(params, validateRequired),
    },
    {
      field: "lastName",
      headerName: "Last Name",
      type: "string",
      width: 100,
      editable: true,
      preProcessEditCellProps: (params) =>
        validateCell(params, validateRequired),
    },
    {
      field: "guardianName",
      headerName: "Guardian Name",
      type: "string",
      width: 100,
      editable: true,
      preProcessEditCellProps: (params) =>
        validateCell(params, validateRequired),
    },
    {
      field: "dateOfBirth",
      headerName: "DOB",
      type: "date",
      width: 100,
      editable: true,
      valueGetter: (value) => {
        if (!value) {
          return new Date();
        }
        return dayjs(value, DATE_FORMAT)?.toDate();
      },
      preProcessEditCellProps: (params) =>
        validateCell(params, validateRequired),
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 100,
      editable: true,
      type: "singleSelect",
      valueOptions: ["male", "female"],
      preProcessEditCellProps: (params) =>
        validateCell(params, validateRequired),
    },
    {
      field: "mobileNumber",
      headerName: "Mobile Number",
      type: "string",
      width: 130,
      editable: true,
      preProcessEditCellProps: (params) => validateCell(params, validateMobile),
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      width: 130,
      editable: true,
      preProcessEditCellProps: (params) => validateCell(params, validateEmail),
    },
    {
      field: "address",
      headerName: "Address",
      type: "string",
      width: 200,
      editable: true,
      preProcessEditCellProps: (params) =>
        validateCell(params, validateRequired),
    },
    {
      field: "state",
      headerName: "State",
      width: 100,
      editable: true,
      type: "singleSelect",
      valueOptions: getStates(),
      renderEditCell: (params) => (
        <CustomSelect
          {...params}
          handleValueChange={async (ref) => {
            await ref.current.setEditCellValue({
              id: params.id,
              field: "city",
              value: "",
            });
          }}
        />
      ),
      preProcessEditCellProps: (params) =>
        validateCell(params, validateRequired),
    },
    {
      field: "city",
      headerName: "City",
      width: 100,
      editable: true,
      type: "singleSelect",
      valueOptions: ({ row }) => {
        if (!row?.state) {
          return [];
        }
        return getCities(row?.state);
      },
      preProcessEditCellProps: (params) =>
        validateCell(params, validateRequired),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id, ...rest }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: "auto",
        marginTop: "20px",
        flex: 1,
        ...(!hasData
          ? {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "40px",
            }
          : {}),
      }}
    >
      {hasData ? (
        <DataGrid
          rows={studentData || []}
          columns={columsWithAction}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          initialState={{
            pagination: { paginationModel: { page: 0, pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10]}
          sx={{
            border: 0,
            minHeight: "400px",
            "& .Mui-error": {
              backgroundColor: colors.red[200],
            },
          }}
          getRowId={(data) => data?._id}
        />
      ) : (
        <>
          <Typography variant="body1"> No data found </Typography>
          <Link
            to={"/add"}
            style={{
              textDecoration: "none",
            }}
          >
            <Button type="button" variant="text">
              {" "}
              Add Student{" "}
            </Button>
          </Link>
        </>
      )}
    </Box>
  );
}

export default StudentsTable;
