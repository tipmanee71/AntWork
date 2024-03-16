import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { 
    Box,
    Grid,
    styled,
    Typography
} from '@mui/material';

import { ContentCopy } from '@mui/icons-material';

import ButtonBlue from '../shared/general/ButtonBlue';
import TextFieldTheme from '../shared/general/TextFieldTheme';

import { generatorTokenChildsCompany } from '../../../actions/company';

const RootStyled = styled(Box)({
    "& .header-text": {
        fontSize: 20,
    },
});

const BoxContent = styled(Box)({
    width:"100%",
    display:"flex",
    flexDirection:"column"
});

const BoxLink = styled(Box)({
    display:"flex",
    alignItems:"center"
});

const BoxTextLink = styled(Box)({
    display:"flex",
    
});

const ButtonCopy = styled(Box)({
    width: 50,
    minWidth: 50,
    height: 50,
    cursor: "pointer",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color:"#c4c4c4"
});

const GeneretorChildsCompany = () => {
    const dispatch = useDispatch();
    const [addLink, setAddLink] = useState(''); 

    const HandleGeneratorLink = async () => {
        let result = await dispatch(generatorTokenChildsCompany());
        if (result) {
            setAddLink(result.data.token);
        }
    };

    return (
        <RootStyled>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <BoxContent>
                        <Typography className="header-text" variant="h7">แชร์ลิงก์สำหรับบริษัทลูก</Typography>
                        <Box style={{ margin:"16px 0", width:"100%" }}>
                            {!addLink && 
                                <ButtonBlue
                                    variant="contained"
                                    style={{ width:"fit-content" }}
                                    onClick={HandleGeneratorLink}
                                >รับลิงก์</ButtonBlue>
                            }
                            {addLink && 
                                <BoxLink>
                                    <Typography 
                                        style={{ 
                                            width:"calc(100% - 50px)",
                                            // display: '-webkit-box',
                                            // overflow: 'hidden',
                                            // textOverflow: 'ellipsis',
                                            // WebkitBoxOrient: 'vertical',
                                            // WebkitLineClamp: 2,
                                            fontSize: 14
                                        }} 
                                        noWrap
                                    >{`${process.env.REACT_APP_PUBLIC_URL}company/confirm-child-company?token=${addLink}`}</Typography>
                                    <CopyToClipboard text={`${process.env.REACT_APP_PUBLIC_URL}company/confirm-child-company?token=${addLink}`}>
                                        <ButtonCopy><ContentCopy /></ButtonCopy>
                                    </CopyToClipboard>
                                </BoxLink>
                            }
                        </Box>
                    </BoxContent>
                </Grid>
            </Grid>
        </RootStyled>
    );
};

export default GeneretorChildsCompany;