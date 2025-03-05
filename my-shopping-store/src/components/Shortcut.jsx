import React, { useState } from "react";
import { Button, Dialog, DialogContent, DialogActions } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import { FaKeyboard } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";

const Shortcut = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Tooltip title="Shortcuts" arrow placement="bottom">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setOpen(true)}
                    className="flex items-center text-base gap-2 font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                >

                    <FaKeyboard className="text-xl" /> Shortcuts
                </Button>
            </Tooltip>

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                maxWidth="sm"
                fullWidth
                className="rounded-lg"
            >
                <div className="bg-cyan-600/70 text-white py-3 px-5 flex justify-between items-center">
                    <h2 className="text-2xl text font-bold">Keyboard Shortcuts</h2>
                    <AiOutlineClose
                        className="text-2xl cursor-pointer hover:text-red-600 transition"
                        onClick={() => setOpen(false)}
                    />
                </div>

                <DialogContent className="bg-gray-50 p-5 text-gray-800">
                    <div className="space-y-3">
                        <p className="text-lg">
                            <strong className="text-cyan-600 font-bold text-xl">Ctrl + L</strong> <span className="font-semibold">- Logout</span>
                        </p>
                        <p className="text-lg">
                            <strong className="text-cyan-600 font-bold text-xl">Ctrl + Shift + C</strong> <span className="font-semibold">- Open Add Category Form</span>
                        </p>
                        <p className="text-lg">
                            <strong className="text-cyan-600 font-bold text-xl">Ctrl + Shift + A</strong>  <span className="font-semibold">- Open Add SubCategory Form</span>
                        </p>
                        <p className="text-lg">
                            <strong className="text-cyan-600 font-bold text-xl">Ctrl + Shift + S</strong>  <span className="font-semibold">- Open SearchBar</span>
                        </p>
                    </div>
                </DialogContent>

                <DialogActions className="bg-gray-100 px-5 py-3">
                    <Button
                        onClick={() => setOpen(false)}
                        color="error"
                        variant="contained"
                        className="px-4 py-2 text-base font-semibold shadow-md hover:bg-red-600 transition"
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Shortcut;
