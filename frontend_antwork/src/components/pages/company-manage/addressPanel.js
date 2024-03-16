import React, { useState } from "react";
import { Divider, Grid, styled, Typography } from "@mui/material";
import ButtonBlue from "../shared/general/ButtonBlue";
import DrawerHeadOfficeAddress from "./drawerHeadOfficeAddress";
import DrawerBranchAddress from "./drawerBranchAddress";
import ModalConfirmDeleteBranch from "./modalConfirmDeleteBranch";
import { useDispatch } from "react-redux";
import { deleteBranchByBranchId } from "../../../actions/branch";
import { getCompanyManage } from "../../../actions/company";
import company from "../assets/data/company";
import branch from "../assets/data/branch"
const StyledRoot = styled("div")({
  "& .header-text": {
    fontSize: 20,
  },
  "& .edit-button": {
    borderRadius: 19,
    "& i": {
      fontSize: 12,
    }
  },
  "& .MuiDivider-root": {
    borderWidth: "0px 0px thin",
    borderColor: "#919eab52",
    borderStyle: "dashed",
  },
  "& .delete-button": {
    color: "#d32f2f",
    borderColor: "#d32f2f",
    borderRadius: 19,
    "& i": {
      fontSize: 12,
    },
    "&:hover": {
      borderColor: "#d32f2f",
      borderRadius: 19,
    }
  }
})

