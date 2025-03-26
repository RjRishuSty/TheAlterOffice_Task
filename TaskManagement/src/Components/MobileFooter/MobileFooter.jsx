import { Box, Chip, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import FooterBtn from "./FooterBtn";
import { useSelector, useDispatch } from "react-redux";
import { clearChecked } from "../../Redux/Slices/CheckedTask";

const MobileFooter = () => {
    const xSmall = useMediaQuery("(max-width:410px)");
    const checkedTask = useSelector((state) => state.check);
    const dispatch = useDispatch();

    return (
        <Stack
            component="footer"
            sx={{
                width: "100%",
                padding: "15px 10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#1A1C20",
                borderRadius: "10px",
                marginBottom: 0,
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                flexDirection: "row",
            }}
        >
            <Box sx={{ width: xSmall ? 'auto' : '50%', display: 'flex', alignItems: 'center' }}>
                {checkedTask.length > 0 && (
                    <Chip
                        label={`${checkedTask.length} Tasks Selected`}
                        onDelete={() => dispatch(clearChecked())}
                        sx={{
                            border: "0.2px solid #FFFFFF",
                            borderRadius: 12,
                            backgroundColor: "#000",
                            color: "#fff",
                            fontSize: "14px",
                            mr: 2,
                            "& .MuiChip-deleteIcon": {
                                color: "#bbb",
                                "&:hover": { color: "#fff" },
                            },
                        }}
                    />
                )}
                <LibraryAddCheckIcon fontSize="small" sx={{ color: "white" }} />
            </Box>
            <Box sx={{ width: xSmall ? 'auto' : '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FooterBtn />
            </Box>
        </Stack>
    );
};

export default MobileFooter;
