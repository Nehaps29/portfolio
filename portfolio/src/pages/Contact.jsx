import React, { useState } from 'react';
import { TextField, Button, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Layout from '../components/Layout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isNameRequired, setIsNameRequired] = useState(false);
  const [isEmailRequired, setIsEmailRequired] = useState(false);
  const [isMessageRequired, setIsMessageRequired] = useState(false);

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBlur = (field) => {
    switch (field) {
      case 'name':
        setIsNameRequired(!formData.name.trim());
        break;
      case 'email':
        setIsEmailRequired(!formData.email.trim());
        break;
      case 'message':
        setIsMessageRequired(!formData.message.trim());
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setIsSnackbarOpen(true);
      return;
    }

    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsSnackbarOpen(false);
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={() => handleBlur('name')}
          margin="normal"
          variant="outlined"
          fullWidth
          required
          error={isNameRequired}
          helperText={isNameRequired ? 'This field is required' : ''}
          sx={{ width: '50%', marginBottom: '16px', marginTop: '16px', border: '1px solid #00008B' }}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => handleBlur('email')}
          margin="normal"
          variant="outlined"
          fullWidth
          required
          error={isEmailRequired}
          helperText={isEmailRequired ? 'This field is required' : ''}
          sx={{ width: '50%', marginBottom: '16px', border: '1px solid #00008B' }}
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={() => handleBlur('message')}
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
          required
          error={isMessageRequired}
          helperText={isMessageRequired ? 'This field is required' : ''}
          sx={{ width: '50%', marginBottom: '16px', border: '1px solid #00008B' }}
        />
        <Button type="submit" variant="contained" color="primary" style={{ width: '50%', marginBottom: '16px' }}>
          Submit
        </Button>

        <Snackbar
          open={isSnackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleSnackbarClose}
            severity="error"
          >
            Please fill in all required fields!
          </MuiAlert>
        </Snackbar>
      </form>
    </Layout>
  );
}