const AddressPanel = (props) => {
  //const { company, branches } = props;


  const dispatch = useDispatch();

  const [isOpenDrawerHeadOfficeAddress, setIsOpenDrawerHeadOfficeAddress] = useState(false);
  const [isOpenDrawerBranchAddressAdd, setIsOpenDrawerBranchAddressAdd] = useState(false);
  const [isOpenDrawerBranchAddressEdit, setIsOpenDrawerBranchAddressEdit] = useState({
    open: false,
    editIndex: null,
  });
  const [isOpenModalBranchDelete, setIsOpenModalBranchDelete] = useState({
    open: false,
    deleteIndex: null
  });

  // Dummy data for branches (replace with actual data)
  const branches = [
    {
      id: 1,
      branchName: "Branch 1",
      address: "123 Street",
      district: "District",
      province: "Province",
      areaCode: "12345",
      country: "Country",
      mainContactName: "John Doe",
      mainContactPhone: "123-456-7890",
      mainContactEmail: "john.doe@example.com"
    },
  ];
  // const [branches, setBranches] = useState(branchesMock);

  const onDeleteBranch = async (branch) => {
    //ฟังก์ชันลบสาขา
    // setBranches(branches.filter((item, index) => deleteIndex !== index));
    const response = await dispatch(deleteBranchByBranchId(branch.idBranch));
    if (response.status === 200){
      dispatch(getCompanyManage());
      setIsOpenModalBranchDelete({open: false, deleteIndex: null})
    }
  }

  return (
    <StyledRoot>
      <Grid container spacing={2}>
        <Grid item xs={12} container justifyContent="space-between" alignItems="center">
          <Typography className="header-text" variant="h7">สำนักงานใหญ่</Typography>
          <ButtonBlue className="edit-button" variant="outlined" size="small" onClick={()=>{setIsOpenDrawerHeadOfficeAddress(true)}}><i className="fa-regular fa-pen"></i>แก้ไข</ButtonBlue>
        </Grid>

        <Grid item xs={12} container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="caption" color="text.secondary">
              ที่อยู่
            </Typography>
            <Typography>{company && company.address || "-"}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="caption" color="text.secondary">
              อำเภอ
            </Typography>
            <Typography>{company && company.district || "-"}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="caption" color="text.secondary">
              จังหวัด
            </Typography>
            <Typography>{company && company.province || "-"}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="caption" color="text.secondary">
              รหัสไปรษณีย์
            </Typography>
            <Typography>{company && company.areaCode || "-"}</Typography>
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <Typography variant="caption" color="text.secondary">
              ประเทศ
            </Typography>
            <Typography>{companyAddress && companyAddress.country || "-"}</Typography>
          </Grid> */}
        </Grid>
        
        <Grid item xs={12} container justifyContent="space-between" alignItems="center">
          <Typography className="header-text" variant="h7">สาขาอื่นๆ ของบริษัท</Typography>
          <ButtonBlue variant="outlined" onClick={()=>{setIsOpenDrawerBranchAddressAdd(true)}}><i className="fa-regular fa-plus"></i>เพิ่มสาขา</ButtonBlue>
        </Grid>


        {branches.map((item, index) => (
          <Grid key={`branch_${index}`} item xs={12} container spacing={1}>

            <Grid item xs={12}>
              <Divider />
            </Grid>

            <Grid item xs={12} container justifyContent="space-between" alignItems="center" wrap="nowrap">
              <Grid item>
                <Typography variant="caption" color="text.secondary">
                  ชื่อสาขา
                </Typography>
                {/* <Typography>บริษัท ปูนซิเมนต์ไทย จำกัด(มหาชน) สาขา ระยอง</Typography> */}
                <Typography>{item.branchName || "-"}</Typography>
              </Grid>
              <Grid item>
                <ButtonBlue className="edit-button" variant="outlined" size="small" onClick={()=>{setIsOpenDrawerBranchAddressEdit({open: true, editIndex: index})}}><i className="fa-regular fa-pen"></i>แก้ไข</ButtonBlue>
                <ButtonBlue className="delete-button" variant="outlined" size="small" onClick={()=>{setIsOpenModalBranchDelete({open: true, deleteIndex: index})}} style={{marginLeft: 8}}><i className="fa-regular fa-trash-can"></i>ลบ</ButtonBlue>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption" color="text.secondary">
                ที่อยู่
              </Typography>
              {/* <Typography>39/30 ถนนเพชรเกษม</Typography> */}
              <Typography>{item.address || "-"}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="caption" color="text.secondary">
                อำเภอ
              </Typography>
              {/* <Typography>บางแค</Typography> */}
              <Typography>{item.district || "-"}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="caption" color="text.secondary">
                จังหวัด
              </Typography>
              {/* <Typography>กรุงเทพมหานคร</Typography> */}
              <Typography>{item.province || "-"}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="caption" color="text.secondary">
                รหัสไปรษณีย์
              </Typography>
              {/* <Typography>10160</Typography> */}
              <Typography>{item.areaCode || "-"}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="caption" color="text.secondary">
                ประเทศ
              </Typography>
              {/* <Typography>ประเทศไทย</Typography> */}
              <Typography>{item.country || "-"}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="caption" color="text.secondary">
                ผู้ติดต่อ
              </Typography>
              {/* <Typography>หนองมน คนบ้านเดียวกัน</Typography> */}
              <Typography>{item.mainContactName || "-"}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="caption" color="text.secondary">
                เบอร์โทรศัพท์
              </Typography>
              {/* <Typography>0999999999</Typography> */}
              <Typography>{item.mainContactPhone || "-"}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="caption" color="text.secondary">
                อีเมล
              </Typography>
              {/* <Typography>nongmon@gmail.com</Typography> */}
              <Typography>{item.mainContactEmail || "-"}</Typography>
            </Grid>

            {isOpenDrawerBranchAddressEdit.open && isOpenDrawerBranchAddressEdit.editIndex === index && (
              <DrawerBranchAddress
                open={isOpenDrawerBranchAddressEdit.open}
                onClose={()=>{setIsOpenDrawerBranchAddressEdit({open: false, editIndex: null})}}
                isEdit
                branch={item}
                company={company}
              />
            )}

            {isOpenModalBranchDelete.open && isOpenModalBranchDelete.deleteIndex === index && (
              <ModalConfirmDeleteBranch
                open={isOpenModalBranchDelete.open}
                onClose={()=>{setIsOpenModalBranchDelete({open: false, deleteIndex: null})}}
                onConfirm={()=>{onDeleteBranch(item)}}
              />
            )}
          </Grid>
        ))}


      </Grid>

      {isOpenDrawerHeadOfficeAddress && (
        <DrawerHeadOfficeAddress
          open={isOpenDrawerHeadOfficeAddress}
          onClose={()=>{setIsOpenDrawerHeadOfficeAddress(false)}}
          company={company}
        />
      )}

      {isOpenDrawerBranchAddressAdd && (
        <DrawerBranchAddress
          open={isOpenDrawerBranchAddressAdd}
          onClose={()=>{setIsOpenDrawerBranchAddressAdd(false)}}
          company={company}
        />
      )}
    </StyledRoot>
  );
};

export default AddressPanel;
