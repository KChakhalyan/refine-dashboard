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
               colors={["#475be8", "#E4E8EF"]}
            />
            <PieChart
               title="Properties for rent"
               value={550}
               series={[60, 40]}
               colors={["#FD8539", "#E4E8EF"]}
            />
            <PieChart
               title="Total customers"
               value={5684}
               series={[75, 25]}
               colors={["#2ED480", "#E4E8EF"]}
            />
            <PieChart
               title="Properties for Cities"
               value={555}
               series={[75, 25]}
               colors={["#FE6D8E", "#E4E8EF"]}
            />
         </Box>
         <Stack mt={2} width="100%" direction={{ xs: "column", lg: "row" }} gap={4}>
            <TotalRevenue />
            <PropertyReferrals />
         </Stack>
      </Box>
   );
};
export default home;
