import React from "react";
import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Navbar from "../components/Navbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, CardActionArea, Stack } from "@mui/material";
import { CreditCard, ShoppingBag, Storefront } from "@mui/icons-material";

import "../styles/Dash.css";
import AccordionDash from "../components/AccordianDash";
import BarChart from "../charts/BarChart";
export default function Home() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={65} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid size={8}>
                <Stack spacing={2} direction="row">
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
                          $500.00
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
                          $900.00
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
              <Grid size={4}>
                <Stack spacing={2}>
                  <Card sx={{ maxWidth: 345 }} className="gradientlight">
                    <Stack spacing={2} direction="row">
                      <div className="shopiconstyle">
                        <Storefront style={{ marginLeft: 10 }} />
                      </div>
                      <div className="paddingall" style={{ color: "white" }}>
                        <span className="pricetitle">$203k</span>
                        <br />
                        <span className="pricesubtitle">Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                  <Card sx={{ maxWidth: 345 }}>
                    <Stack spacing={2} direction="row">
                      <div className="shopiconstyleblack">
                        <Storefront style={{ marginLeft: 10 }} />
                      </div>
                      <div className="paddingall">
                        <span className="pricetitle">$203k</span>
                        <br />
                        <span className="pricesubtitle">Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={35} />

            <Grid container spacing={2}>
              <Grid size={8}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardActionArea>
                    <CardContent>
                      <BarChart />
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid size={4}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardActionArea>
                    <CardContent>
                      <div className="paddingall">
                        <span className="pricetitle"> Popular Products</span>
                      </div>
                      <AccordionDash />
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
