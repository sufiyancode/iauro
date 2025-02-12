import React from "react";
import Sidenav from "../components/Sidenav";
import {
  Box,
  Card,
  Typography,
  CardActionArea,
  CardContent,
  Stack,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid2";
import {
  CreditCard,
  PanoramaFishEye,
  ShoppingBag,
  Storefront,
  Visibility,
} from "@mui/icons-material";
import GeoChart from "../charts/GeoChart";
import PieChart from "../charts/PieChart";
import HBarChart from "../charts/HBarChart";
import CountUp from "react-countup";

export default function Analytics() {
  return (
    <>
      {" "}
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />

          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid container size={12} spacing={2}>
                <Grid size={2} spacing={2}>
                  <Stack spacing={2} direction="column">
                    <Card
                      sx={{ minWidth: 49 + "%", height: 150 }}
                      className="gradient"
                    >
                      <CardActionArea>
                        <CardContent>
                          <div className="shopiconstyle">
                            <CreditCard />
                          </div>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ color: "white" }}
                          >
                            <CountUp delay={0.4} end={9235} duration={0.6} />
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            component="div"
                            sx={{ color: "white" }}
                          >
                            Total Earnings
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                    <Card
                      sx={{ minWidth: 49 + "%", height: 150 }}
                      className="gradientlight"
                    >
                      <CardActionArea>
                        <CardContent>
                          <div className="shopiconstyle">
                            <ShoppingBag />
                          </div>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ color: "white" }}
                          >
                            <CountUp delay={0.4} end={32400} duration={0.6} />
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            component="div"
                            sx={{ color: "white" }}
                          >
                            Total Orders
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Stack>
                </Grid>
                <Grid size={2} spacing={2}>
                  <Stack spacing={2} direction="column">
                    <Card
                      sx={{ minWidth: 49 + "%", height: 150 }}
                      className="gradient"
                    >
                      <CardActionArea>
                        <CardContent>
                          <div className="shopiconstyle">
                            <CreditCard />
                          </div>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ color: "white" }}
                          >
                            <CountUp delay={0.4} end={72840} duration={0.6} />
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            component="div"
                            sx={{ color: "white" }}
                          >
                            Total Earnings
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                    <Card
                      sx={{ minWidth: 49 + "%", height: 150 }}
                      className="gradientlight"
                    >
                      <CardActionArea>
                        <CardContent>
                          <div className="shopiconstyle">
                            <Visibility />
                          </div>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ color: "white" }}
                          >
                            <CountUp delay={0.4} end={49238} duration={0.6} />
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            component="div"
                            sx={{ color: "white" }}
                          >
                            Total Visitors
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Stack>
                </Grid>
                <Grid size={8}>
                  <Card
                    sx={{ minWidth: 345, height: "100%" }}
                    className="gradientlight"
                  >
                    <HBarChart />
                  </Card>
                </Grid>
              </Grid>
              <Box height={10} />
              <Grid container size={12} spacing={2}>
                <Grid size={8}>
                  <Card sx={{ height: 60 + "vh" }}>
                    <CardActionArea>
                      <CardContent>
                        <GeoChart />
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid size={4}>
                  <Card sx={{ height: 60 + "vh" }}>
                    <CardActionArea>
                      <CardContent>
                        <PieChart />
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
