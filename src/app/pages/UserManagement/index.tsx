/**
 *
 * UserManagement
 *
 */
import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Card,
  Table,
  Button,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  InputAdornment,
  TableContainer,
  TextField,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { MdDelete, MdEdit } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { RiAddFill } from 'react-icons/ri';

import Popup from '../../components/Popup';
import DeleteForm from '../../components/DeleteForm';
import MemberForm from './MemberForm';

import { useSelector } from 'react-redux';
import { useUserManagementSlice } from './slice';
import { selectUserManagement } from './slice/selectors';

const CustomTable = styled(Table)(({ theme }) => ({
  table: {
    marginTop: theme.spacing(3),
    '& thead th': {
      fontWeight: '600',
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
    },
    '& tbody td': {
      fontWeight: '300',
    },
    '& tbody tr:hover': {
      backgroundColor: '#fffbf2',
      cursor: 'pointer',
    },
  },
}));

interface Props {}

export function UserManagement(props: Props) {
  const { actions } = useUserManagementSlice();
  const user = useSelector(selectUserManagement);

  const [userData, setUserData] = useState(user);
  const [updateUser, setUpdateUser] = useState<number | null>(null);
  const [deleteUser, setDeleteUser] = useState<number | null>(null);

  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    setUserData(user);
  }, [user]);

  function handleChange(searchedVal: string | null) {
    if (searchedVal === '' || searchedVal === null) {
      setUserData(user);
    } else {
      const filteredUser = user.filter(row =>
        row.name.toLowerCase().includes(searchedVal.toLowerCase()),
      );
      setUserData(filteredUser);
    }
  }

  return (
    <>
      <div
        className="vh-100 d-flex flex-column align-justify-center"
        style={{
          backgroundColor: '#f4f5fd',
        }}
      >
        <Card
          className="d-flex flex-column align-justify-center p-5"
          style={{ width: '90%' }}
        >
          <div className="d-md-flex justify-content-between align-items-center mb-4 w-md-100">
            <TextField
              label="Search Members"
              id="outlined-start-adornment"
              className="mb-3 mb-md-0 w-md-50"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaSearch />
                  </InputAdornment>
                ),
              }}
              onChange={e => handleChange(e.target.value)}
            />
            <div>
              <Button
                variant="outlined"
                className="w-100"
                style={{ width: '100%' }}
                onClick={() => {
                  setUpdateUser(null);
                  setDeleteUser(null);
                  setOpenPopup(true);
                }}
              >
                <RiAddFill />
                <span className="">Add User</span>
              </Button>
            </div>
          </div>
          <TableContainer>
            <CustomTable
              sx={{ minWidth: 650 }}
              aria-label="User Management table"
            >
              <TableHead sx={{ bgcolor: '#dee2fc' }}>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Project</TableCell>
                  <TableCell align="center">Committee</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userData.length > 0 ? (
                  userData.map(row => (
                    <TableRow
                      key={row.id}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.role}</TableCell>
                      <TableCell>{row.project}</TableCell>
                      <TableCell align="center">{row.committee}</TableCell>
                      <TableCell align="center">
                        <IconButton
                          aria-label="Edit"
                          color="primary"
                          onClick={() => {
                            setDeleteUser(null);
                            setUpdateUser(row.id);
                            setOpenPopup(true);
                          }}
                        >
                          <MdEdit />
                        </IconButton>
                        <IconButton
                          aria-label="Delete"
                          color="secondary"
                          className="ms-2"
                          onClick={() => {
                            setDeleteUser(row.id);
                            setOpenPopup(true);
                          }}
                        >
                          <MdDelete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell>No User</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </CustomTable>
          </TableContainer>
        </Card>
      </div>
      <Popup
        title={deleteUser ? 'Are you sure wanna delete?' : 'Member Form'}
        openModal={openPopup}
        setOpenModal={setOpenPopup}
      >
        {deleteUser ? (
          <DeleteForm
            setOpenModal={setOpenPopup}
            action={actions.deleteUser(deleteUser)}
          />
        ) : (
          <MemberForm setOpenModal={setOpenPopup} updateUser={updateUser} />
        )}
      </Popup>
    </>
  );
}
