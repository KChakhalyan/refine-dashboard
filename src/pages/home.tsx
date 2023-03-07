import { Typography, Box, Stack } from "@pankod/refine-mui";
import { useList } from "@pankod/refine-core";
import { PieChart, PropertyReferrals, TotalRevenue, PropertyCard, TopAgent } from "components";

const home = () => {
   return (
      <Box>
         <Typography fontSize={25} fontWeight={700} color="#11142D">
            Dashboard
         </Typography>
         <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
            <PieChart
               title="Properties for sale"
               value={684}
               series={[75, 25]}
               colors={["#475be8", "#e4e8ef"]}
            />
            <PieChart
               title="Properties for rent"
               value={550}
               series={[60, 40]}
               colors={["#47abe8", "#e4b8ef"]}
            />
            <PieChart
               title="Total customers"
               value={5684}
               series={[75, 25]}
               colors={["#375be8", "#A4e8ef"]}
            />
            <PieChart
               title="Properties for Cities"
               value={555}
               series={[75, 25]}
               colors={["#475be8", "#e4e8ef"]}
            />
         </Box>
      </Box>
   );
};
export default home;
