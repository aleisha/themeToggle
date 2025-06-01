import './App.css';
import { Paper, Container } from '@mui/material';
import { Fragment } from 'react';

export default function Hoya() {
  return (
    <Fragment>
      <Container maxWidth="xs" sx={{ display: { sm: 'block', md: 'none' } }}>
        <img src="/images/hoya-thumbnail.jpg" alt="Hoya Bella" />
      </Container>
      <Container maxWidth="xl" sx={{ display: { xs: 'none', md: 'block' } }}>
        <img src="/images/hoya-805984_640.jpg" alt="Hoya Bella" />
      </Container>
      <Container maxWidth="xl">
        <h2>Hoya</h2>
        <Paper>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque risus id ante venenatis, ac finibus sem luctus. Cras lectus lacus, ultrices non dictum in, dictum sit amet metus. Mauris quis magna at sapien scelerisque commodo et id tellus. Proin fringilla purus vel tincidunt venenatis. Nunc convallis, lorem a placerat pulvinar, diam sapien aliquet eros, sed scelerisque lorem ligula vel mauris. Fusce euismod felis id arcu lacinia, non tincidunt mi luctus. Praesent lobortis, ligula eu facilisis mattis, felis velit sollicitudin arcu, quis convallis nisl sem quis mauris. Aliquam id auctor dui, nec pellentesque eros. Morbi tincidunt mi nec sem malesuada, vel consectetur arcu ultricies. Donec fringilla dapibus ante sed cursus.</p>
          <p>Proin vestibulum eu mi vel bibendum. Suspendisse varius posuere purus eget faucibus. Aliquam rutrum augue libero, nec lacinia mauris eleifend eu. Ut placerat metus turpis, et dictum ex ultrices non. Praesent pharetra velit pharetra magna iaculis, at accumsan quam euismod. Phasellus enim libero, efficitur id massa ac, egestas vehicula quam. Nunc ac sapien ut orci eleifend fringilla. Proin eleifend diam at massa blandit lobortis non ac felis. Vestibulum porta vehicula dolor, in volutpat eros pretium at. Duis molestie rutrum dui vel tempor. Suspendisse potenti. In fringilla tellus id nunc pulvinar, at egestas massa suscipit. Nunc elementum ut purus in hendrerit. Etiam tempor ut nunc a venenatis. Vivamus et nisi sollicitudin, mattis nibh sed, fringilla arcu.</p>
        </Paper>
      </Container>
    </Fragment>
  );
}
