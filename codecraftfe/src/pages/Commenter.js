import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
  Alert,
  Collapse,
  Card,
} from "@mui/material";


const Commenter = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  //media
  const isNotMobile = useMediaQuery("(min-width: 1000px)");
  //fields
  const [text, settext] = useState("");
  const [comment, setcomment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/v1/openai/commenter', {
        text
      });
      console.log(data.message);
      setcomment(data.data);
    } catch (err) {
      console.log(err);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <Box
      width={isNotMobile ? "40%" : "80%"}
      p={"2rem"}
      m={"2rem auto"}
      borderRadius={5}
      sx={{ boxShadow: 5 }}
      backgroundColor={theme.palette.background.alt}
    >
      <Collapse in={!!error}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      </Collapse>
      <form onSubmit={handleSubmit}>
        <Typography variant="h3">Add Comments</Typography>
        <TextField
          label="enter the code to be optimized"
          type="text"
          required
          margin="normal"
          fullWidth
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{ color: "white", mt: 2 }}
        >
          Submit
        </Button>
        <Typography mt={2}>
          not this tool ? <Link to="/tools">Go Back</Link>
        </Typography>
      </form>
      {comment ? (
        <Card
          sx={{
            mt: 4,
            border: 1,
            boxShadow: 0,
            height: "500px",
            borderRadius: 5,
            borderColor: "natural.medium",
            bgcolor: "background.default",
          }}
        >
          <Typography p={2} sx={{ whiteSpace: "pre-line" }}>
            {comment}
          </Typography>
        </Card>
      ) : (
        <Card
          sx={{
            mt: 4,
            border: 1,
            boxShadow: 0,
            height: "500px",
            borderRadius: 5,
            borderColor: "natural.medium",
            bgcolor: "background.default",
          }}
        >
          <Typography
            variant="h5"
            color="natural.main"
            sx={{
              textAlign: "center",
              verticalAlign: "middle",
              lineHeight: "450px",
            }}
          >
            Code Will Appear Here
          </Typography>
        </Card>
      )}
    </Box>
  );
};

export default Commenter;
