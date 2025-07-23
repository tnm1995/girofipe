import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';

export default function Contato() {
  return (
    <Container maxWidth="sm" sx={{ mt: 10, mb: 10 }}>
      <Box sx={{ bgcolor: '#fff', borderRadius: 3, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', p: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: '#1D89FF', mb: 2 }}>Contato</Typography>
        <Typography variant="body1" sx={{ mb: 3, color: '#444' }}>
          Fale conosco! Preencha o formulário abaixo e retornaremos o mais breve possível.
        </Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Nome" variant="outlined" required />
          <TextField label="E-mail" variant="outlined" type="email" required />
          <TextField label="Mensagem" variant="outlined" multiline rows={4} required />
          <Button variant="contained" sx={{ bgcolor: '#1D89FF', color: '#fff', fontWeight: 600, mt: 2 }}>Enviar</Button>
        </Box>
      </Box>
    </Container>
  );
}
