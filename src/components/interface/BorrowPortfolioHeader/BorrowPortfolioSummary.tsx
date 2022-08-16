import { Box, Grid } from '@mui/material';

import { Typography } from '@components/atomic';
import { SystemStyleObject, Theme } from '@theme'; 
import { formatCurrency } from '@utilities';

export type BorrowPortfolioSummaryProps = {
  commonOverrides: SystemStyleObject<Theme>;
  currencyCode: string;
  currencySymbol: string;
  fixedDebt?: number;
  variableDebt?: number;
  fixedPositionsCount?: number;
  variablePositionsCount?: number;
};

const BorrowPortfolioSummary = ({ 
  commonOverrides,
  currencyCode, 
  currencySymbol,
  fixedDebt,
  variableDebt,
  fixedPositionsCount,
  variablePositionsCount
}: BorrowPortfolioSummaryProps) => {

  let percentageVariable: number = 100;
  let percentageFixed: number = 0;
  if( (variableDebt !== undefined) &&  (fixedDebt !== undefined) ) {
    if (variableDebt + fixedDebt !== 0) {
      percentageVariable = ((variableDebt) / (variableDebt + fixedDebt)) * 100;
      percentageFixed = ((fixedDebt) / (variableDebt + fixedDebt)) * 100;
    }
  }

  const sideWidth = (isVar: boolean, isLimit: boolean): SystemStyleObject<Theme> => {
    const varColor = '#002BB1';
    const fixColor = '#009AB3';
    const height = '20px';
    // show small line eve if percentage is zero
    if(isLimit) {
      return {
        width: '0.5%',
        backgroundColor: isVar ? varColor : fixColor,
        height: height
      }
    } 

    return {
      width: ((isVar ? percentageVariable : percentageFixed)*0.99).toString() + '%',
      backgroundColor: isVar? varColor : fixColor,
      height: height
    }
  }

  const labelStyles: SystemStyleObject<Theme> = { 
    textTransform: "uppercase",
    fontWeight: 400, 
    fontSize: 14,
    color: "#A6A2B4",
    verticalAlign: 'middle',
    marginTop: (theme) => theme.spacing(1)
  };

  const renderDebtSummary = () => {
    return (
      <Grid container sx={{marginBottom: (theme) => theme.spacing(4)}}>
      <Grid item xs={6}>
        <Typography variant="subtitle1" sx={{...labelStyles}}>
          <Box sx={{display:'flex', justifyContent:"flex-start", textAlign: "left"}}>
            Fixed Debt
          </Box>
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle1" sx={{...labelStyles}}>
          <Box sx={{  display:'flex', justifyContent:"flex-end", textAlign: "right"}}>
            Variable Debt
          </Box>
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="body2" sx={{fontSize: 20, textTransform: "uppercase", verticalAlign: 'middle', fontWeight: 700}}>
          <Box sx={{display:'flex', justifyContent:"flex-start", textAlign: "left"}}>
          {(fixedDebt !== undefined)  ? (currencySymbol + formatCurrency(fixedDebt, true,false, 2, 2) +" "+ currencyCode) : "---"}
          <Box sx={{color: "#A6A2B4", fontWeight: 400}}> &nbsp; {"(" + percentageFixed.toFixed(2).toString() + "%)"}</Box>
          </Box>
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="body2" sx={{fontSize: 20, textTransform: "uppercase", verticalAlign: 'middle', fontWeight: 700}}>
          <Box sx={{display:'flex', justifyContent:"flex-end", textAlign: "right"}}>
          { (variableDebt !== undefined) ? (currencySymbol + formatCurrency(variableDebt, true,false, 2, 2) +" "+ currencyCode) : "---"}
          <Box sx={{color: "#A6A2B4", fontWeight: 400}}>&nbsp; { "(" + (variableDebt == 0 ? 0 : percentageVariable).toFixed(2).toString() + "%)"}</Box>
          </Box>
        </Typography>
      </Grid>

      </Grid>
    );
  }
  const renderBar = () => {
    return (
      <Grid container>
        <Grid item xs={12} display="flex">
        <Box sx={{ ...sideWidth(false, true)}}>
        </Box>
        <Box sx={{ ...sideWidth(false, false)}}>
        </Box>

        <Box sx={{ ...sideWidth(true, false)}}>
        </Box>
        <Box sx={{ ...sideWidth(true, true)}}>
        </Box>
        </Grid>
      </Grid>
  );
  }
  const renderPositionsCount = () => {
    return (
      <Grid container >
      <Grid item xs={6}>
        <Typography variant="subtitle1" sx={{ ...labelStyles}}>
          <Box sx={{display:'flex', justifyContent:"flex-start", textAlign: "left"}}>
          {fixedPositionsCount} {(fixedPositionsCount == 1) ? "POSITION" : "POSITIONS"}
          </Box>
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="body2" sx={{ ...labelStyles}}>
          <Box sx={{display:'flex', justifyContent:"flex-end", textAlign: "right"}}>
          {variablePositionsCount} {(variablePositionsCount == 1) ? "POSITION" : "POSITIONS"}
          </Box>
        </Typography>
      </Grid>
      </Grid>
    );
  }
  return (
    <>
      <Box sx={{backgroundColor: `#19152A`, borderRadius: '4px', border:"1px solid #2D2B3D", padding: (theme) => theme.spacing(4), marginTop: (theme) => theme.spacing(8)}}>
      {renderDebtSummary()}
      {renderBar()}
      {renderPositionsCount()}
      </Box>
      
    </>
  )
};

export default BorrowPortfolioSummary;
