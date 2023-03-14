import { Box, Typography, Stack } from "@pankod/refine-mui";
import { useDelete, useGetIdentity, useShow } from "@pankod/refine-core";
import { useNavigate, useParams } from "@pankod/refine-react-router-v6";
import { ChatBubble, Delete, Edit, Phone, Place, Star } from "@mui/icons-material";
import { CustomButton } from "components";
const PropertyDetails = () => {
   const navigate = useNavigate(); // useNavigate hook is used to navigate between pages
   const { data: user } = useGetIdentity(); // useGetIdentity hook is used to get the current user
   const { id } = useParams(); // useParams hook is used to get the id of the record
   const { mutate } = useDelete(); // useDelete hook is used to delete a single record
   const { queryResult } = useShow(); // useShow hook is used to fetch the data of a single record

   const { data, isLoading, isError } = queryResult; // queryResult contains the data, isLoading and isError

   const propertyDetails = data?.data ?? []; // data.data contains the data of the record

   if (isLoading) <Typography>Loading...</Typography>; // isLoading is true when the data is being fetched
   if (isError) <Typography>Something went wrong!</Typography>; // isError is true when there is an error

   console.log(data);

   return (
      <Box borderRadius={3} padding={3} bgcolor="#fcfcfc" width="fit-content">
         <Typography fontSize={25} fontWeight={700} color="#11142d">
            Details
         </Typography>
         <Box mt={3} display="flex" flexDirection={{ xs: "column", lg: "row" }} gap={4}>
            <Box flex={1} maxWidth={764}>
               <img
                  src={propertyDetails.photo}
                  alt={propertyDetails.title}
                  height={546}
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                  className="property_details-img"
               />
            </Box>
            <Box mt={3}>
               <Stack
                  direction="row"
                  justifyContent="space-between"
                  flexWrap="wrap"
                  alignItems="center"
               >
                  <Typography
                     fontSize={16}
                     fontWeight={500}
                     color="#11142d"
                     textTransform="capitalize"
                  >
                     {propertyDetails.propertyType}
                  </Typography>
                  <Box>
                     {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={`star ${star}`} sx={{ color: "#f2c94c" }} />
                     ))}
                  </Box>
               </Stack>

               <Stack
                  direction="row"
                  justifyContent="space-between"
                  flexWrap="wrap"
                  alignItems="center"
               >
                  <Typography
                     fontSize={22}
                     fontWeight={700}
                     color="#11142d"
                     textTransform="capitalize"
                  >
                     {propertyDetails.title}
                  </Typography>

                  <Stack mt={0.5} direction="row" alignItems="center" gap={1}>
                     <Place sx={{ color: "#808191" }} />
                     <Typography>{propertyDetails.location}</Typography>
                  </Stack>
               </Stack>
            </Box>
         </Box>
      </Box>
   );
};
export default PropertyDetails;
