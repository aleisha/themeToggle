import './App.css';
import { Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function PlantDashboard() {
  const navigate = useNavigate();
  return (
    <div className="PhilodendronPage">
      <h1>Fauna Across the Globe</h1>
      <Grid container 
        spacing={{ xs: 2, md: 3 }} 
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: 'transparent',
          margin: '0px 10px',
        }}
      >
        <Grid size={{ xs: 12, sm: 4 }} sx={{cursor: 'pointer'}} onClick={() => navigate(`/philodendron`)}>
          <img src="%PUBLIC_URL%//images/philodendron-thumbnail.jpg" alt="Philodendron" />
          <h4>Philodendron</h4>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }} sx={{cursor: 'pointer'}} onClick={() => navigate(`/monstera`)}>
          <img src="%PUBLIC_URL%//images/monstera-thumbnail.jpg" alt="Monstera" />
          <h4>Monstera</h4>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }} sx={{cursor: 'pointer'}} onClick={() => navigate(`/hoya`)}>
          <img src="%PUBLIC_URL%//images/hoya-thumbnail.jpg" alt="Hoya" />
          <h4>Hoya</h4>
        </Grid>
      </Grid>
      <Paper>Ut molestie, nulla a venenatis imperdiet, purus magna mollis odio, non pharetra felis ligula in arcu. In non felis enim. Ut mollis suscipit ipsum nec mollis. Nulla convallis nulla vitae ligula volutpat, ut porta turpis dignissim. Proin gravida viverra placerat. In gravida odio non mauris porta, nec ullamcorper neque ultrices. Maecenas malesuada magna at nunc pretium sodales. Vivamus ultrices laoreet nunc vitae consectetur. Aenean at est ligula. Mauris finibus nisi ac leo aliquet, sed facilisis nulla feugiat. Mauris non ligula eu est feugiat luctus. Vestibulum a rutrum lectus. Morbi convallis erat in turpis convallis, in rutrum tellus consequat. Nullam tempus quam dui, eu venenatis odio euismod et. Etiam sed aliquet dui.</Paper>
    </div>
  );
}
